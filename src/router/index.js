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

import AdminLogin from '@/pages/Admin/AdminLogin'
import AdminPanel from '@/pages/Admin/AdminPanel'

import workBench from '@/components/admin/dashboard/workBench'

import adminUserManagePanel from '@/components/admin/systemSet/adminUserManagePanel'
import adminRoleManagerPanel from '@/components/admin/systemSet/adminRoleManagerPanel'
import adminMenuManagerPanel from '@/components/admin/systemSet/adminMenuManagerPanel'
import roleAssignmentPanel from '@/components/admin/systemSet/roleAssignmentPanel'
import permissionsAssignmentPanel from '@/components/admin/systemSet/permissionsAssignmentPanel'

import personInfo from '@/components/admin/personCenter/personInfo'
Vue.use(Router)
let router=""

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
      path: '/Questions',
      name: 'Questions',
      component: Questions
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
