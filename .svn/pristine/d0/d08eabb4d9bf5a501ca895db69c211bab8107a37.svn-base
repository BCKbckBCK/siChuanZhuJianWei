import Vue from "vue";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/zh-CN"; // lang i18n
import "@/styles/index.scss"; // global css

import App from "./App";
import store from "./store";
import router from "./router";

import "element-ui/lib/theme-chalk/base.css";
// collapse 展开折叠
import CollapseTransition from "element-ui/lib/transitions/collapse-transition";

Vue.component(CollapseTransition.name, CollapseTransition);
import "@/icons"; // icon
import "@/permission"; // permission control

import "./utils/global";
import moment from "moment";
Vue.prototype.$moment = moment;
Vue.filter("dateFormat", function(dataStr, pattern = "YYYY/MM/DD HH:mm:ss") {
  if (dataStr) {
    return moment(dataStr).format(pattern);
  } else {
    return "";
  }
});

Vue.use(ElementUI, { locale });
Vue.config.productionTip = false;

Vue.filter("getConstructionUseType", function(constructionUseType) {
  let constructionUseTypeName = "";
  switch (parseInt(constructionUseType)) {
    case 0:
      constructionUseTypeName = "新建";
      break;
    case 1:
      constructionUseTypeName = "改建";
      break;
    case 2:
      constructionUseTypeName = "扩建";
      break;
    case 3:
      constructionUseTypeName = "重建";
      break;
    case 4:
      constructionUseTypeName = "迁建";
      break;
    case 5:
      constructionUseTypeName = "恢复";
      break;
    case 6:
      constructionUseTypeName = "其他";
      break;
  }
  return constructionUseTypeName;
});

Vue.filter("getPtypeName", function(ptype) {
  let ptypeName = "";
  switch (parseInt(ptype)) {
    case 1:
      ptypeName = "审批";
      break;
    case 2:
      ptypeName = "核准";
      break;
    case 3:
      ptypeName = "备案";
      break;
  }
  return ptypeName;
});

Vue.filter("getWhetherConcavoConvex", function(whetherConcavoConvex) {
  let info = "";
  switch (parseInt(whetherConcavoConvex)) {
    case 0:
      info = "否";
      break;
    case 1:
      info = "是";
      break;
  }
  return info;
});

export const v = new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
