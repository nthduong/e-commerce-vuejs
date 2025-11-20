import { createRouter, createWebHistory } from 'vue-router'
import { DEFAULT_LAYOUT } from '@/constants/layouts'
import HomeView from '../pages/HomeView.vue'

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
      meta: {
        layout: DEFAULT_LAYOUT,
      },
      component: () => import('@/pages/AboutView.vue'),
    },
    {
      path: '/product/:categorySlug/:productSlug',
      name: 'product-detail',
      meta: {
        layout: DEFAULT_LAYOUT,
      },
      component: () => import('@/pages/ProductDetailView.vue'),
      props: true,
    },
    {
      path: '/product/:categorySlug',
      name: 'product-category',
      meta: {
        layout: DEFAULT_LAYOUT,
      },
      component: () => import('@/pages/ProductView.vue'),
    },
    {
      path: '/product',
      name: 'product',
      meta: {
        layout: DEFAULT_LAYOUT,
      },
      component: () => import('@/pages/ProductView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {
        layout: DEFAULT_LAYOUT,
      },
      component: () => import('@/pages/ContactView.vue'),
    },
  ],
})

export default router
