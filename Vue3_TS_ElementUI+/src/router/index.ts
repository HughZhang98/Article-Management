import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        redirect: '/articles/index',       
    },
    {
      path: '/articles/index',
      name: 'list-article',
      component: () => import('../views/ListArticle.vue') 
    },
    {
      path: '/articles/create',
      name: 'create-article',
      component: () => import('../views/CreateArticle.vue') 
    },
    {
      path: '/articles/:id/edit',
      name: 'edit-article',
      component: () => import('../views/EditArticle.vue') 
    },
]

const router = createRouter({
    history: createWebHashHistory(), // 路由模式 hash模式
    routes: routes
})

export default router;
