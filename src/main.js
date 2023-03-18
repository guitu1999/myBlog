import Vue from 'vue'
import App from './App.vue'

//引入router
import router from '@/router/index'
Vue.config.productionTip = false
//引入 icon
import '@/icons/icon.css'

new Vue({
  render: h => h(App),
  router,//注入到new Vue实例

}).$mount('#app')
