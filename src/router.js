import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Instrument from './pages/Instrument.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/instrument/:id', name: 'instrument', component: Instrument, props: true },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { left: 0, top: 0 }
  }
})
