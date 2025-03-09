<template>
    <div class="x-bar">
        <div :id="id" :options="options"></div>
    </div>
</template>
<script>
    import HighCharts from 'highcharts';
    export default {
        // 验证类型
        props: {
            id: {
                type: String
            },
            options: {
                type: Object
            }
        },
        watch: {
            options: {
                handler (nv) {
                    // HighCharts.chart(this.id, nv)
                    // console.log(nv, 'nv')
                    this.chart && this.chart.update(JSON.parse(JSON.stringify(nv)), true)
                },
                deep: true
            }
        },
        data () {
            return {
                chart: null
            }
        },
        mounted() {
            this.chart = new HighCharts.Chart(this.id, this.options)
            // console.log(this.chart)
        }
    }
</script>