<template>
  <el-container>
      <el-aside style="height: 600px; width:350px;border: 1px solid rgba(255,255,255,0.25);margin-left: 10px">
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
        </el-alert></el-aside>
      <el-main style="height: 600px;border: 1px solid rgba(255,255,255,0.25);">
        <img src="../assets/images/shiyitu.png" style="height: 520px">
      </el-main>
  </el-container>
</template>

<script>

export default {
  data () {
    return {
      date: new Date(),
      imgsrc: require('../assets/images/shiyitu.png')
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
  text-align: center;
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
  background-color: #303138;
  color:#FFFFFF;
}
</style>
