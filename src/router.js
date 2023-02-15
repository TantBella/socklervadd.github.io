import { createRouter, createWebHashHistory } from 'vue-router'

import StartSida from './views/StartSidan.vue'
import Raser from './views/KattRas.vue'
import Resten from './views/OtherCats.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: StartSida,
      path: '/'
    },
    {
      component: Raser,
      path: '/katt/raser'
    },
    {
      component: Resten,
      path: '/katt/allaraser'
    }
  ]
})
