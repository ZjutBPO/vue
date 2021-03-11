<template>
  <el-container style="position:relative">
      <el-aside style="height: 600px; width:400px;position: absolute;border: 1px solid rgba(255,255,255,0.25);">
        <el-card class="box-card" >
          当日客流量累计
        <div>
          <div style="display: flex">
            <div style="margin-left: 65px;margin-right: 100px">
              <p>进站量</p>
              <p> {{inCount}}</p>
            </div>
            <div>
              <p>出站量</p>
              <p> {{outCount}}</p>
            </div>
          </div>
          <div ref="chart"  style="width: 300px;height: 110px;float: left;color: #FFFFFF"></div>
          <div ref="chart1"  style="width: 300px;height: 110px;float: left;color: #FFFFFF"></div>
          <div ref="chart3"  style="width: 340px;height: 220px;float: left;color: #FFFFFF"></div>
          </div>
      </el-card>
      </el-aside>
      <el-main style="height: 600px; width:400px;">
        <Subway></Subway>
      </el-main>
      <el-aside style="height: 600px; width:350px;border: 1px solid rgba(255,255,255,0.25);margin-right: 10px">
        <el-alert
          title="预警解除"
          type="success"
          description="解除2号线换乘1号线钟南街方向较大级客流预警">
        </el-alert>
        <el-alert
          title="消息提示"
          type="info"
          description="2号线换乘1号线钟南街方向较大级客流预警">
        </el-alert>
        <el-alert
          title="橙色预警"
          type="warning"
          description="2号线换乘1号线钟南街方向较大级客流预警">
        </el-alert>
        <el-alert
          title="红色预警"
          type="error"
          description="2号线换乘1号线钟南街方向较大级客流预警">
        </el-alert>
      </el-aside>
    </el-container>
</template>
<script>
import 'echarts/theme/dark.js'
export default {
  data () {
    return {
      date: new Date(),
      outCount: 30,
      inCount: 20
    }
  },
  methods: {
    dateFormat (time) {
      var date = new Date(time)
      var year = date.getFullYear()
      /* 在日期格式中，月份是从0开始的，因此要加0
        * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
        * */
      var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      // 拼接
      return year + '-' + month + '-' + day
    },
    timeFormat (time) {
      var date = new Date(time)
      /* 在日期格式中，月份是从0开始的，因此要加0
        * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
        * */
      var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      // 拼接
      return hours + ':' + minutes + ':' + seconds
    },
    initChart (container, option) {
      let myChart = this.$echarts.init(container, 'dark')
      myChart.setOption(option)
    }
  },
  mounted () {
    // 显示当前日期时间
    let _this = this// 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.date = new Date() // 修改数据date
    }, 1000)

    var option = {
      color: ['#c23531', '#E98F6F', '#6AB0B8'],
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['55%', '70%'],
          data: [
            {value: 1048, name: '出站闸机1'},
            {value: 735, name: '出站闸机2'},
            {value: 580, name: '进站闸机2'}
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }

    this.initChart(this.$refs.chart, option)
    this.initChart(this.$refs.chart1, option)
    var option1 = {
      xAxis: {
        data: ['4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [0.3, 0.5, 0.2, 0.6, 1.0, 1.3, 1.5, 0.6, 0.4, 0.6, 0.8],
        type: 'line',
        smooth: true
      }],
      grid: [{
        x: 30,
        y: 30,
        x2: 30,
        y2: 30
      }]
    }

    this.initChart(this.$refs.chart3, option1)
    // 绘制图表
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer) // 在Vue实例销毁前，清除我们的定时器
    }
  }

}
</script>

<style scoped>
.el-alert{
  width:340px;
  margin: 5px 5px;
}
.el-header{
  background-color: #0e0d0d;
  color: #FFF;
  line-height: 60px;
}

.el-aside {
  background-color: #0e0d0d;
  color: #FFF;
  text-align: center;
}

.el-main {
  background-color: #0e0d0d;
  color: #FFF;
  line-height: 60px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.title{
  float: left;
  line-height:1.7;
  margin:30px 18px;
}
.el-menu{
  float:right;
  width:40%;
  background-color:transparent;
  active-text-color: #c2c255;
  border-style: none;
  text-color:#fff !important;
  margin-top:18px;
}
.el-menu-item:hover{
  background-color: transparent !important;
  color: #a0a006 !important;
}

.el-icon-view:hover,.el-icon-warning:hover,.el-icon-alarm-clock:hover,.el-icon-data-analysis:hover{
  color: #a0a006 !important;
}
.el-menu-item{
  color:#fff !important;
  width: 18%;
  font-size: 16px;
}
.time{
  font-size: 30px;
  margin-bottom: -18px;
}
.date{
  font-size: 15px;
  margin-left: 22px;
}

.clearfix:before, .clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  margin: 5px 5px ;
  width: 390px;
  background-color: #0e0d0d;
  color:#FFFFFF;
}
</style>
