import Vue from 'vue'
import Router from 'vue-router'
import stationMonitoring from '../components/stationMonitoring'
import earlyWarning from '../components/earlyWarning'
import passengerForecast from '../components/passengerForecast'
import statisticalAnalysis from '../components/statisticalAnalysis'
import adminlayout from '../components/adminlayout'
import test from '../components/test'
import monthlyFluctuation from '../components/monthlyFluctuation'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/stationMonitoring',
      component: adminlayout,
      children: [
        {
          path: '/stationMonitoring',
          name: 'stationMonitoring',
          component: stationMonitoring
        },
        {
          path: '/earlyWarning',
          name: 'earlyWarning',
          component: earlyWarning
        },
        {
          path: '/test',
          name: 'test',
          component: test
        },
        {
          path: '/passengerForecast',
          name: 'passengerForecast',
          component: passengerForecast
        },
        {
          path: '/statisticalAnalysis',
          name: 'statisticalAnalysis',
          component: statisticalAnalysis,
          children: [{
            path: '/monthlyFluctuation',
            name: 'monthlyFluctuation',
            component: monthlyFluctuation
          }]
        }]
    }
  ]
})
