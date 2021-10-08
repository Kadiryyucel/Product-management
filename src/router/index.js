import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Navigation.vue')
  },
  {
    path: '/materialsNew',
    name: 'MaterialsNew',
    component: () => import('../views/MaterialsPanel/New.vue')
  },
  {
    path: '/materialsAll',
    name: 'MaterialsAll',
    component: () => import('../views/MaterialsPanel/All.vue')
  },
  {
    path: '/materialsEdit',
    name: 'MaterialsEdit',
    component: () => import('../views/MaterialsPanel/Edit.vue')
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
