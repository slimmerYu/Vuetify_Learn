/*
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-12-29 10:28:46
 * @LastEditors: slimmerYu
 * @LastEditTime: 2021-01-01 20:02:07
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Projects from '../views/Projects.vue'
import Team from '../views/Team.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/projects',
    name: 'Projects',
    component:Projects
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue')
  },
  {
    path: '/team',
    name: 'Team',
    component:Team
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
