import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        redirect: '/login',       
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
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('../views/SignUp.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(), // 路由模式 hash模式
    routes: routes
})

export default router;
