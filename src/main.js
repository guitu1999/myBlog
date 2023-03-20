import Vue from 'vue'
import App from './App.vue'

//引入router
import router from '@/router/index'
Vue.config.productionTip = false
//引入 icon
import '@/icons/icon.css'
//引入element
import Element from 'element-ui'
//引入css
import '@/styles/common.css'
import "element-ui/lib/theme-chalk/index.css"

Vue.use(Element)
new Vue({
  render: h => h(App),
  router,//注入到new Vue实例

}).$mount('#app')
