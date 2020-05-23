<template>
  <el-container class="login-container">
    <el-header height="180" style="padding: 0">
      <div style="border: none;width:100%">
        <div class="header">
          <div class="header_b sc_header" style="width:100%;">
            <div style="width:1200px;margin:0 auto">
              <ul class="heras">
                <li class="huidao_shouye">
                  <img :src="logo_s_new_logo" />
                </li>
                <li class="yem" />
                <li style="vertical-align: middle;">
                  <span style="font-weight:600;font-size:20px;"
                    >工程建设项目施工图审查</span
                  >
                </li>
                <li class="ewm" style="margin-right:50px">
                  <a href="http://www.sc.gov.cn/" target="_blank" class="fr"
                    >四川省人民政府网</a
                  >
                </li>
                <li id="yidongduan_a">
                  <img :src="phone" style />
                  <div id="kill_oppo">
                    <!-- <img src="/app/static/img/newMain/SCAPP2.png" style="width: 100px;height: 100px;"> -->
                  </div>
                </li>
                <li id="weixin_a">
                  <img :src="weixin_k" />
                  <div id="trick_bat" />
                </li>
              </ul>
            </div>
            <div class="bgClass">
              <div class="headerH1Text">
                <h1>数字化审查</h1>
                <span>全过程留痕</span>
                <span>审查结果透明</span>
                <div class="mian">
                  <div class="mainButton">
                    <input
                      type="button"
                      :class="{ isActiveBtn: isActive }"
                      value="勘察成果审查"
                      ref="explorationBtn"
                      @click="activeBtn(0)"
                    /><input
                      :class="{ isActiveBtn: !isActive }"
                      type="button"
                      ref="examineBtn"
                      @click="activeBtn(1)"
                      value="施工图审查"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>
      </div>
    </el-header>
    <el-main>
      <div class="main workarea moveIn">
        <div class="footerButton">
          <transition name="fade">
            <div
              class="main workarea moveIn"
              style="display: block;min-height: auto;margin-top: -5px;"
              v-if="menuState == 1"
            >
              <div id="dvWorkInfoView" class="editInfo validatePanel">
                <div class="dvLogin">
                  <ul>
                    <li @click="goToLogin(0)">
                      <div>
                        <a>
                          <img :src="jsdw" />
                          <h3>建设单位登录</h3>
                          <p>业务申办</p>
                        </a>
                      </div>
                    </li>
                    <li @click="goToLogin(1)">
                      <div>
                        <a>
                          <img :src="sjdw" />
                          <h3>勘察(劳务)单位登录</h3>
                          <p>
                            上传图纸，整改回复
                            <br />使用经办人手机号码登录
                          </p>
                        </a>
                      </div>
                    </li>
                    <li @click="goToLogin(2)">
                      <div>
                        <a>
                          <img :src="stjg" />
                          <h3>勘察审图机构登录</h3>
                          <p>收件受理、任务指派、图纸审查</p>
                        </a>
                      </div>
                    </li>
                    <li @click="goToLogin(3)">
                      <div>
                        <a>
                          <img :src="glbm" />
                          <h3>主管部门登录</h3>
                          <p>了解分析监管审图业务情况</p>
                        </a>
                      </div>
                    </li>
                    <li></li>
                  </ul>
                </div>
                <div style="text-align: center;">
                  <a
                    href="http://szst-gc.sczwfw.gov.cn/pdfseal/Ukey%20%E5%AE%A2%E6%88%B7%E7%AB%AF%20v1.24.exe"
                    >国脉电子签章客户端下载</a
                  >
                </div>
              </div>
            </div>
          </transition>
          <transition name="fade">
            <div
              class="main workarea moveIn"
              style="display: block;min-height: auto;margin-top: -5px;"
              v-if="menuState == 2"
            >
              <div id="dvWorkInfoView" class="editInfo validatePanel">
                <div class="dvLogin">
                  <ul>
                    <li>
                      <div>
                        <a
                          href="http://szst-gc.sczwfw.gov.cn/router.ashx?method=goOAuthSiChuan&amp;loginType=%E5%BB%BA%E8%AE%BE%E5%8D%95%E4%BD%8D"
                        >
                          <img :src="jsdw" />
                          <h3>建设单位登录</h3>
                          <p>业务申办</p>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <a
                          href="http://szst-gc.sczwfw.gov.cn/router.ashx?method=goOAuthSiChuan&amp;loginType=%E8%AE%BE%E8%AE%A1%E5%8D%95%E4%BD%8D"
                        >
                          <img :src="sjdw" />
                          <h3>设计单位登录</h3>
                          <p>
                            上传图纸，整改回复
                            <br />使用经办人手机号码登录
                          </p>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <a
                          href="http://szst-gc.sczwfw.gov.cn/router.ashx?method=goOAuthSiChuan&amp;loginType=%E5%AE%A1%E5%9B%BE%E5%8D%95%E4%BD%8D"
                        >
                          <img :src="stjg" />
                          <h3>施工图审图机构登录</h3>
                          <p>收件受理、任务指派、图纸审查</p>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <a href="http://59.225.209.241/zwlogin.jsp">
                          <img :src="glbm" />
                          <h3>主管部门登录</h3>
                          <p>了解分析监管审图业务情况</p>
                        </a>
                      </div>
                    </li>
                    <li></li>
                  </ul>
                </div>
                <div style="text-align: center;">
                  <a
                    href="http://szst-gc.sczwfw.gov.cn/pdfseal/Ukey%20%E5%AE%A2%E6%88%B7%E7%AB%AF%20v1.24.exe"
                    >国脉电子签章客户端下载</a
                  >
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </el-main>
    <el-footer height="150">
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
import { validUsername } from "@/utils/validate";
import { goToLogin } from "../../utils/laborRouter";

export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("用户名错误"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error("密码错误"));
      } else {
        callback();
      }
    };
    return {
      menuState: 1,
      isActive: true,
      jsdw: require("../../assets/css/images/jsdw.png"),
      sjdw: require("../../assets/css/images/sjdw.png"),
      stjg: require("../../assets/css/images/stjg.png"),
      glbm: require("../../assets/css/images/glbm.png"),
      loginForm: {
        username: "admin0",
        password: "admin"
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      },
      loading: false,
      leftbottonColor: null,
      rightbottonColor: "grayscale(1)",
      passwordType: "password",
      redirect: undefined,
      examineImgClose:
        "url(" + require("../../assets/examineImgClose.png") + ")",
      examineImg: "url(" + require("../../assets/examineImg.png") + ")",
      designImg: "url(" + require("../../assets/designImg.png") + ")",
      competentImg: "url(" + require("../../assets/competentImg.png") + ")",
      explorationImgClose:
        "url(" + require("../../assets/explorationImgClose.png") + ")",
      explorationImg: "url(" + require("../../assets/explorationImg.png") + ")",
      constructionImg:
        "url(" + require("../../assets/constructionImg.png") + ")",
      explorationImage: "url(" + require("../../assets/exploration.png") + ")",
      examineImage: "url(" + require("../../assets/examine2.png") + ")",
      logo_s_new_logo: require("../../assets/logo_s_new_logo.png"),
      tuichu_page: require("../../assets/tuichu_page.png"),
      weixin_k: require("../../assets/weixin_k.png"),
      gcjssousuo: require("../../assets/gcjssousuo.png"),
      phone: require("../../assets/phone.png"),
      foot_bg: require("../../assets/foot-bg.png"),
      foot_police: require("../../assets/foot-police.png"),
      banner: require("../../assets/banner.png")
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType == "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    activeBtn(num) {
      if (num == 0) {
        this.menuState = 1;
        this.leftbottonColor = "";
        this.rightbottonColor = "grayscale(1)";
        this.isActive = true;
      } else {
        this.menuState = 2;
        this.leftbottonColor = "grayscale(1)";
        this.rightbottonColor = "";
        this.isActive = false;
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // this.loading = true;
          // this.$store
          //   .dispatch('user/login', this.loginForm)
          //   .then(() => {
          //     // this.$router.replace({ path: this.redirect || '/' });
          //     this.$router.replace({ path: '/' });
          //     this.loading = false;
          //   })
          //   .catch(() => {
          //     this.loading = false;
          //     new Error('用户名或密码错误');
          //   });
          if (this.loginForm.username == "admin0") {
            // 建设单位
            return this.$router.replace({ path: "/construction/process" });
          } else if (this.loginForm.username == "admin1") {
            // 勘察单位
            return this.$router.replace({ path: "/exploration/Exploration" });
          } else if (this.loginForm.username == "admin2") {
            // 审图机构
            return this.$router.replace({ path: "/examine/examineprocess" });
          } else if (this.loginForm.username == "admin3") {
            // 审核员
            return this.$router.replace({ path: "/examine/examineuser" });
          } else if (this.loginForm.username == "admin4") {
            // 行业主管部门
            return this.$router.replace({ path: "/construction/manage" });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    goToLogin(index) {
      goToLogin(index);
    },
    // 审核员
    todesign() {
      sessionStorage.setItem("sysUserId", "admin3");
      const item = sessionStorage.getItem("massage");
      // console.log(    JSON.parse(item)[0].progress)
      if (!item || JSON.parse(item)[0].progress == 1) {
        this.$router.push("/examine/examineuser");
      } else if (JSON.parse(item)[0].progress == 2) {
        this.$router.push({ path: "/secondCheck/secondCheckProcess" });
      } else if (JSON.parse(item)[0].progress == 3) {
        this.$router.push({ path: "finallyExamine/finallyProcess" });
      } else if (JSON.parse(item)[0].progress == 4) {
        this.$router.push({ path: "finallyExamine/wordReport" });
      }
    }
  }
};
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #fff;
$light_gray: #454545;
$cursor: #454545;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../../styles/index.scss";
$bg: #fff;
$dark_gray: #454545;
$light_gray: #000;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 35px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    .form-item {
      border: 1px solid #409eff;
      border-radius: 5px;
      color: #454545;
      margin-top: 24px;
    }
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
.main {
  min-height: auto;
  margin-top: -5px;
  width: 1200px;
  margin: 0 auto;
}
.mainButton {
  position: relative;
  left: 0;
  bottom: 0;
  cursor: pointer;
  margin-top: 20px;
  text-align: left;
  .isActiveBtn {
    cursor: pointer;
    color: #303133;
    background-color: white;
    box-shadow: none;
  }
  input {
    letter-spacing: 2px;
    font-weight: bold;
    padding: 0 20px;
    border: 0;
    cursor: pointer;
    outline: none;
    line-height: 60px;
    // width: 300px;
    font-size: 20px;
    font-weight: 800;
    color: white;
    background-color: #3f536e;
  }
}
.footerButton {
  text-align: center;
  width: 1200px;
  // margin-top: 100px;
  display: flex;
  .childrenLeft {
    position: relative;
    width: 600px;
    height: 400px;
    border-right: 1px solid gray;
  }
  .childrenRight {
    position: relative;
    width: 600px;
    height: 400px;
  }
}
.exlpianText {
  position: absolute;
  width: 300px;
  height: 300px;
  top: 40%;
  left: 50%;
  margin-left: -150px;
  margin-top: -150px;
  box-shadow: 1px 1px 5px 5px rgba(216, 216, 216, 0.616);
  border-radius: 30px;
  span {
    line-height: 40px;
    font-size: 20px;
    display: block;
    text-align: center;
  }
}
.firstSpan {
  color: white;
  margin-bottom: 20px;
  background: rgba(19, 100, 183);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}
.connectLine {
  height: 96px;
  background-size: 100% 100%;
}
// 迁移
body {
  margin: 0;
  font-family: "微软雅黑", "宋体", Helvetica, Arial, sans-serif, "myfont";
  font-size: 16px;
  line-height: 1.6em;
  color: #45484b;
  background-color: #fff;
  overflow: auto;
  height: 100%;
}
.validatePanel {
  position: relative;
}
.dvLogin img {
  width: 100%;
  height: 100%;
}
.dvLogin > ul {
  margin: 0 auto;
  height: 280px;
  display: flex;
  width: 1500px;
  justify-content: space-around;
}
.h1Wraper p {
  font-size: 26px;
  line-height: 1.6em;
}
ul {
  list-style: none;
  margin: auto;
  padding: 0;
}
.dvLogin {
  text-align: center;
  top: 0;
  padding-top: 50px;
  overflow: hidden;
  height: 400px;
}
.dvLogin li {
  width: 500px;
  height: 100%;
  text-align: center;
  padding: 0;
  color: #fff;
  transition: all 0.5s;
  box-shadow: 0 0 20px rgba(9, 41, 77, 0.12);
  border: 1px solid #aaa;
  display: inline-block;
}
.dvLogin li {
  color: #555;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 4px;
}

.dvLogin li:hover {
  color: #fff;
  background-color: #3e97df;
  transform: scale(1.1);
}

.dvLogin li:hover img {
  background-color: #3e97df;
}
.dvLogin li h3 {
  font-size: 1.1em;
  margin-top: 0.8em;
}

.dvLogin li p {
  padding: 0;
  margin: 0.2em 0;
  text-align: center;
}

.dvLogin li img {
  border-radius: 4px 4px 0 0;
}

.img_mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.45;
  background: #09294d;
  z-index: 1;
}

.backanimt {
  animation: background 9s infinite alternate ease-in-out;
  width: 100%;
}

@keyframes background {
  from {
    background: url(/css/images/banner6.jpg) no-repeat center -80px;
  }
  /*30% {*/
  /*    background: url(/css/images/banner2.jpg) no-repeat center bottom;*/
  /*}*/
  to {
    background: url(/css/images/banner7.jpg) no-repeat center -80px;
  }
}

@media screen and (max-width: 1000px) {
  body {
    width: 100%;
  }

  .workarea {
    margin: 0;
  }

  .h1Wraper p {
    font-size: 20px;
  }
}
.bgClass {
  background-image: url("../../assets/login-banner.jpg");
  background-position: 100% 100%;
  width: 100%;
  // height: 230px;
  position: relative;
  margin: 0 auto;
  // padding-bottom: 100px;
}
.ewm {
  position: relative;
  text-align: center;
  vertical-align: middle;
  float: right;
  margin-top: 20px;
  color: #4f8cee;
}
.fr {
  color: #055ec3;
  font-size: 16px;
}
#yidongduan_a {
  float: right;
  margin-top: 18px;
  margin-right: 15px;
}

#kill_oppo {
  position: absolute;
  display: none;
  margin-left: -40px;
  margin-top: 10px;
  z-index: 999;
}
#weixin_a {
  float: right;
  margin: 0 20px;
  margin-top: 18px;
  height: 21px;
}
#trick_bat {
  position: absolute;
  display: none;
  margin-left: -40px;
  margin-top: 10px;
  z-index: 999;
}
.heras {
  height: 90px;
}
.huidao_shouye {
  cursor: pointer;
}
.huidao_shouye img {
  vertical-align: middle;
  width: 268px;
}
.header {
  border: none;
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transition: opacity;
}
.headerH1Text {
  // text-align: center;
  color: white;
  padding-top: 25px;
  text-shadow: 10px #444;
  width: 1200px;
  margin: 0 auto;
  h1 {
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    font-size: 48px;
    letter-spacing: 10px;
    line-height: 50px;
    border: 0;
    text-align: left;
    margin: 38px 0;
    padding-left: 100px;
  }
  span {
    letter-spacing: 10px;
    margin: 10px 0;
    display: block;
    font-size: 25px;
    padding-left: 100px;
  }
}
</style>
