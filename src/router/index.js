//引入vue
import Vue from 'vue'
//引入router
import VueRouter from 'vue-router'
//挂载到vue上
Vue.use(VueRouter)
//创建路由规则数组
const routes = [
    {
        path: '/',//默认hash值路径
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue')
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import('@/views/detail/index.vue')
    },
    {
        path: '/publish',
        name: 'publish',
        component: () => import('@/views/publish/index.vue')
    },
    // {
    //     path:'*',
    //     name:'404',
    //     component:()=>
    // }
]
//生成路由对象
const router = new VueRouter({
    routes
})
//导出
export default router