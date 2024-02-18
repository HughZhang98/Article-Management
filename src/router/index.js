import Vue from 'vue'
import VueRouter from 'vue-router'
import ListArticleVue from '@/views/ListArticle.vue'
import CreateArticleVue from '@/views/CreateArticle.vue'
import EditArticleVue from '@/views/EditArticle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/articles/index',
  },
  {
    path: '/articles/index',
    name: 'list-article',
    component: ListArticleVue
  },
  {
    path: '/articles/create',
    name: 'create-article',
    component: CreateArticleVue
  },
  {
    path: '/articles/:id/edit',
    name: 'edit-article',
    component: EditArticleVue
  },
]

const router = new VueRouter({
  routes
})

export default router
