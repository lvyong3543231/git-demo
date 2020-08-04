import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products/products'
import ProductsDetial from '../views/Products/productsDetial'
import News from '../views/News/news'
import NewsDetial from '../views/News/newsDetial'
import Contect from '../views/contect'
import Cases from '../views/Cases/cases'
import CasesDetial from '../views/Cases/casesDetial'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/productsDetial',
    name: 'productsDetial',
    component: ProductsDetial
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/newsDetial',
    name: 'NewsDetial',
    component: NewsDetial
  },
  {
    path: '/contect',
    name: 'Contect',
    component: Contect
  },
  {
    path: '/cases',
    name: 'Cases',
    component: Cases
  },
  {
    path: '/casesDetial',
    name: 'CasesDetial',
    component: CasesDetial
  },
  {
    path: '/aboutUs',
    name: 'AboutUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
