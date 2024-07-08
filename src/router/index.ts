import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { setupPageGuard } from './permission'
import { HomeAutoLayout } from '@/views/home/layout'
const routes: RouteRecordRaw[] = [
  // {
  //   path: '/:pathMatch(.*)', 
  //   name: 'home',
  //   component: () => import('@/views/home/index.vue'),
  //   meta: { requiresAuth: false },
  // },
  {
    path: '/', 
    name: 'home',
    component: HomeAutoLayout,
   
  
    children: [
      {
        path: '',
        name: 'groups',
        component: () => import('@/views/home/index.vue'),
   
      },
  
    ],
 
  },

  {
    path: '/wp-admin/admin.php',  
    name: 'admin',
    component: () => import('@/views/admin/index.vue'),
    meta: { requiresAuth: false },
  },
]

export const router = createRouter({
  history: createWebHistory(), 
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

setupPageGuard(router)

export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}
