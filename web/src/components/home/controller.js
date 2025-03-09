// @flow
import ua from 'ua-parser-js'
import { sendAjax, getTimeByUtc, formatTimeStamp, getLastHourStr, getCookie } from '@utils';
import Chart from '../chart/index.vue';
// import options from './options';
import DataTable from './table/index.vue';
import Details from './details/index.vue';
import MyFilter from './filter/index.vue';
import HighCharts from 'highcharts';

let options = {
        chart: {
            type: 'line'
        },
        title: {
            text: 'bug总数：0'//表头文字
        },
        subtitle: {
            text: '数据来源: Chime-Rendebug.com'//表头下文字
        },
        xAxis: {//x轴显示的内容
            type: 'datetime',
            categories: [],
            tickmarkPlacement: 'on'
            // plotbands: [{//可以显示一个方块，如果需要的话可以更改透明度和颜色
            //     from: 4.5,
            //     to: 6.5,
            //     color: 'rgba(68, 170, 213, 0)'//透明度和颜色
            // }]

        },

        yAxis: {//y轴显示的内容
            title: {
                text: 'bug数量（个）'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true // 开启数据标签
                },
                enableMouseTracking: true // 关闭鼠标跟踪，对应的提示框、点击事件会失效
            },
            area: {
				fillColor: {
					linearGradient: {
						x1: 0,
						y1: 0,
						x2: 0,
						y2: 1
					},
					stops: [
						[0, HighCharts.getOptions().colors[0]],
						[1, HighCharts.Color(HighCharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
					]
				},
				marker: {
					radius: 2
				},
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				threshold: null
			}
        },
        series: [{//两条数据
            data: [],
            name: 'bug',
            type: 'area'
        }]
    }
export default {
    name: 'home',
    components: {
        Chart,
        DataTable,
        Details,
        MyFilter,
    },
    data () {
        let now = Date.now();
        let oneDay = 1000 * 60 * 60 * 24;
        return {
            searchValue: '',
            dateFilters: [
                {name: '1hour', label: '1小时'},
                {name: '1Day', label: '1天'},
                {name: '7day', label: '7天'},
                {name: '90day', label: '90天'},
            ],
            options: options,
            tableData: {
                total: 0,
                list: []
            },
            currentDetail: {},
            showDetail: false,
            currentStartTime: now - oneDay,
            currentEndTime: now,
            currentCount: 10,
            tableLoading: false,
            highChartData: [],
            totalCount: 0
        }
    },
    mounted () {
        let timer = null;
        this.getTableData();
        var ws = new WebSocket('wss://ren-debug.chime.me:3001');

        ws.onopen = function(e){
            console.log("连接服务器成功");
            let appKey = getCookie('appKey');
            ws.send('appKey:' + appKey);
        }
        ws.onclose = function(e){
            console.log("服务器关闭");
        }
        ws.onerror = function(){
            console.log("连接出错");
        }
        ws.onmessage = (e) => {
            console.log(e.data);
            if (/^bug/.test(e.data)) {
                let data = JSON.parse(e.data.replace(/^bug/, ''));
                try {
                    data.detail = JSON.parse(data.detail.replace(/[\r\n]/g, ' '));
                    data.custom = JSON.parse(data.custom.replace(/[\r\n]/g, ' '));
                    data.action_info = JSON.parse(data.action_info.replace(/[\r\n]/g, ' '));
                } catch (error) {
                    
                }
                this.formatData(data);
                // this.tableData.push(data);
                clearTimeout(timer);
                timer = setTimeout(() => {
                    this.currentEndTime = Date.now();
                    // 刷新当前页面
                    this.getTableData(null, true);
                }, 500);
                this.$Notice.warning({
                    duration: 5,
                    render: (h) => {
                        return h('div', [
                            h('span', `新错误提醒:`),
                            h('span', {
                                attrs: {
                                    class: 'notice-error'
                                },
                            }, data.type),
                            h('span', {
                                attrs: {
                                    class: 'notice-link'
                                },
                                on: {
                                    click: () => {
                                        this.openDetails(data);
                                    }
                                },
                            }, '点击查看'),
                        ])
                    }
                })
            } else if (/^server:\d+/.test(e.data)) {
                let appKey = getCookie('appKey');
                if (appKey) {
                    ws.send('appKey:' + appKey);
                }
            }
        }
    },
    methods: {
        getTableData (paramVm, flag) {
            if (paramVm) {
                this.__paramVm = paramVm;
            } else if (flag && this.__paramVm) {
                paramVm = this.__paramVm;
            }
            let {currentErrorType, currentStauts, currentSearchKey, sortType, sortKey, currentPage = 1, pageSize = 20} = paramVm || {};

            let params = `startTime=${this.currentStartTime || ''}&endTime=${this.currentEndTime || ''}`;
            if (currentErrorType) {
                params += '&type=' + currentErrorType;
            }
            if (currentStauts) {
                params += '&status=' + currentStauts;
            }
            if (currentSearchKey) {
                params += '&searchKey=' + currentSearchKey;
            }
            if (sortType || sortKey) {
                params += '&orderBy=' + (sortKey || 'time') + ' ' + sortType
            }
            params += '&start=' + ((currentPage - 1) * pageSize);
            params += '&end=' + (currentPage * pageSize - 1);
            this.tableLoading = true;
            return Promise.all([sendAjax({
                url: `/queryBugInfoReport?${params}&count=${this.currentCount}`,
                type: 'GET',
            }), sendAjax({
                url: '/queryBugInfoByWhere?' + params,
                type: 'GET',
            })])
            .then(resArr => {
                let res = resArr[0];
                if (!res.success) return
                this.highChartData = res.data
                this.fliterData(this.highChartData);
                res = resArr[1];
                if (!res.success) return;
                this.tableData.list = (res.data.list || []).map(item => {
                    this.formatData(item);
                    return item;
                });
                this.tableData.total = res.data.total || 0;
            }).finally(res => {
                this.tableLoading = false;
            });
        },
        formatData (data) {
            data.formatTime = formatTimeStamp(data.time, 'yyyy-MM-dd hh:mm');
            let status = data.status || '未解决';
            switch (status) {
                case '未解决':
                    data.typeIcon = 'md-help-circle';
                    break;
                case '正在处理':
                    data.typeIcon = 'md-cog';
                    break;
                case '已解决':
                    data.typeIcon = 'md-checkmark-circle';
                    break;
                case '忽略':
                    data.typeIcon = 'md-close-circle';
                    break;
                case '未复现':
                    data.typeIcon = 'md-alert';
                    break;
                default:
                    data.typeIcon = 'md-help-circle';
            }
            data.ua = ua(data.user_agent)
            try {
                data.detail = (typeof data.detail === 'object' ? data.detail : JSON.parse(data.detail)) || {};
            } catch (err) {
                data.detail = {};
            }
        },
        openDetails (obj) {
            // console.log(obj)
            // this.currentDetail = obj || {};
            // this.showDetail = true;
            this.$router.push({path:`/home/detail/${obj.id}`})
        },
        timeChange (data) {
            this.currentStartTime = data.timeRange[0];
            this.currentEndTime = data.timeRange[1];
            this.currentCount = data.count;

            this.getTableData();
        },
        // 从highChartData中筛选出可用的数据
        fliterData (highChartData = []) {
            let xAxisData = []
            let yAxisData = []
            let xAxis = highChartData.map(v => {
                return v.endTime
            })
            highChartData.forEach(v => {
                xAxisData.push(getLastHourStr(v.endTime, false))
                yAxisData.push(v.count)
            })
            this.options.xAxis.categories = xAxisData
            this.options.series[0].data = yAxisData
            let total = yAxisData.reduce((prev, next) => {
                return prev + next
            }, 0)
            this.options.title.text = `${this.__paramVm ? this.__paramVm.currentErrorType : ''} bug总数：${total}`
        }
    }
}
