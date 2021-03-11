<template>
  <el-main style="height:600px;margin-top:0px;margin-left: 20px;">
     <p>预测方案列表</p>
      <div>搜索: <el-input v-model="input" placeholder="请输入关键字" size="small" style="width: 150px"></el-input>
        状态:<el-select v-model="state" placeholder="请选择" size="small" style="width: 150px">
          <el-option
            v-for="item in states"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        类型:<el-select v-model="type" placeholder="请选择" size="small" style="width: 150px">
          <el-option
            v-for="item in types"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button type="primary" size="small">查询</el-button>
        <el-button type="primary" style="float: right;margin-right: 18px" size="small">新增</el-button>
      </div>
    <el-table
      :data="tableData" :header-cell-style="{background:'#2d353e', color: 'white',border: none,borderright:none,padding: 0}" :cell-style="{backgroundColor:'black', color: 'white',padding:0,height:1.2}"
      style="width: 99%;margin-top: 10px"  :default-sort = "{prop: 'id', order: 'ascending'}" >
      <el-table-column
        prop="id"
        label="序号"
        width="180"
        sortable>
      </el-table-column>
      <el-table-column
        prop="name"
        label="预测方案名称"
        width="180"
        sortable>
      </el-table-column>
      <el-table-column
        prop="type"
        label="预测方案类型">
      </el-table-column>
      <el-table-column
        prop="time"
        label="创建时间"
        sortable>
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态">
      </el-table-column>
      <el-table-column
        prop=""
        label="操作">
        <el-button type="primary" size="small" >查看</el-button>
        <el-button type="primary"  size="small">修改</el-button>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      states: [
        {
          value: '默认选项',
          label: '全部'
        },
        {
          value: '选项1',
          label: '已预测'
        }, {
          value: '选项2',
          label: '待预测'
        }],
      state: '',
      types: [
        {
          value: '默认选项',
          label: '全部'
        },
        {
          value: '选项1',
          label: '短期预测'
        }, {
          value: '选项2',
          label: '节假日预测'
        }],
      type: '',
      tableData: [{
        id: 1,
        name: '短期预测1',
        type: '短期预测',
        time: '2020-02-15',
        state: '已预测'
      }, {
        id: 2,
        name: '国庆预测',
        type: '节假日预测',
        time: '2020-09-29',
        state: '已预测'
      }, {
        id: 3,
        name: '短期预测2',
        type: '短期预测',
        time: '2020-03-20',
        state: '已预测'
      }, {
        id: 4,
        name: '元旦',
        type: '节假日预测',
        time: '2021-01-01',
        state: '待预测'
      }]
    }
  }
}
</script>

<style scoped>
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
