<template>
  <el-container>
    <el-header class="header" height="180">
      <div class="header_h" style="border: none;width:100%">
        <div class="header">
          <div class="header_b sc_header" style="border: none;width:100%;">
            <div style="width:1200px;margin:0 auto">
              <ul class="heras" style="height:90px;margin:0">
                <li class="huidao_shouye" style="cursor: pointer">
                  <img
                    :src="logo_s_new_logo"
                    style="vertical-align: middle;width:268px;"
                  />
                </li>
                <li class="yem" />
                <li style="vertical-align: middle;">
                  <span style="font-weight:600;font-size:20px;"
                    >工程建设项目施工图审查</span
                  >
                </li>
                <li class="userInfo">
                  <span>
                    {{ userName }}
                  </span>
                  <div
                    class="img_img2"
                    :class="{ img2_img: quit }"
                    @click="quit = !quit"
                  ></div>
                  <div class="userMenu" v-show="quit == true">
                    <a
                      style="margin-right: 0;display: block;"
                      href="http://qjd.sczwfw.gov.cn/col/col1934/index.html?v=V201912061614"
                      >新手指南</a
                    >
                    <a
                      style="margin-right:0;display:block;color:#4F8CEE;border-top:1px solid rgb(240, 240, 240);"
                      @click="loginOut"
                      >退出</a
                    >
                  </div>
                </li>

                <li class="ewm">
                  <a
                    href="http://www.sc.gov.cn/"
                    target="_blank"
                    style="color:#055EC3;font-size: 16px;"
                    class="fr"
                    >四川省人民政府网</a
                  >
                </li>
                <li id="yidongduan_a">
                  <img :src="phone" style />
                </li>
              </ul>
            </div>

            <div
              class="bannerDivStyle"
              :style="{ backgroundImage: backgroundImage }"
            >
              <div style="width:1200px;margin:0 auto;height:200px;">
                <div class="bannerText"></div>
                <el-menu
                  v-if="website == 'site0'"
                  :default-active="activeIndex1"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelect1"
                >
                  <el-menu-item index="0">在办工程</el-menu-item>
                  <el-menu-item index="1">已出审查合格证书</el-menu-item>
                  <el-menu-item index="2">不予受理工程</el-menu-item>
                </el-menu>
                <el-menu
                  v-if="website == 'site156'"
                  :default-active="activeIndex156"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelect1561"
                >
                  <el-menu-item index="0">工程合同信息</el-menu-item>
                  <el-menu-item index="1">人员信息</el-menu-item>
                  <el-menu-item index="2">现场作业记录</el-menu-item>
                  <el-menu-item index="3">工程勘察报告</el-menu-item>
                </el-menu>
                <el-menu
                  v-if="website == 'sitebck1'"
                  :default-active="activeIndexbck"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelectbck"
                >
                  <el-menu-item index="0">工程合同信息</el-menu-item>
                  <el-menu-item index="1">人员信息</el-menu-item>
                  <el-menu-item index="2">现场作业记录</el-menu-item>
                  <el-menu-item index="3">工程勘察报告</el-menu-item>
                </el-menu>
                <el-menu
                  v-if="website == 'site1'"
                  :default-active="activeIndex3"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelect3"
                >
                  <el-menu-item index="0">工程合同信息</el-menu-item>
                  <el-menu-item index="1">人员信息</el-menu-item>
                  <el-menu-item index="2">现场作业记录</el-menu-item>
                  <el-menu-item index="3">工程勘察报告</el-menu-item>
                </el-menu>
                <el-menu
                  v-if="website == 'site2'"
                  :default-active="activeIndex"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="explorationPage"
                >
                  <el-menu-item index="0">在办工程</el-menu-item>
                  <el-menu-item index="1">已提交送审</el-menu-item>
                  <el-menu-item index="2">审查合格</el-menu-item>
                  <el-menu-item index="3">综合统计</el-menu-item>
                </el-menu>
                <el-menu
                  v-if="website == 'site3'"
                  :default-active="explorationActive"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="explorationDetailPage"
                >
                  <el-menu-item index="0">工程合同信息</el-menu-item>
                  <el-menu-item index="1">人员信息</el-menu-item>
                  <el-menu-item index="2">现场作业记录</el-menu-item>
                  <el-menu-item index="3">工程勘察报告</el-menu-item>
                </el-menu>
                <el-menu
                  v-if="website == 'sitetwo'"
                  :default-active="activeIndex2"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelect2"
                >
                  <el-menu-item index="0">工程合同信息</el-menu-item>
                  <el-menu-item index="1">人员信息</el-menu-item>
                  <el-menu-item index="2">现场作业记录</el-menu-item>
                  <el-menu-item index="3">工程勘察报告</el-menu-item>
                </el-menu>
                <el-menu
                  v-if="website == 'site52'"
                  :default-active="activeIndex52"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelect52"
                >
                  <el-menu-item index="0">在办工程</el-menu-item>
                  <el-menu-item index="1">已出审查合格证书</el-menu-item>
                  <el-menu-item index="2">不予受理工程</el-menu-item>
                </el-menu>

                <el-menu
                  v-if="website == 'dispasscheck'"
                  :default-active="activeIndex5225"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelect5225"
                >
                  <el-menu-item index="0">工程详情</el-menu-item>
                  <el-menu-item index="1">不受理原因</el-menu-item>
                </el-menu>
                <el-menu
                  v-if="website == 'site12345'"
                  :default-active="activeIndex52"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelect12345"
                >
                  <el-menu-item index="0">在办工程</el-menu-item>
                  <el-menu-item index="1">已出审查合格证书</el-menu-item>
                </el-menu>
                <el-menu
                  v-if="website == 'site53'"
                  :default-active="finallyActiveIndex111"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelect53"
                >
                  <el-menu-item index="0">在办工程</el-menu-item>
                  <el-menu-item index="1">已出审查合格书</el-menu-item>
                  <!-- <el-menu-item index="2">生成合格书</el-menu-item> -->
                </el-menu>
                <el-menu
                  v-if="website == 'sitefinally'"
                  :default-active="finallyActiveIndex"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="finallyHandleSelect"
                >
                  <el-menu-item index="0">在办工程</el-menu-item>
                  <el-menu-item index="1">已出审查合格书</el-menu-item>
                </el-menu>
                <el-menu
                  v-if="website == 'sitefinallyOther'"
                  :default-active="activeIndex11111"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="finallyHandleSelectOther"
                >
                  <el-menu-item index="0">工程合同</el-menu-item>
                  <el-menu-item index="1">人员信息</el-menu-item>
                  <el-menu-item index="2">现场作业记录</el-menu-item>
                  <el-menu-item index="3">工程勘察报告</el-menu-item>
                </el-menu>
                <el-menu
                  v-if="website == 'site54'"
                  :default-active="activeIndex54"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelect54"
                >
                  <el-menu-item index="0">项目统计</el-menu-item>
                  <el-menu-item index="1">审查一次性通过率统计</el-menu-item>
                </el-menu>
                <el-menu
                  v-if="website == 'dispatchUrl'"
                  :default-active="dispatchIndex"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="dispatchHandleSelect"
                >
                  <el-menu-item index="0">在办工程</el-menu-item>
                  <el-menu-item index="1">不予受理工程</el-menu-item>
                </el-menu>
                <el-menu
                  v-if="website == 'dispatchUrlCheck'"
                  :default-active="dispatchCheckIndex"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="dispatchCheckSelect"
                >
                  <el-menu-item index="0">工程合同信息</el-menu-item>
                  <el-menu-item index="1">人员信息</el-menu-item>
                  <el-menu-item index="2">现场作业记录</el-menu-item>
                  <el-menu-item index="3">工程勘察报告</el-menu-item>
                </el-menu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-header>
    <el-main class="elMain">
      <app-main />
    </el-main>
    <el-footer>
      <div class="ft-bg">
        <div class="shengmin">
          <ul>
            <li>
              <a
                href="/app/main?iframeUrlLo=webAdivitise/newDetail?id=1"
                target="_blank"
                style="color: #055EC3 !important;"
                >本站声明</a
              >
            </li>
            <li class="xian" />
            <li>
              <a
                href="/app/main?iframeUrlLo=webAdivitise/newDetail?id=2"
                target="_blank"
                style="color: #055EC3 !important;"
                >关于我们</a
              >
            </li>
          </ul>
        </div>
        <div class="state mid mid-with">
          <div class="foot-icon fl">
            <span style="float: left;">
              <a
                href="http://bszs.conac.cn/sitename?method=show&amp;id=0B69D405429E0E7AE053012819AC9DDD"
                target="_blank"
              >
                <img :src="foot_bg" />
              </a>
            </span>
            <ul class>
              <li>主管单位：四川省人民政府办公厅</li>
              <li>承办单位：四川省大数据中心</li>
              <li>技术支持：中国电信四川公司</li>
              <li>联系我们：12345</li>
              <li>网站标识码：5100000101</li>
              <li>蜀 ICP 备13001288号-3</li>
              <li>
                <a
                  href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51010402000532"
                  target="_blank"
                  style="color:black"
                >
                  <img :src="foot_police" class="in-bl" />&nbsp;&nbsp;川公网安备
                  51010402000532号
                </a>
              </li>
              <li>建议使用1366*768分辨率/IE9.0或以上浏览器访问达到最佳效果</li>
            </ul>
          </div>
          <div class="clear" />
        </div>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import { AppMain } from "./components";
import ResizeMixin from "./mixin/ResizeHandler";
import { getSysUser } from "../utils/laborRouter";

export default {
  name: "Layout",
  components: {
    AppMain
  },
  mixins: [ResizeMixin],
  data() {
    return {
      target:
        "http://202.61.88.67:8080/open-platform-exchange/exchange/getResource?resourceCode=ZYZC2019112500000197&applyCode=YYSQ2020041300000835&sysCode=0003&target=http://" +
        process.env.VUE_APP_REDIRECT_URI,
      userName: getSysUser("userName"),
      quit: false,
      dispatchCheckIndex: "0",
      dispatchIndex: "0",
      activeIndex11111: "3",
      activeIndexbck: "3",
      finallyActiveIndex: "0",
      finallyActiveIndex1: "3",
      activeIndex: "0",
      explorationActive: "0",
      activeIndex1: "0",
      activeIndex2: "0",
      activeIndex3: "0",
      activeIndex52: "0",
      activeIndex2552: "2",
      activeIndex5522: "1",
      activeIndex156: "0",
      activeIndex5225: "1",
      activeIndex53: "0",
      activeIndex54: "0",
      activeIndex11: "0",
      logo_s_new_logo: require("../assets/logo_s_new_logo.png"),
      tuichu_page: require("../assets/tuichu_page.png"),
      weixin_k: require("../assets/weixin_k.png"),
      gcjssousuo: require("../assets/gcjssousuo.png"),
      phone: require("../assets/phone.png"),
      foot_bg: require("../assets/foot-bg.png"),
      foot_police: require("../assets/foot-police.png"),
      banner: require("../assets/banner.png"),
      backgroundImage: "url(" + require("../assets/pageBanner.jpg") + ")",
      finallyActiveIndex111: "0"
    };
  },
  computed: {
    website() {
      console.log(sessionStorage.getItem("website"));
      if (this.$store.state.app.website) {
        return this.$store.state.app.website;
      } else {
        return sessionStorage.getItem("website");
      }
    },
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device == "mobile"
      };
    }
  },
  mounted() {
    this.activeIndex1 = sessionStorage.getItem("key")
      ? sessionStorage.getItem("key")
      : "0";
    this.activeIndex2 = sessionStorage.getItem("key2")
      ? sessionStorage.getItem("key2")
      : "0";
    this.activeIndex3 = sessionStorage.getItem("key3")
      ? sessionStorage.getItem("key3")
      : "0";
    this.activeIndex = sessionStorage.getItem("activeKey")
      ? sessionStorage.getItem("activeKey")
      : "0";
    this.explorationActive = sessionStorage.getItem("explorationActive")
      ? sessionStorage.getItem("explorationActive")
      : "0";
    this.activeIndex52 = sessionStorage.getItem("key52")
      ? sessionStorage.getItem("key52")
      : "0";
    this.activeIndex156 = sessionStorage.getItem("activeIndex156")
      ? sessionStorage.getItem("activeIndex156")
      : "0";
  },
  methods: {
    dispatchCheckSelect(val) {
      this.dispatchCheckSelect = val;
      if (val == 0) {
        this.$router.push({ path: "dispatchDetail" });
      } else if (val == 1) {
        this.$router.push({ path: "dispatchPersonInfo" });
      } else if (val == 2) {
        this.$router.push({ path: "dispatchRecord" });
      } else {
        this.$router.push({ path: "dispatchReport" });
      }
    },
    dispatchHandleSelect(val) {
      this.dispatchIndex = val;
      if (val == 0) {
        this.$router.push({ path: "workingProj" });
      } else {
        this.$router.push({ path: "rejectProj" });
      }
    },
    finallyHandleSelectOther(val) {
      this.activeIndex11111 = val;
      sessionStorage.setItem("key", val);
      if (this.activeIndex11111 == "0") {
        this.$router.push({ path: "detailProcess" });
      }
      if (this.activeIndex11111 == "1") {
        this.$router.push({ path: "personInfo" });
      }
      if (this.activeIndex11111 == "2") {
        this.$router.push({ path: "wordRecord" });
      }
      if (this.activeIndex11111 == "3") {
        this.$router.push({ path: "explorationReport" });
      }
    },
    finallyHandleSelect(item) {
      if (item == 0) {
        this.$router.push({ path: "finallyprocess" });
      } else {
        this.$router.push({ path: "explorationReport" });
      }
    },
    loginOut() {
      sessionStorage.clear();
      window.location.href = this.target;
    },
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", {
        withoutAnimation: false
      });
    },
    explorationDetailPage(val) {
      sessionStorage.setItem("explorationActive", val);
      this.explorationActive = val;
      if (this.explorationActive == "0") {
        this.$router.push({ path: "ExplorationDetail" });
      } else if (this.explorationActive == "1") {
        this.$router.push({ path: "personInfo" });
      } else if (this.explorationActive == "2") {
        this.$router.push({ path: "wordRecord" });
      } else {
        this.$router.push({ path: "wordReport" });
      }
    },
    explorationPage(val) {
      sessionStorage.setItem("activeKey", val);
      this.activeIndex = val;
      if (this.activeIndex == "0") {
        this.$router.push({ path: "Exploration" });
      } else if (this.activeIndex == "1") {
        this.$router.push({ path: "investigate" });
      } else if (this.activeIndex == "2") {
        this.$router.push({ path: "qualifiedOther" });
      } else {
        this.$router.push({ path: "statistics" });
      }
    },
    handleSelect1(val) {
      this.activeIndex1 = val;
      sessionStorage.setItem("key", val);
      if (this.activeIndex1 == "0") {
        this.$router.push({ path: "process" });
      }
      if (this.activeIndex1 == "1") {
        this.$router.push({ path: "examined" });
      }
      if (this.activeIndex1 == "2") {
        this.$router.push({ path: "refuse" });
      }
      // const url = `/${this.website}${urls[this.website][val]}`
      // this.$router.push(url)
    },
    handleSelect156(val) {
      // debugger
      // const url = `/${this.website}${urls[this.website][val]}`
      // const url = `/${this.website}${val}`
      this.$router.push({ path: val });
      console.log("this.router:" + this.$router);

      this.activeIndex = val;
    },
    handleSelect2(val) {
      this.activeIndex2 = val;
      sessionStorage.setItem("key2", val);
      // const url = `/${this.website}${urls[this.website][val]}`
      // this.$router.push(url)
      if (this.activeIndex2 == "0") {
        this.$router.push({ path: "edit" });
      }
      if (this.activeIndex2 == "1") {
        this.$router.push({ path: "editpersonal" });
      }
      if (this.activeIndex2 == "2") {
        this.$router.push({ path: "editworkRecord" });
      }
      if (this.activeIndex2 == "3") {
        this.$router.push({ path: "editworkReport" });
      }
    },
    handleSelect3(val) {
      console.log("handleSelect3", sessionStorage.getItem("userEcode"));

      this.activeIndex3 = val;
      sessionStorage.setItem("key3", val);

      if (this.activeIndex3 == "0") {
        this.$router.push({
          path: "detail",
          query: { projectCode: this.$route.query.projectCode }
        });
      }
      if (this.activeIndex3 == "1") {
        this.$router.push({
          path: "personal",
          query: { projectCode: this.$route.query.projectCode }
        });
      }
      if (this.activeIndex3 == "2") {
        this.$router.push({ path: "workRecord" });
      }
      if (this.activeIndex3 == "3") {
        this.$router.push({ path: "workReport" });
      }
    },
    handleSelect52(val) {
      if (this.website == "site52") {
        this.activeIndex52 = val;
        sessionStorage.setItem("key52", val);
        if (this.activeIndex52 == "0") {
          this.$router.push({ path: "/examine/examineprocess" });
        }
        if (this.activeIndex52 == "1") {
          this.$router.push({ path: "/examine/compeleteProcess" });
        }
        if (this.activeIndex52 == "2") {
          this.$router.push({ path: "/examine/dispassProcess" });
        }
      }
    },
    handleSelect1561(val) {
      this.activeIndex156 = val;
      sessionStorage.setItem("activeIndex156", val);
      if (this.activeIndex156 == "0") {
        this.$router.push({
          path: "/examine/ExplorationDetail",
          query: { id: this.$route.query.id }
        });
      }
      if (this.activeIndex156 == "2") {
        this.$router.push({
          path: "/examine/wordRecord",
          query: { id: this.$route.query.id }
        });
      }
      if (this.activeIndex156 == "1") {
        this.$router.push({
          path: "/examine/personInfo",
          query: { id: this.$route.query.id }
        });
      }
      if (this.activeIndex156 == "3") {
        this.$router.push({
          path: "/examine/wordReport",
          query: { id: this.$route.query.id }
        });
      }
    },
    handleSelectbck(val) {
      this.activeIndexbck = val;
      sessionStorage.setItem("key52", val);
      if (this.activeIndexbck == "0") {
        this.$router.push({
          path: "/secondCheck/secExplorationDetail",
          query: { id: this.$route.query.id }
        });
      }
      if (this.activeIndexbck == "2") {
        this.$router.push({
          path: "/secondCheck/wordRecord11",
          query: { id: this.$route.query.id }
        });
      }
      if (this.activeIndexbck == "1") {
        this.$router.push({
          path: "/secondCheck/personInfo11",
          query: { id: this.$route.query.id }
        });
      }
      if (this.activeIndexbck == "3") {
        this.$router.push({
          path: "/secondCheck/checkResult",
          query: { id: this.$route.query.id }
        });
      }
      this.activeIndexbck = 3;
    },
    handleSelect5225(val) {
      this.activeIndex5225 = val;
      sessionStorage.setItem("key52", val);
      if (this.activeIndex5225 == "0") {
        this.$router.push({
          path: "/examine/detailProcess",
          query: { id: this.$route.query.id }
        });
      }
      if (this.activeIndex5225 == "1") {
        this.$router.push({
          path: "/examine/dispassCheck",
          query: { id: this.$route.query.id }
        });
      }
      this.activeIndex5225 = 1;
    },
    handleSelect12345(val) {
      this.activeIndex52 = val;
      sessionStorage.setItem("key52", val);
      if (this.activeIndex52 == "0") {
        this.$router.push({ path: "/secondCheck/secondCheckProcess" });
      }
      if (this.activeIndex52 == "1") {
        this.$router.push({ path: "/secondCheck/secondCompeleteProcess" });
      }
    },
    handleSelect53(val) {
      this.activeIndex53 = val;
      sessionStorage.setItem("key53", val);
      if (this.activeIndex53 == "0") {
        this.$router.push({ path: "/examine/examineuser" });
      }

      if (this.activeIndex53 == "1") {
        this.$router.push({ path: "/examine/ideaSlips" });
      }
      if (this.activeIndex53 == "2") {
        this.$router.push({ path: "/construction/QualifiedBook" });
      }
      this.activeIndex53 = 0;
    },
    handleSelect54(val) {
      this.activeIndex54 = val;
      sessionStorage.setItem("key54", val);
      if (this.activeIndex54 == "0") {
        this.$router.push({ path: "/construction/manage" });
      }
      if (this.activeIndex54 == "1") {
        this.$router.push({ path: "/construction/checkRate" });
      }
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
    toggleWebsite() {
      const website = this.website == "user-center" ? "smart" : "user-center";
      this.activeIndex = "0";
      this.activeIndex1 = "0";
      this.activeIndex2 = "0";
      this.activeIndex3 = "0";
      this.$store.dispatch("app/toggleWebsite", website);
      this.$router.push(`/${website}`);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  // background-color: #2C3447;
  padding: 0 0px;
}
.elMain {
  width: 1200px;
  margin: 0 auto;
  padding: 0px;
}
.left-menu {
  // width: 210px;
  // background-color: #1D2539;

  .grid {
    cursor: pointer;
  }
}

.el-menu {
  bottom: 0px;
  position: absolute;
  border-bottom: none;

  .el-menu-item {
    position: relative;
    height: 60px;
    transition: none;
    color: #ffffff;
    font-weight: 800;
    font-size: 20px;
    vertical-align: middle;
    font-weight: bold;
    background-color: #3f536e;
    line-height: 60px;
    text-align: center;
    // width:160px;
  }

  .el-menu-item:hover {
    font-size: 20px;
    color: #ffffff;
    vertical-align: middle;
    background-color: #3f536e;
    // line-height: 60px;
  }

  .el-menu-item.is-active {
    color: #2c3447;
    font-size: 20px;
    font-weight: 800;
    border-bottom: none;
    vertical-align: middle;
    line-height: 60px;
    background-color: #fff;
  }

  .el-menu-item.is-active::before {
    content: "";
    width: 30px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    vertical-align: middle;
    left: 50%;
    bottom: 1px;
    transform: translate(-50%, 0);
  }
}

.avatar-container {
  margin-right: 30px;

  .avatar-wrapper {
    margin-top: 5px;
    position: relative;

    .user-avatar {
      cursor: pointer;
      margin-top: 5px;
      width: 40px;
      height: 40px;
      border-radius: 40px;
    }

    .el-icon-caret-bottom {
      cursor: pointer;
      position: absolute;
      right: -20px;
      top: 25px;
      font-size: 12px;
    }
  }
}

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  width: 100%;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 10px 0;
  font-family: inherit;
  color: inherit;
  text-rendering: optimizelegibility;
}

h1 {
  color: #fff;
  text-shadow: 0 0 10px #444;
  font-size: 48px;
  line-height: 67px;
  border: 0;
  text-align: left;
  margin: 38px 0;
  padding: 0;
}
.trat {
  vertical-align: -3px;
}
#yidongduan_a {
  float: right;
  margin-top: 18px;
  margin-right: 15px;
}
.ewm {
  position: relative;
  text-align: center;
  vertical-align: middle;
  float: right;
  margin-top: 20px;
  color: #4f8cee;
}
.bannerText {
  width: 1200px;
  margin: 0 auto;
  height: 130px;
  color: white;
  font-size: 30px;
  padding-top: 40px;
  text-shadow: 0 0 10px #444;
}
.bannerDivStyle {
  background-position: left bottom;
  background-size: 100% 190%;
  width: 100%;
  height: 230px;
  position: relative;
}
.userMenu {
  display: block;
  position: absolute;
  z-index: 90;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 14px 0px;
  margin-left: 1%;
  margin-top: 71px;
  line-height: 34px;
  text-align: center;
  min-width: 91px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  top: 0px;
}
.userInfo {
  width: 102px;
  vertical-align: middle;
  float: right;
  margin-top: 17px;
  display: flex !important;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
}
.img_img2 {
  width: 26px;
  height: 26px;
  background: url("../assets/tuichu_page.png");
  background-repeat: no-repeat;
}
.img2_img {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  transition: transform 0.5s;
}
</style>
