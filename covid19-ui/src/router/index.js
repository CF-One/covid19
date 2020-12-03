import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
import Layout from "../views/Layout.vue"
import CountryHeat from "../views/CountryHeat.vue";
import World from '../views/World.vue';
import Dim from '../views/Dim.vue'
import Detail from '../views/CountryDetail.vue'
import WorldHeat from '../views/WorldHeat.vue'
import CQ from '../views/MapCQmic.vue'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/',
        component: Layout,
        children:[
            {
                path: 'home',
                component: ()=>import('../views/Home.vue')
            },
            {
                path: 'epidemic',
                component: ()=>import('../views/MapEpidemic.vue')
            },
            {
                path:'countryHeat',
                component:CountryHeat
            },
            {
                path: 'world',
                component: World
            },
            {
                path: 'dim',
                component: Dim
            },
            {
                path: 'detail',
                component: Detail
            },
            {
                path: 'worldHeat',
                component: WorldHeat
            },
            {
                path: 'cq',
                component: CQ
            }
        ]
    },

]

const router = new VueRouter({
  routes
})

export default router
