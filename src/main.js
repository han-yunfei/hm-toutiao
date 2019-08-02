import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
// main.js  入口文件
// 职责：引入需要依赖的模块，（包括js，第三方包，css，其他资源）
// 职责2：创建一个vue实例
