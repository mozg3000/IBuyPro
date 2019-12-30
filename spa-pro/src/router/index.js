import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Shop from '../components/Shop.vue'
import ShopAdd from '../components/ShopAdd.vue'
import Map from "../views/Map";
import AuthComponent from "../components/AuthComponent";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/shop/:id',
        name:'shop',
        component: Shop,
        props: true
    },
    {
        path: '/shop-add',
        name:'shopAdd',
        component: ShopAdd
    },
    {
        path: '/map/draw',
        name:'map',
        component: Map
    },
    {
        path: '/sig-in',
        name:'map',
        component: AuthComponent
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
