import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthorizeView from '@/views/AuthorizeView.vue'
import ConfigView from '@/views/ConfigView.vue'
import ListView from '@/views/ListView.vue'
import ShareView from '@/views/ShareView.vue'
import VerificationView from '@/views/VerificationView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'Authorize',
    component: AuthorizeView
  },
  {
    path: '/config',
    name: 'Config',
    component: ConfigView
  },
  {
    path: '/list',
    name: 'List',
    component: ListView
  },
  {
    path: '/share',
    name: 'Usage',
    component: ShareView
  },
  {
    path: '/verification',
    name: 'Verification',
    component: VerificationView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`;
  next();
});

export default router
