import Vue from 'vue'
import Router from 'vue-router'
import Self from '@/components/self/Self'
import Home from '@/pages/Front/Home'
import Articles from '@/pages/Front/Articles'
import ArticleDetail from '@/pages/Front/ArticleDetail'
import Questions from '@/pages/Front/Questions'
import QuestionDetail from '@/pages/Front/QuestionDetail'
import TestPaper from '@/pages/Front/TestPaper'
import Chatbot from '@/pages/Front/Chatbot'
import WriteArticle from '@/pages/Front/WriteArticle'
import WriteQuestion from '@/pages/Front/WriteQuestion'
import Register from '@/pages/Front/Register'
import PersonalCenter from '@/pages/Front/PersonalCenter'

import AdminLogin from '@/pages/Admin/AdminLogin'
import AdminPanel from '@/pages/Admin/AdminPanel'

import workBench from '@/components/admin/dashboard/workBench'

import adminUserManagePanel from '@/components/admin/systemSet/adminUserManagePanel'
import adminRoleManagerPanel from '@/components/admin/systemSet/adminRoleManagerPanel'
import adminMenuManagerPanel from '@/components/admin/systemSet/adminMenuManagerPanel'
import roleAssignmentPanel from '@/components/admin/systemSet/roleAssignmentPanel'
import permissionsAssignmentPanel from '@/components/admin/systemSet/permissionsAssignmentPanel'

import personInfo from '@/components/admin/personCenter/personInfo'

import articleManagerPanel from '@/components/admin/dataManager/articleManagerPanel'
import questionManagerPanel from '@/components/admin/dataManager/questionManagerPanel'
Vue.use(Router)
let router = ""

router = new Router({
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
    }, {
      path: '/ArticleDetail',
      name: 'ArticleDetail',
      component: ArticleDetail
    }, {
      path: '/Questions',
      name: 'Questions',
      component: Questions
    }, {
      path: '/QuestionDetail',
      name: 'QuestionDetail',
      component: QuestionDetail
    }, {
      path: '/TestPapers',
      name: 'TestPapers',
      component: TestPaper
    },
    {
      path: '/Chatbot',
      name: 'Chatbot',
      component: Chatbot
    }, {
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
    }, {
      path: '/PersonalCenter',
      name: 'PersonalCenter',
      component: PersonalCenter
    }, {
      path: '/AdminLogin',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/AdminPanel',
      name: 'AdminPanel',
      component: AdminPanel,
      children: [{
          path: '/admin/System/baseManager/userManager',
          component: adminUserManagePanel
        },
        {
          path: '/admin/System/baseManager/roleManager',
          component: adminRoleManagerPanel
        },
        {
          path: '/admin/System/baseManager/menuManager',
          component: adminMenuManagerPanel
        },
        {
          path: '/admin/System/baseManager/roleAssignment',
          component: roleAssignmentPanel
        },
        {
          path: '/admin/System/baseManager/permissionsAssignment',
          component: permissionsAssignmentPanel
        },
        {
          path: '/AdminPanel/workBench',
          component: workBench
        },
        {
          path: '/admin/System/personCenter/myInfo',
          component: personInfo
        },
        {
          path: '/admin/System/dataManager/articleManager',
          component: articleManagerPanel
        },

        {
          path: '/admin/System/dataManager/questionManager',
          component: questionManagerPanel
        },
      ]
    },
  ]
})
const VueRouterPush = Router.prototype.push

Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
router.beforeEach((to, from, next) => {
  const noToken = ["/Register", "/"];
  next();
})

export default router;
