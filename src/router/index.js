import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */
/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/secondCheck",
    component: Layout,
    redirect: "/secondCheck/secondCheckProcess",
    name: "SecondCheck",
    meta: { title: "复查工程", icon: "example" },
    roles: ["admin"],
    children: [
      {
        path: "secondCheckProcess",
        name: "SecondCheckProcess",
        component: () => import("@/views/secondCheck/secondCheckProcess.vue"),
        meta: { title: "复查工程", icon: "password" },
        roles: ["admin"]
      },
      {
        path: "displayCertificate1",
        name: "DisplayCertificate1",
        component: () => import("@/views/secondCheck/displaycertificate.vue"),
        meta: { title: "审查工程" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "secondCheckProcess",
        name: "SecondCheckProcess",
        component: () => import("@/views/secondCheck/secondCheckProcess.vue"),
        meta: { title: "复查工程", icon: "password" },
        roles: ["admin"]
      },
      {
        path: "checkDetail",
        name: "CheckDetail",
        component: () => import("@/views/secondCheck/checkDetail.vue"),
        meta: { title: "审查工程" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "checkResult",
        name: "CheckResult",
        component: () => import("@/views/secondCheck/checkResult.vue"),
        meta: { title: "工程详情" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "secondCompeleteProcess",
        name: "SecondCompeleteProcess",
        component: () => import("@/views/secondCheck/compeleteProcess.vue"),
        meta: { title: "工程详情" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "secExplorationDetail",
        name: "ProcessDetail11111",
        component: () => import("@/views/secondCheck/detail.vue"),
        meta: { title: "工程详情" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "wordRecord11",
        name: "ProcessDetail11111",
        component: () => import("@/views/secondCheck/workRecord.vue"),
        meta: { title: "工程详情" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "personInfo11",
        name: "processDetail11111",
        component: () => import("@/views/secondCheck/personal.vue"),
        meta: { title: "人员信息" },
        roles: ["admin"],
        hidden: true
      }
    ]
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: "/homePage"
  },
  {
    // 勘察单位路由
    path: "/exploration",
    component: Layout,
    redirect: "/exploration/process",
    name: "system",
    meta: { title: "勘察单位", icon: "example" },
    roles: ["admin"],
    children: [
      {
        path: "Exploration",
        name: "Exploration",
        component: () => import("@/views/Exploration/Exploration.vue"),
        mate: { title: "勘察单位在办工程" },
        roles: ["admin"]
      },
      {
        path: "investigate",
        name: "investigate",
        component: () => import("@/views/Exploration/investigate.vue"),
        mate: { title: "勘察单位已提交送审" },
        roles: ["admin"]
      },
      {
        path: "wordRecord",
        name: "wordRecord",
        component: () => import("@/views/Exploration/wordRecord.vue"),
        mate: { title: "勘察单位工作记录" },
        roles: ["admin"]
      },
      {
        path: "wordReport",
        name: "wordReport",
        component: () => import("@/views/Exploration/wordReport.vue"),
        mate: { title: "勘察单位工作报告" },
        roles: ["admin"]
      },
      {
        path: "ExplorationDetail",
        name: "ExplorationDetail",
        component: () => import("@/views/Exploration/detail.vue"),
        mate: { title: "勘察单位详情" },
        roles: ["admin"]
      },
      {
        path: "statistics",
        name: "statistics",
        component: () => import("@/views/Exploration/statistics.vue"),
        mate: { title: "勘察单位统计" },
        roles: ["admin"]
      },
      {
        path: "personInfo",
        name: "personInfo",
        component: () => import("@/views/Exploration/personinfo.vue"),
        mate: { title: "勘察单位人员信息" },
        roles: ["admin"]
      },
      {
        path: "qualifiedOther",
        name: "QualifiedOther",
        component: () => import("@/views/Exploration/qualifiedOther.vue"),
        mate: { title: "勘察单位审查合格" },
        roles: ["admin"]
      },
      {
        path: "viewDetail",
        name: "viewDetail",
        component: () => import("@/views/Exploration/viewDetail.vue"),
        mate: { title: "勘察单位" },
        roles: ["admin"]
      }
    ]
  },
  {
    // 建设单位路由
    path: "/construction",
    component: Layout,
    redirect: "/construction/process",
    name: "system",
    meta: { title: "建设单位", icon: "example" },
    roles: ["admin"],
    children: [
      {
        path: "process",
        name: "process",
        component: () => import("@/views/construction/process.vue"),
        meta: { title: "在办工程", icon: "password" },
        roles: ["admin"]
      },
      {
        path: "detail",
        name: "processDetail",
        component: () => import("@/views/construction/detail.vue"),
        meta: { title: "工程详情" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "edit",
        name: "edit",
        component: () => import("@/views/construction/edit.vue"),
        meta: { title: "工程详情" },
        roles: ["admin"],
        hidden: true
      },
      // 项目统一代码验证
      {
        path: "codecheck",
        name: "codecheck",
        component: () => import("@/views/construction/codecheck.vue"),
        meta: { title: "项目代码验证" },
        roles: ["admin"],
        hidden: true
      },
      // 审图机构
      {
        path: "lookimg",
        name: "lookimg",
        component: () => import("@/views/construction/lookimg.vue"),
        meta: { title: "审图机构" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "newadd",
        name: "newadd",
        component: () => import("@/views/construction/newadd.vue"),
        meta: { title: "新建审图" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "examined",
        name: "examined",
        component: () => import("@/views/construction/examined.vue"),
        meta: { title: "已出审查合格证书" },
        roles: ["admin"]
      },
      {
        path: "auditPlan",
        name: "auditPlan",
        component: () => import("@/views/construction/auditPlan.vue"),
        meta: { title: "新建审图" },
        roles: ["admin"],
        children: [
          {
            path: "Exploration",
            name: "Exploration",
            component: () => import("@/views/Exploration/Exploration.vue"),
            mate: { title: "勘察单位" },
            roles: ["admin"]
          },
          {
            path: "workRecord",
            name: "workRecord",
            component: () => import("@/views/construction/workRecord.vue"),
            meta: { title: "现场作业记录" },
            roles: ["admin"],
            hidden: true
          },
          {
            path: "investigate",
            name: "investigate",
            component: () => import("@/views/Exploration/investigate.vue"),
            mate: { title: "勘察单位" },
            roles: ["admin"]
          },
          {
            path: "wordRecord",
            name: "wordRecord",
            component: () => import("@/views/Exploration/wordRecord.vue"),
            mate: { title: "勘察单位" },
            roles: ["admin"]
          },
          {
            path: "wordReport",
            name: "wordReport",
            component: () => import("@/views/Exploration/wordReport.vue"),
            mate: { title: "勘察单位" },
            roles: ["admin"]
          },
          ,
          {
            path: "wordReport1",
            name: "wordReport",
            component: () => import("@/views/wordReport/wordreport1.vue"),
            mate: { title: "勘察单位" },
            roles: ["admin"]
          },
          {
            path: "ExplorationDetail",
            name: "ExplorationDetail",
            component: () => import("@/views/Exploration/detail.vue"),
            mate: { title: "勘察单位" },
            roles: ["admin"]
          },
          {
            path: "statistics",
            name: "statistics",
            component: () => import("@/views/Exploration/statistics.vue"),
            mate: { title: "勘察单位" },
            roles: ["admin"]
          },
          {
            path: "personInfo",
            name: "personInfo",
            component: () => import("@/views/Exploration/personinfo.vue"),
            mate: { title: "勘察单位" },
            roles: ["admin"]
          },
          {
            path: "qualifiedOther",
            name: "QualifiedOther",
            component: () => import("@/views/Exploration/qualifiedOther.vue"),
            mate: { title: "勘察单位" },
            roles: ["admin"]
          },
          {
            path: "viewDetail",
            name: "viewDetail",
            component: () => import("@/views/Exploration/viewDetail.vue"),
            mate: { title: "勘察单位" },
            roles: ["admin"]
          }
        ]
      },
      {
        path: "refuse",
        name: "refuse",
        component: () => import("@/views/construction/refuse.vue"),
        meta: { title: "不予受理工程" },
        roles: ["admin"]
      },
      {
        path: "certificate",
        name: "certificate",
        component: () => import("@/views/construction/certificate.vue"),
        meta: { title: "合格证" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "personal",
        name: "personal",
        component: () => import("@/views/construction/personal.vue"),
        meta: { title: "人员信息" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "workRecord",
        name: "WorkRecord",
        component: () => import("@/views/construction/workRecord.vue"),
        meta: { title: "工作记录" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "workReport",
        name: "WorkReport",
        component: () => import("@/views/construction/workReport.vue"),
        meta: { title: "工作报告" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "editpersonal",
        name: "editpersonal",
        component: () => import("@/views/construction/editpersonal.vue"),
        meta: { title: "人员信息" },
        roles: ["admin"],
        hidden: true
      },

      {
        path: "editworkRecord",
        name: "editworkRecord",
        component: () => import("@/views/construction/editworkRecord.vue"),
        meta: { title: "现场作业记录" },
        roles: ["admin"],
        hidden: true
      },

      {
        path: "editworkReport",
        name: "editworkReport",
        component: () => import("@/views/construction/editworkReport.vue"),
        meta: { title: "工程勘察报告" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "qualified",
        name: "qualified",
        component: () => import("@/views/qualified/qualified.vue"),
        mate: { title: "勘察单位" },
        roles: ["admin"]
      },
      {
        path: "other",
        name: "Other",
        component: () => import("@/views/Other/Other.vue"),
        mate: { title: "勘察单位" },
        roles: ["admin"]
      },
      {
        path: "ideaSlips",
        name: "IdeaSlips",
        component: () => import("@/views/Other/ideaSlips.vue"),
        mate: { title: "勘察单位" },
        roles: ["admin"]
      },
      {
        path: "qualifiedBook",
        name: "QualifiedBook",
        component: () => import("@/views/Other/QualifiedBook.vue"),
        mate: { title: "勘察单位" },
        roles: ["admin"]
      },
      {
        path: "manage",
        name: "Manage",
        component: () => import("@/views/manage/manage.vue"),
        mate: { title: "勘察单位" },
        roles: ["admin"]
      },
      {
        path: "checkRate",
        name: "CheckRate",
        component: () => import("@/views/manage/check_rate.vue"),
        mate: { title: "勘察单位" },
        roles: ["admin"]
      }
    ]
  },
  {
    path: "/examine",
    component: Layout,
    redirect: "/examine/process",
    name: "examine",
    meta: { title: "审查单位", icon: "example" },
    roles: ["admin"],
    children: [
      {
        path: "examineprocess",
        name: "examineprocess",
        component: () => import("@/views/examine/examineprocess.vue"),
        meta: { title: "在办工程", icon: "password" },
        roles: ["admin"]
      },
      {
        path: "qualified",
        name: "qualified",
        component: () => import("@/views/qualified/qualified.vue"),
        mate: { title: "勘察单位" },
        roles: ["admin"]
      },
      {
        path: "certificate1",
        name: "certificate1",
        component: () => import("@/views/construction/certificate.vue"),
        meta: { title: "合格证" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "dispassProcess",
        name: "dispassProcess",
        component: () => import("@/views/examine/dispassProcess.vue"),
        meta: { title: "在办工程", icon: "password" },
        roles: ["admin"]
      },

      {
        path: "compeleteProcess",
        name: "compeleteProcess",
        component: () => import("@/views/examine/compeleteProcess.vue"),
        meta: { title: "在办工程", icon: "password" },
        roles: ["admin"]
      },
      {
        path: "handleProcess",
        name: "processHandle",
        component: () => import("@/views/examine/handle.vue"),
        meta: { title: "受理工程" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "taskAppoint",
        name: "TaskAppoint",
        component: () => import("@/views/examine/taskappoint.vue"),
        meta: { title: "受理工程" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "checkProcess",
        name: "processCheck",
        component: () => import("@/views/examine/detail.vue"),
        meta: { title: "受理工程" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "examineuser",
        name: "ExamineUser",
        component: () => import("@/views/examine/examineuser.vue"),
        meta: { title: "审查工程" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "displayCertificate1",
        name: "displayCertificate1",
        component: () => import("@/views/examine/displaycertificate.vue"),
        meta: { title: "审查工程" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "checkDetail",
        name: "checkDetail",
        component: () => import("@/views/examine/checkDetail.vue"),
        meta: { title: "审查工程" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "dispassCheck",
        name: "dispassCheck",
        component: () => import("@/views/examine/dispassCheck.vue"),
        meta: { title: "未通过工程" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "ideaSlips",
        name: "IdeaSlips",
        component: () => import("@/views/examine/ideaSlips.vue"),
        meta: { title: "未通过工程" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "ideaSlips111",
        name: "IdeaSlips111",
        component: () => import("@/views/examine/ideaSlips.vue"),
        meta: { title: "未通过工程" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "detailProcess",
        name: "processDetail111",
        component: () => import("@/views/examine/detail.vue"),
        meta: { title: "工程详情" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "ExplorationDetail",
        name: "processDetail111",
        component: () => import("@/views/examine/detail.vue"),
        meta: { title: "工程详情" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "wordRecord",
        name: "processDetail111",
        component: () => import("@/views/examine/workRecord.vue"),
        meta: { title: "工程详情" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "personInfo",
        name: "processDetail111",
        component: () => import("@/views/examine/personal.vue"),
        meta: { title: "人员信息" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "wordReport",
        name: "processDetail111",
        component: () => import("@/views/examine/workReport.vue"),
        meta: { title: "工程详情" },
        roles: ["admin"],
        hidden: true
      }
    ]
  },
  {
    path: "/system",
    component: Layout,
    redirect: "/system/wxUserList",
    name: "system",
    meta: { title: "系统管理", icon: "example" },
    roles: ["admin"],
    children: [
      {
        path: "userList",
        name: "UserList",
        component: () => import("@/views/system/userList.vue"),
        meta: { title: "管理用户", icon: "password" },
        roles: ["admin"]
      },
      {
        path: "userEdit",
        name: "UserEdit",
        component: () => import("@/views/system/userEdit.vue"),
        meta: { title: "添加/编辑用户" },
        roles: ["admin"],
        hidden: true
      }
    ]
  },
  {
    path: "/finallyExamine",
    component: Layout,
    redirect: "/finallyExamine/Exploration",
    name: "system",
    meta: { title: "系统管理", icon: "example" },
    roles: ["admin"],
    children: [
      {
        path: "finallyProcess",
        name: "finallyProcess",
        component: () => import("@/views/finallyExamine/process.vue"),
        meta: { title: "管理用户", icon: "password" },
        roles: ["admin"]
      },
      {
        path: "wordRecord",
        name: "FinallyWorkRecord",
        component: () => import("@/views/finallyExamine/workRecord.vue"),
        meta: { title: "工程详情" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "personInfo",
        name: "FinallyPersonInfo",
        component: () => import("@/views/finallyExamine/personal.vue"),
        meta: { title: "人员信息" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "detailProcess",
        name: "DetailProcess",
        component: () => import("@/views/finallyExamine/detail.vue"),
        meta: { title: "工程详情" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "explorationReport",
        name: "ExplorationReport",
        component: () => import("@/views/finallyExamine/explorationReport.vue"),
        meta: { title: "添加/编辑用户" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "checkDetail",
        name: "CheckDetail",
        component: () => import("@/views/finallyExamine/checkDetail.vue"),
        meta: { title: "审查工程" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "wordReport",
        name: "WordReport",
        component: () => import("@/views/finallyExamine/wordreport1.vue"),
        meta: { title: "审查工程" },
        roles: ["admin"],
        hidden: true
      },
      {
        path: "againcheck",
        name: "Againcheck",
        component: () => import("@/views/finallyExamine/againcheck.vue"),
        meta: { title: "审查工程" },
        roles: ["admin"],
        hidden: true
      }
    ]
  },
  {
    //劳务单位
    path: "/dispatch",
    component: Layout,
    redirect: "/dispatch/workingProj",
    name: "dispatch",
    meta: { title: "劳务单位", icon: "example" },
    roles: ["admin"],
    children: [
      {
        path: "workingProj",
        name: "WorkingProj",
        component: () => import("@/views/dispatch/workingProj.vue"),
        meta: { title: "在办工程" }
      },
      {
        path: "rejectProj",
        name: "RejectProj",
        component: () => import("@/views/dispatch/rejectProj.vue"),
        meta: { title: "不予受理" }
      },
      {
        path: "dispatchDetail",
        name: "DispatchDetail",
        component: () => import("@/views/dispatch/dispatchDetail.vue"),
        meta: { title: "工程合同信息" }
      },
      {
        path: "dispatchPersonInfo",
        name: "DispatchPersonInfo",
        component: () => import("@/views/dispatch/dispatchPersonInfo.vue"),
        meta: { title: "人员信息" }
      },
      {
        path: "dispatchRecord",
        name: "DispatchRecord",
        component: () => import("@/views/dispatch/dispatchRecord.vue"),
        meta: { title: "作业记录" }
      },
      {
        path: "dispatchReport",
        name: "DispatchReport",
        component: () => import("@/views/dispatch/dispatchReport.vue"),
        meta: {
          title: "工作报告"
        }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },

  // 再审
  {
    path: "/againcheck",
    component: Layout,
    name: "againcheck",
    component: () => import("@/views/againcheck/againcheck.vue"),
    meta: { title: "再审工程", icon: "password" },
    roles: ["admin"]
  },
  // {
  //   path: "/homePage",
  //   name: "HomePage",
  //   component: () => import("@/views/login/homePage.vue"),
  //   meta: { title: "Home" },
  //   roles: ["admin"]
  // },
  {
    // path: "/test",
    path: "/homePage",
    name: "test",
    component: () => import("@/views/login/newHomePage.vue"),
    meta: { title: "Home" },
    roles: ["admin"]
  },
  {
    path: "/testExploration",
    component: Layout,
    name: "testExploration",
    component: () => import("@/views/testLoginPage/testExploration.vue"),
    meta: { title: "Home" },
    roles: ["admin"]
  },
  {
    path: "/testProject",
    component: Layout,
    name: "testProject",
    component: () => import("@/views/testLoginPage/testProject.vue"),
    meta: { title: "Home" },
    roles: ["admin"]
  }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
