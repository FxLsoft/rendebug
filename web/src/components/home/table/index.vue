<template>
<div>
    <div class="page-wrap">
        <div class="title-left">
            <Button type="error" :disabled="selection.length == 0" :loading="isDeleteLoading" @click="deleteSelected">{{isDeleteLoading ? 'Delete...' : 'Delete'}}</Button>
        </div>
        <Page :total="tableData.total" :current.sync="currentPage" :page-size="pageSize" show-total show-elevator show-sizer @on-page-size-change="onPageSizeChange" :page-size-opts="[10, 20, 50, 100, 200]"/>
    </div>
    <Table :stripe="true" 
        :columns="columns" height="400" 
        :data="tableData.list" 
        :loading="loading" 
        @on-row-dblclick="openDetail"
        @on-sort-change="sortChange"
        @on-selection-change="selectChange"
        class="render-bug-table" ref="table">
        <template slot-scope="{ row }" slot="detail">
            <div v-if="row.detail.message">{{getMessage(row.detail.message)}}</div>
        </template>
        <template slot-scope="{ row }" slot="time">
            <div>{{row.formatTime}}</div>
        </template>
        <template slot-scope="{ row }" slot="status">
            <Dropdown trigger="click" @on-click="updateStatus(row.id, $event)">
                <Icon :type="`${row.typeIcon} status-icon cursor-pointer`" size="24" />
                <DropdownMenu slot="list">
                    <DropdownItem v-for="(item, index) in status" :key="index" :name="item.title">
                        <Icon :type="`${item.type} status-icon`" size="24" style="margin-right: 5px"/>{{item.title}}
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </template>
    </Table>
</div>
</template>
<script>
import { formatTimeStamp } from '@utils';
import { updateStatus, deleteBugByIds } from './http.js';
export default {
    props: {
        tableData: Object,
        loading: Boolean,
    },
    data () {
        let vm = this;
        return {
            status: [{
                type: 'md-help-circle',
                title: '未解决',
                color: 'rgb(255, 100 ,122)',
            }, {
                type: 'md-cog',
                title: '正在处理',
                color: 'rgb(18, 150, 219)',
            }, {
                type: 'md-checkmark-circle',
                title: '已解决',
                color: 'rgb(12, 168, 122)',
            }, {
                type: 'md-close-circle',
                title: '忽略',
                color: 'rgb(113, 94, 210)',
            }, {
                type: 'md-alert',
                title: '未复现',
                color: '#ff9900',
            }],
            columns: [{
                type: 'selection',
                width: 60,
                align: 'center'
            },{
                title: 'Detail',
                key: 'detail',
                slot: 'detail',
                width: 300,
                renderHeader (h) {
                    return h('div', [
                        h('Input', {
                            props: {
                                search: true,
                            },
                            style: {
                                width: '230px'
                            },
                            on: {
                                'on-search': function (val) {
                                    vm.currentSearchKey = (val || '').trim();
                                    vm.updateData();
                                },
                            }
                        }),
                        h('Icon', {
                            props: {
                                type: 'ios-cloud-download cursor-pointer export-icon',
                                size: '16',
                                color: '#008df2',
                            },
                            attrs: {
                                title: '导出CSV',
                            },
                            nativeOn: {
                                click () {
                                    let data = vm.tableData.list.map(item => {
                                        return Object.assign({}, item, {
                                            detail: JSON.stringify(item.detail).replace(/,/g, ';'),
                                            time: formatTimeStamp(item.time, 'yyyy-MM-dd hh:mm:ss'),
                                            user_agent: (item.user_agent || '').replace(/,/g, ';'),
                                        });
                                    });
                                    vm.$refs.table.exportCsv({
                                        filename: `rendeBug-${formatTimeStamp(new Date(), 'yyyy-MM-dd hh:mm:ss')}.csv`,
                                        data: data,
                                        columns: [{
                                            title: 'Detail',
                                            key: 'detail',
                                        }, {
                                            title: '错误类型',
                                            key: 'type',
                                        }, {
                                            title: '时间',
                                            key: 'time'
                                        }, {
                                            title: '用户信息',
                                            key: 'user_agent',
                                        }],
                                    });
                                }
                            }
                        }),
                    ]);
                }
            }, {
                title: '错误类型',
                key: 'type',
                renderHeader (h) {
                    return vm.createDropdown({
                        h,
                        title: vm.currentErrorType || '错误类型',
                        list: ['all', 'Unhandledrejection', 'Caught', 'Uncaught', 'ResourceError', 'WebsocketError', 'XMLHttpRequest', 'Promise', 'Console error', 'error'],
                        onClick (value) {
                            vm.currentErrorType = value === 'all' ? '' : value;
                            vm.updateData();
                        }
                    });
                }
            }, {
                title: '域名',
                key: 'domain',
                sortable: true,
                sortMethod (a, b, type) {
                    vm.sortKey = 'domain';
                    vm.sortType = type;
                }
            },{
                title: '状态',
                key: 'status',
                slot: 'status',
                renderHeader (h) {
                    return vm.createDropdown({
                        h,
                        title: vm.currentStauts || '状态',
                        list: ['全部', '未解决', '正在处理', '已解决', '忽略', '未复现'],
                        onClick (value) {
                            vm.currentStauts = value === '全部' ? '' : value;
                            vm.updateData();
                        }
                    });
                }
            }, {
                title: '时间',
                key: 'time',
                slot: 'time',
                sortable: true,
                sortMethod (a, b, type) {
                    vm.sortKey = 'time';
                    vm.sortType = type;
                }
            }, {
                title: '事件数',
                key: 'event_count',
                sortable: true,
                sortMethod (a, b, type) {
                    vm.sortKey = 'event_count';
                    vm.sortType = type;
                }
            }, {
                title: '错误数',
                key: 'trigger_num',
                sortable: true,
                sortMethod (a, b, type) {
                    vm.sortKey = 'trigger_num';
                    vm.sortType = type;
                }
            }, {
                title: '版本',
                key: 'version',
            }],
            currentErrorType: '',
            currentStauts: '',
            currentSearchKey: '',
            sortType: '',
            sortKey: '',
            currentPage: 1,
            pageSize: 20,
            selection: [],
            isDeleteLoading: false
        }
    },
    watch: {
        currentPage(newValue, oldValue) {
            this.updateData();
        }
    },
    computed: {},
    methods: {
        createDropdown ({h, title, list, onClick}) {
            return h('Dropdown', {
                props: {
                    placement: 'bottom',
                    trigger: "click",
                },
                on: {
                    'on-click': onClick
                }
            }, [
                h('div', [
                    h('span', {
                        class: 'cursor-pointer'
                    }, title),
                    h('Icon', {
                        props: {
                            type: 'ios-funnel' 
                        },
                        style: {
                            'margin-left': '5px'
                        }
                    })
                ]),
                h('DropdownMenu', {
                    slot: 'list',
                }, [
                    ...list.map(item => {
                        return h('DropdownItem', {
                            props: {
                                name: item,
                            }
                        }, item);
                    })
                ])
            ]);
        },
        openDetail (obj) {
            this.$emit('open-detail', obj);
        },
        updateStatus (id, status) {
            updateStatus(id, status).then(res => {
                this.updateData();
            });
        },
        updateData () {
            this.$emit('update-table', {
                currentErrorType: this.currentErrorType,
                currentStauts: this.currentStauts,
                currentSearchKey: this.currentSearchKey,
                sortType: this.sortType,
                sortKey: this.sortKey,
                currentPage: this.currentPage,
                pageSize: this.pageSize
            });
        },
        onPageSizeChange(pageSize) {
            this.pageSize = pageSize;
            this.updateData();
        },
        sortChange() {
            this.currentPage = 1;
            this.updateData();
        },
        getMessage(msg) {
            let message = msg;
            if (Object.prototype.toString.call(msg).slice(8, -1) !== 'String') {
                message = JSON.stringify(msg);
            }
            if (message.length > 100) {
                return message.substr(0, 100) + '...';
            } else {
                return message;
            }
        },
        selectChange(selection) {
            this.selection = selection;
        },
        deleteSelected() {
            this.isDeleteLoading = true;
            deleteBugByIds(this.selection.map(v => v.id).join(',')).then(res => {
                
            }).finally(() => {
                setTimeout(() => {
                    this.isDeleteLoading = false;
                    this.updateData();
                    this.selection = [];
                    this.$Notice.error({
                        title: '系统通知',
                        desc: '删除成功'
                    });
                }, 500)
            })
        }
    }
}
</script>
<style lang="less">
    .render-bug-table {
        .status-icon {
            &.ivu-icon-md-help-circle {
                color: rgb(255, 100 ,122);
            }
            &.ivu-icon-md-cog {
                color: rgb(18, 150, 219);
            }
            &.ivu-icon-md-checkmark-circle {
                color: rgb(12, 168, 122);
            }
            &.ivu-icon-md-close-circle {
                color: rgb(113, 94, 210);
            }
            &.ivu-icon-md-alert {
                color: #ff9900;
            }
        }
        .export-icon {
            margin-left: 5px;
        }
    }
    .home {
        .page-wrap {
            display: flex;
            justify-content: space-between;
            margin: 10px;
        }
    }
</style>


