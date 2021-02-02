import Vue from 'vue'
import Router from 'vue-router'
import Self from '@/components/self/Self'
import Home from '@/pages/Home'
import Articles from '@/pages/Articles'
import Questions from '@/pages/Questions'
import WriteArticle from '@/pages/WriteArticle'
import WriteQuestion from '@/pages/WriteQuestion'
import Register from '@/pages/Register'
import PersonalCenter from '@/pages/PersonalCenter'
Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/Self',
      name: 'Self',
      component: Self
    }, {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/Home',
      name: 'Home',
      component: Home
    }, {
      path: '/Articles',
      name: 'Articles',
      component: Articles
    },{
      path: '/Questions',
      name: 'Questions',
      component: Questions
    },  {
      path: '/WriteArticle',
      name: 'WriteArticle',
      component: WriteArticle
    }, {
      path: '/WriteQuestion',
      name: 'WriteQuestion',
      component: WriteQuestion
    }, {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/PersonalCenter',
      name: 'PersonalCenter',
      component: PersonalCenter
    },
  ]
})
router.beforeEach((to, from, next) => {
  const noToken = ["/Register", "/"];
  next();
})

export default router;
