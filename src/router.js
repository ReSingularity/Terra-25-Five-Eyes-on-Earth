import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Instrument from './pages/Instrument.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/instrument/:id', name: 'instrument', component: Instrument, props: true },
  ]
})