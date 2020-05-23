/* eslint-disable no-duplicate-case */
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)
  next()
  console.log(to)
  // 根据路由名称给website赋值
  switch (to.name) {
    case 'process':
      store.dispatch('app/toggleWebsite', 'site0')
      sessionStorage.setItem("website", "site0");
      break
    case 'processDetail':
      store.dispatch('app/toggleWebsite', 'site1')
      sessionStorage.setItem("website", "site1");

      break
    case 'dispassCheck':
      store.dispatch('app/toggleWebsite', 'dispasscheck')
      sessionStorage.setItem("website", "dispasscheck");

      break
    case 'examineprocess':
      store.dispatch('app/toggleWebsite', 'site52')
      sessionStorage.setItem("website", "site52");

      break
    case 'Exploration':
      store.dispatch('app/toggleWebsite', 'site2')
      sessionStorage.setItem("website", "site2");

      break
    case 'ExplorationDetail':
      store.dispatch('app/toggleWebsite', 'site3')
      sessionStorage.setItem("website", "site3");

      break
    case 'processEdit':
      store.dispatch('app/toggleWebsite', 'sitetwo')
      sessionStorage.setItem("website", "sitetwo");

      break
    case 'editpersonal':
      store.dispatch('app/toggleWebsite', 'sitetwo')
      sessionStorage.setItem("website", "sitetwo");

      break
    case 'editworkRecord':
      store.dispatch('app/toggleWebsite', 'sitetwo')
      sessionStorage.setItem("website", "sitetwo");

      break
    case 'editworkReport':
      store.dispatch('app/toggleWebsite', 'sitetwo')
      sessionStorage.setItem("website", "sitetwo");

      break
    case 'refuse':
      store.dispatch('app/toggleWebsite', 'site0')
      sessionStorage.setItem("website", "site0");

      break
    case 'dispassProcess':
      store.dispatch('app/toggleWebsite', 'site52')
      sessionStorage.setItem("website", "site52");

      break
    case 'compeleteProcess':
      store.dispatch('app/toggleWebsite', 'site52')
      sessionStorage.setItem("website", "site52");

      break
    case 'personal':
      store.dispatch('app/toggleWebsite', 'site1')
      sessionStorage.setItem("website", "site1");

      break
    case 'workRecord':
      store.dispatch('app/toggleWebsite', 'site1')
      sessionStorage.setItem("website", "site1");

      break
    case 'workReport':
      store.dispatch('app/toggleWebsite', 'site1')
      sessionStorage.setItem("website", "site1");

      break
    case 'Exploration':
      store.dispatch('app/toggleWebsite', 'site2')
      sessionStorage.setItem("website", "site2");

      break
    case 'secondCheckProcess':
      store.dispatch('app/toggleWebsite', 'site12345')
      sessionStorage.setItem("website", "site12345");

      break
    case 'secondCompeleteProcess':
      store.dispatch('app/toggleWebsite', 'site12345')
      sessionStorage.setItem("website", "site12345");

      break
    case 'checkResult':
      sessionStorage.setItem("website", "sitebck1");
      store.dispatch('app/toggleWebsite', 'sitebck1')
      break
    case 'ExamineUser':
      sessionStorage.setItem("website", "site53");
      store.dispatch('app/toggleWebsite', 'site53')
      break
    case 'IdeaSlips':
      sessionStorage.setItem("website", "site53");
      store.dispatch('app/toggleWebsite', 'site53')
      break
    case 'IdeaSlips111':
      sessionStorage.setItem("website", "site53");
      store.dispatch('app/toggleWebsite', 'site53')
      break
    case 'QualifiedBook':
      sessionStorage.setItem("website", "site53");
      store.dispatch('app/toggleWebsite', 'site53')
      break
    case 'Manage':
      sessionStorage.setItem("website", "site54");
      store.dispatch('app/toggleWebsite', 'site54')
      break
    case 'CheckRate':
      sessionStorage.setItem("website", "site54");
      store.dispatch('app/toggleWebsite', 'site54')
      break
    case 'processDetail111':
      sessionStorage.setItem("website", "site156");
      store.dispatch('app/toggleWebsite', 'site156')
      break
    case 'displayCertificate1':
      sessionStorage.setItem("website", "site555");
      store.dispatch('app/toggleWebsite', 'site555')
      break
    case 'finallyProcess':
      sessionStorage.setItem("website", "sitefinally");
      store.dispatch('app/toggleWebsite', 'sitefinally')
      break
    case 'explorationReport':
      sessionStorage.setItem("website", "sitefinallyOther");
      store.dispatch('app/toggleWebsite', 'sitefinallyOther')
      break
    case 'WorkingProj':
      sessionStorage.setItem("website", "dispatchUrl");
      store.dispatch('app/toggleWebsite', 'dispatchUrl')
      break
    case 'DispatchDetail':
      sessionStorage.setItem("website", "dispatchUrlCheck");
      store.dispatch('app/toggleWebsite', 'dispatchUrlCheck')
      break
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
