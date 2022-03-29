import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyLogin from '@/views/MyLogin'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children:[
      {path:"",name:"home",component:()=>import("../views/homes/HomeIndex.vue")},
      {path:"2-1",meta:["文章管理","文章列表"],component:()=>import("../views/homes/HomeList.vue")},
      {path:"2-2",meta:["文章管理","多层级路由示例"],component:()=>import("../views/homes/HomeRouters.vue")},
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:"/",
    name:"MyLogin",
    component:MyLogin
  }
]
const router = new VueRouter({
  routes
})
router.beforeEach(function(to,from,next){
  console.log(to,from)
  if(to.path==="/login"){ 
    next()
  }else{
    let token = localStorage.getItem("token")
    if(!token)return next({path:"/login"})
    if(token)return next()
  }
})

export default router;
