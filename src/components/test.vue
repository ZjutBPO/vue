<template>
  <el-container>
    <el-aside style="height: 600px; width:220px;">
      <el-menu default-active="this.$route.path" router>
        <el-menu-item index="2">单月整体的客流波动分析</el-menu-item>
        <el-menu-item index="2">工作日和周末的客流分析</el-menu-item>
        <el-menu-item index="2">单站的点出/入站客流分析</el-menu-item>
        <el-menu-item index="2">用户年龄结构分析</el-menu-item>
        <el-menu-item index="2">早晚高峰客流站点分布分析</el-menu-item>
        <el-menu-item index="2">站点 OD 客流量分析</el-menu-item>
        <el-menu-item index="2">线路断面（按站点）流量分析</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main></el-main>
  </el-container>
</template>

<script>
</script>

<style scoped>
.el-header{
  background-color: #0e0d0d;
  color: #FFF;
}

.el-aside {
  background-color: #0e0d0d;
  color: #FFF;
}

.el-main {
  background-color: #0e0d0d;
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
  float:left;
  background-color:transparent;
  active-text-color: #c2c255;
  border-style: none;
  text-color:#fff !important;
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
  font-size: 12px;
  height:25px;
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
