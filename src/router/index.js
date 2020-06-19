import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
import Home from '@/views/Home/Home.vue'
import Details from "@/views/Details/Details";
import PageNotFound from "@/views/PageNotFound/PageNotFound";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id',
    name: 'Details',
    component: Details,
    beforeEnter: (to, from, next) => {
      if (store.state.city.data) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
