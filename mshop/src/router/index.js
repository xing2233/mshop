import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path:'/',
    name:'home',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'home',
    component: ()=>import('@/views/home/Home')
  },
  {
    path:'/lib',
    name:'lib',
    component: ()=>import('@/views/lib/Lib')
  },
  {
    path:'/cat',
    name:'cat',
    component: ()=>import('@/views/cat/Cat')
  },
  {
    path:'/profile',
    name:'profile',
    component: ()=>import('@/views/profile/Profile')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
