import { createRouter, createWebHistory } from 'vue-router'
import ToDoProject from '@/components/ToDoProject.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ToDoProject
    },
  ]
})

export default router
