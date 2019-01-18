import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入通用样式
import './assets/base.less'
// 导入背景图片
import './assets/pp.jpg'
// 导入iconfont样式
import './assets/icon/iconfont.css'

// 导入axios
import axios from 'axios'

// 把axios绑定给vue原型
Vue.prototype.axios = axios
axios.defaults.baseURL = 'http://webapi.test.sheysoftware.cn'

axios.defaults.headers= {'Content-Type':'application/x-www-form-urlencoded'};

// 安装elementui插件
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
