export default {
    options: {
        chart: {
            type: 'line'
        },
        title: {
            text: '测试测试'//表头文字
        },
        subtitle: {
            text: '数据来源: WorldClimate.com'//表头下文字
        },
        xAxis: {//x轴显示的内容
            categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            plotbands: [{//可以显示一个方块，如果需要的话可以更改透明度和颜色
                from: 4.5,
                to: 6.5,
                color: 'rgba(68, 170, 213, 0)'//透明度和颜色
            }]
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
                enableMouseTracking: false // 关闭鼠标跟踪，对应的提示框、点击事件会失效
            }
        },
        series: [{//两条数据
            name: '东京',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: '伦敦',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    }
}