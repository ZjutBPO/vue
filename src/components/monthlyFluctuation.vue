<!--suppress ALL -->
<template>
  <div class="com-container">
    <div id="zhexian" class="com-line"></div>
  </div>
</template>

<script>
import 'echarts/theme/dark.js'
export default {
  name: 'Line',
  data () {
    return {
      value: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.drawLine()
    }, 50)
  },
  methods: {
    toLight: function () {
      console.log('1')
    },
    drawLine () {
      var myCharts = this.$echarts.init(document.getElementById('zhexian'), 'dark')
      setTimeout(function () {
        window.onresize = function () {
          myCharts.resize()
        }
      }, 200)
      var xDataArr = ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日',
        '11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '20日',
        '21日', '22日', '23日', '24日', '25日', '26日', '27日', '28日', '29日', '30日']
      var yDataArr1 = [2709, 2832, 1569, 2590, 563, 1001, 239, 783, 1953, 714, 1783, 2684, 2989, 1207,
        527, 443, 746, 2101, 2099, 2297, 641, 1348, 2671, 1380, 1661, 421, 1707, 2967,
        1403, 2247]
      var yDataArr2 = [1541, 959, 1617, 2331, 1173, 2131, 2260, 1269, 2326, 2375, 1377, 2355, 1644,
        251, 1892, 2149, 2361, 2003, 2132, 1926, 795, 563, 214, 1516, 1397, 1087, 1400,
        1795, 2658, 2662]
      var yDataArr3 = [1241, 1853, 847, 1818, 2864, 2209, 1203, 2966, 1334, 254, 1836, 1387, 2339, 607,
        1993, 1318, 761, 1222, 484, 1385, 498, 901, 261, 373, 485, 304, 1083, 2264, 2645, 118]
      var option = {
        title: {
          text: '单月整体的客流波动分析',
          x: 'center',
          top: '10'
        },
        tooltip: {},
        legend: {
          top: '35',
          bottom: '10',
          data: ['站台1', '站台2', '站台3']
        },
        grid: {
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: xDataArr
        },
        yAxis: {
          type: 'value'
        },
        toolbox: {
          feature: {
            show: true,
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: {
              readOnly: false
            },
            saveAsImage: {}
          }

        },
        series: [
          {
            name: '站台1',
            type: 'line',
            data: yDataArr1,
            stack: 'all',
            areaStyle: {},
            markLine: {
              data: [
                {
                  name: '平均值',
                  type: 'average'
                }
              ]
            }
          },
          {
            name: '站台2',
            type: 'line',
            data: yDataArr2,
            stack: 'all',
            areaStyle: {},
            markLine: {
              data: [
                {
                  name: '平均值',
                  type: 'average'
                }
              ]
            }
          },
          {
            name: '站台3',
            type: 'line',
            data: yDataArr3,
            stack: 'all',
            areaStyle: {},
            markLine: {
              data: [
                {
                  name: '平均值',
                  type: 'average'
                }
              ]
            }
          }
        ]
      }
      myCharts.setOption(option)
    }
  }
}
</script>

<style scoped>
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    .com-line {
      width: 600px;
      height: 400px;
      margin: 0 auto;
    }
  }

  @media (max-width: 430px) {
    .com-line {
      width: 400px;
      height: 300px;
      margin: 0 auto;
    }
  }
  .el-menu,.el-menu-item.is-active{
    background-color: transparent !important;
    color: #a0a006 !important;
  }
</style>
