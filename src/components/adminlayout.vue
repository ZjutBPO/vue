<template>
  <el-container>
    <el-header style="height: 100px; border: 1px solid rgba(255,255,255,0.25);">
      <span class="title">轨道交通智慧客流分析预测</span>
      <div  style="float: left;margin-left: 20px;font-family:Arial;">
        <div class="time">{{timeFormat(date)}}</div>
        <div class="date">{{dateFormat(date)}}</div>
      </div>
      <el-menu :default-active="this.$route.path" router class="el-menu-demo" mode="horizontal"  active-text-color="#ffd04b" >
        <el-menu-item index="/stationMonitoring"><i class="el-icon-view"></i>车站监测</el-menu-item>
        <el-menu-item index="/earlyWarning"><i class="el-icon-warning"></i>预警调控</el-menu-item>
        <el-menu-item index="/passengerForecast"><i class="el-icon-alarm-clock"></i>客流预测</el-menu-item>
        <el-menu-item index="/statisticalAnalysis"><i class="el-icon-data-analysis"></i>统计分析</el-menu-item>
        <el-menu-item index="/test"><i class="el-icon-data-analysis"></i>测试</el-menu-item>
      </el-menu>
    </el-header>
  <el-main>
    <router-view></router-view>
  </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      date: new Date()
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
    }
  },
  mounted () {
    // 显示当前日期时间
    let _this = this// 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.date = new Date() // 修改数据date
    }, 1000)
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer) // 在Vue实例销毁前，清除我们的定时器
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.el-header{
  color: #FFF;
  background :url('../assets/images/header.png');
  line-height: 50px;
}
.el-aside {
  color: #FFF;
  text-align: center;
}
.el-main {
  background-color: #010103;
  color: #FFF;
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
  active-background-color:transparent !important;
  border-style: none;
  text-color:#fff !important;
  margin-top:18px;
}
.el-menu,.el-menu-item:hover{
  background-color: transparent !important;
  color: #a0a006 !important;
}
.el-menu,.el-menu-item:visited{
  background-color: transparent !important;
  color: #a0a006 !important;
}
.el-menu,.el-menu-item.is-active{
  background-color: transparent !important;
  color: #a0a006 !important;
}
.el-menu,.el-menu-item.is-visited{
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
  margin-bottom: -8px;
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
  background-color: #303138;
  color:#FFFFFF;
}
</style>
