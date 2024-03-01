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
      component: () => import('../views/ListArticle.vue'),
      meta: { title: "Article List" } 
    },
    {
      path: '/articles/create',
      name: 'create-article',
      component: () => import('../views/CreateArticle.vue'),
      meta: { title: "New Article" }  
    },
    {
      path: '/articles/:id/edit',
      name: 'edit-article',
      component: () => import('../views/EditArticle.vue'),
      meta: { title: "Article Edit" }  
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      meta: { title: "Login" } 
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('../views/SignUp.vue'),
      meta: { title: "Sign Up" } 
    },
    {
      path: '/admins',
      name: 'list-admin',
      component: () => import('../views/AdminList.vue'),
      meta: { title: "Admin List" } 
    },
    {
      path: '/admins/:id/edit',
      name: 'edit-admins',
      component: () => import('../views/EditAdmin.vue'),
      meta: { title: "Admin Edit" }  
    },
    // {
    //   path: '/resume',
    //   name: 'resume',
    //   component: () => import('../views/Resume.vue'),
    //   meta: { title: "Resume" }
    // }
]

const router = createRouter({
    history: createWebHashHistory(), // 路由模式 hash模式
    routes: routes
})
router.afterEach((to, from) => {
  document.title = to.meta.title as string || 'Vue 3 + TypeScript + Vite'
})
export default router;
