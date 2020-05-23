<template>
  <div id="app">
    <router-view v-if="canRender" />
  </div>
</template>
<script>
import { getUserInfoByCode } from "@/api/token";
import { getQueryString } from "@/utils/utils";
import {
  goToLabor,
  againLogin,
  getSysUser,
  redirectAfterLogin,
  getPath
} from "@/utils/laborRouter";

export default {
  name: "App",
  data() {
    return {
      message: "",
      referrer: "",
      sysUserId: "",
      code: "",
      canRender: true
    };
  },
  created() {
    console.info("Version:202005061752");
    console.info(sessionStorage.getItem("sysUserId"));
    // redirectAfterLogin(document.referrer);
    if (this.setSysUserId()) {
      this.canRender = false;
      this.setSysReferrer();
      this.setSysCode();
      if (this.usedCode(this.code) == true) {
        againLogin(res => {
          this.setSysMessage(res);
          this.canRender = true;
          this.goToLabor();
        });
      } else {
        let params = {
          code: this.code,
          redirectUrl: encodeURIComponent(
            "http://" + process.env.VUE_APP_REDIRECT_URI + "/" + getPath()
          )
        };
        getUserInfoByCode(params)
          .then(res => {
            this.setSysMessage(res);
            console.log("canRender");
            this.canRender = true;
          })
          .catch(error => {
            console.log("error:" + error);
          });
      }
    }
  },
  methods: {
    setSysMessage(res) {
      let _d = res.data;
      console.log("_d" + JSON.stringify(_d));
      this.message =
        '{"userType":"","userId":"","companyCode":"","companyName":"" ,"userName":""}';
      if (!!_d.dataInfo.naturalBase == true) {
        this.message =
          '{"userType":"' +
          _d.type +
          '","userId":"' +
          _d.dataInfo.naturalBase.uuid +
          '","companyCode":"","companyName":"" ,"userName":"' +
          _d.dataInfo.real.realName +
          '"}';
      } else if (!!_d.dataInfo.legalBase == true) {
        this.message =
          '{"userType":"' +
          _d.type +
          '","userId":"' +
          _d.dataInfo.legalBase.currentPerson_info.uuid +
          '","companyCode":"' +
          _d.dataInfo.legalBase.socialCreditCode +
          '","companyName":"' +
          _d.dataInfo.legalBase.deptName +
          '","userName":"' +
          _d.dataInfo.legalBase.deptPerson +
          '" }';
      }

      console.log("用户信息=", this.message);
      sessionStorage.setItem("sysMessage", this.message);
    },
    setSysCode() {
      this.code = getQueryString("code");
      console.log("登录编码=", this.code);
      sessionStorage.setItem("sysCode ", this.code);
    },
    setSysUserId() {
      this.sysUserId = sessionStorage.getItem("sysUserId");
      console.log("栏目编号=", this.sysUserId);
      return !!this.sysUserId;
    },
    setSysReferrer() {
      this.referrer = document.referrer;
      console.log("访问来源=", this.referrer);
      sessionStorage.setItem("sysReferrer", this.referrer);
    },
    goToLabor() {
      let path = goToLabor(this.sysUserId);
      if (path) this.$router.push(path);
    },
    usedCode(code) {
      if (!!code == false) return true;
      let list = localStorage.getItem("code-list");
      if (list) {
        let arr = list.split(",");
        if (arr.indexOf(code) == -1) {
          arr.push(code);
          if (arr.length > 30) {
            arr = arr.reverse();
            arr.length = 30;
            arr = arr.reverse();
          }
          localStorage.setItem("code-list", arr.join());
          return false;
        } else {
          return true;
        }
      }
      localStorage.setItem("code-list", code);
    }
  }
};
</script>
