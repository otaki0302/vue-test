import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/feature-higambana',
      name: 'feature-higambana',
      component: () => import('../views/FeatureHigambana.vue'),
    },
    {
      path: '/feature-sakura',
      name: 'feature-sakura',
      component: () => import('../views/FeatureSakura.vue'),
    },
  ],
})

export default router
