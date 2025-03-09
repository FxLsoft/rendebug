<template>
  <div id="filter">
    <Menu class="horizontal-menu" mode="horizontal" theme="dark" active-key="1" placement="bottom-start" @on-select="clickTime">
        <DatePicker type="daterange" placement="bottom-end" :start-date="new Date(2019, 1, 7)" placeholder="Select date" @on-change="dataChange" style="width: 200px"></DatePicker>
        <div class="layout-nav">
            <Menu-item key="1" name="1小时">
                1小时
            </Menu-item>
            <Menu-item key="2" name="1天">
                1天
            </Menu-item>
            <Menu-item key="3" name="7天">
                7天
            </Menu-item>
            <Menu-item key="4" name="30天">
                30天
            </Menu-item>
        </div>
    </Menu>
  </div>
</template>

<script>
export default {
  name: 'myFilter',
  data () {
    return {
      timeRange: [],
      count: 10
    }
  },
  watch: {
    timeRange (nv) {
      this.$emit('timeChange', {
        timeRange: nv,
        count: 10
      })
    }
  },
  methods: {
    dataChange (value, type) {
      let startTime = new Date(value[0] + ' 00:00:00').getTime()
      let endTime = new Date(value[1] + ' 23:59:59').getTime()
      if (startTime && endTime) this.timeRange = [startTime, endTime]
    },
    clickTime (value) {
      // 默认区间为1天
      let timeRange = 0
      let oneDayTimeString = 24 * 60 * 60 * 1000
      switch (value) {
        case '1小时': 
          timeRange = oneDayTimeString / 24; break;
        case '1天': 
          timeRange = oneDayTimeString; break;
        case '7天': 
          timeRange = oneDayTimeString * 7; break;
        case '30天': 
          timeRange = oneDayTimeString * 30; break;
        default: 
          timeRange = oneDayTimeString; break;
      }
      let startTime = Date.now() - timeRange
      let endTime = Date.now()
      this.timeRange = [startTime, endTime]
    }
  },
  // 根据时间区间大小，来决定筛选多少个count的数据，放入折线图
  countCac (timeRange) {
    let range = timeRange[1] - timeRange[0]
    let oneDayTimeString = 24 * 60 * 60 * 1000
    let count = 10
    // switch (range) {
    //   case range === 60 * 60 * 1000: count = 10; break; // 1小时
    //   case range >= oneDayTimeString && range < 7 * oneDayTimeString: count = 10; break // 1-7天
    //   case range === 7 * oneDayTimeString: count = 7; break // 7天
    //   case range > 7 * oneDayTimeString: count = 
    // }
  }
}
</script>

<style lang="less">
  #filter {
    background-color: #35353d;
    .horizontal-menu {
      display: flex;
      .layout-nav {
        align-self: flex-end;
        margin-left: 40px;
      }
      .ivu-date-picker {
        display: flex;
        align-items: center;
        .ivu-input-wrapper {
          width: 200px;
        }
      }
    }
  }
</style>

