import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Seller from './views/Seller.vue'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'/home',
      component:Home,
    },
    {
      path:'/seller',
      component:Seller,
    }
   
    
    
  ]
})
// router.beforeEach((to, from, next) => {
//   // 如果要去登录页，直接放行
//   if (to.path === '/login') {
//     // 直接放行
//     next()
//     return
//   }
//   // 如果不是登录， 判断是否有token，如果有，放行，如果没有，去登录
//   let token = localStorage.getItem('token')
//   if (token) {
//     next()
//   } else {
//     next('/login')
//   }
// })
// export default router

