import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MemberArea from '../views/MemberArea.vue'
import CityMovie from '../views/CityMovie.vue'
import Wallet from '../views/Wallet.vue'
import Discounts from '../views/Discounts.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/member',
        name: 'MemberArea',
        component: MemberArea
    },
    {
        path: '/citymovie',
        name: 'CityMovie',
        component: CityMovie
    },
    {
        path: '/wallet',
        name: 'Wallet',
        component: Wallet
    },
    {
        path: '/discounts',
        name: 'Discounts',
        component: Discounts
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router