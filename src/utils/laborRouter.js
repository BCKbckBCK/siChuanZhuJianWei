const remote_api = process.env.VUE_APP_REMOTE_API;
const redirect_uri = process.env.VUE_APP_REDIRECT_URI;
export const getPath = () => {
  let path = "",
    adminId = sessionStorage.getItem("sysUserId");
  if (adminId == "admin0") {
    path = "construction/process";
  } else if (adminId == "admin1") {
    path = "Exploration/Exploration";
  } else if (adminId == "admin2") {
    path = "examine/examineprocess";
  } else if (adminId == "admin3") {
    path = "construction/manage";
  }
  return "#/" + path;
};

export const goToLabor = function(adminId) {
  let path = "";
  if (adminId == "admin0") {
    path = "construction/process";
  } else if (adminId == "admin1") {
    path = "Exploration/Exploration";
  } else if (adminId == "admin2") {
    path = "examine/examineprocess";
  } else if (adminId == "admin3") {
    path = "construction/manage";
  }
  return path;
};

export const goToLogin = index => {
  if (index === 0) {
    sessionStorage.setItem("sysUserId", "admin0");
  } else if (index == 1) {
    sessionStorage.setItem("sysUserId", "admin1");
  } else if (index == 2) {
    sessionStorage.setItem("sysUserId", "admin2");
  } else if (index == 3) {
    sessionStorage.setItem("sysUserId", "admin3");
  }

  if (process.env.NODE_ENV == "development") {
    window.location.href = "http://" + window.location.host + "/";
  } else {
    window.location.href =
      remote_api +
      "/open-platform-exchange/exchange/getResource?resourceCode=ZYZC2019112500000198&applyCode=YYSQ2020041300000836&sysCode=0003&response_type=code&client_id=00PD&scope=oauth_info&redirect_uri=" +
      encodeURIComponent("http://" + redirect_uri + "/" + getPath()) +
      "&code=1";
  }
};

export const againLogin = function(callback) {
  if (process.env.NODE_ENV == "development") {
    let restr = {
      success: true,
      code: "OK",
      message: "成功获得数据",
      data: {
        type: "user",
        dataInfo: {
          legalBase: null,
          naturalBase: {
            uuid: "89df476f6f4ae57b199ca6f19c628945",
            nodeStatus: "VALID"
          },
          real: {
            realName: "唐靖",
            address: "四川",
            sex: "男",
            birth: "19931221",
            idNumber: "511322199312211058"
          },
          staffBase: null
        }
      }
    };

    callback(restr);
  } else {
    if (sessionStorage.getItem("open-platform-oauth") == "1") {
      let sysUserId = sessionStorage.getItem("sysUserId");
      if (!!sysUserId == false) return;
      window.location.href =
        remote_api +
        "/open-platform-exchange/exchange/getResource?resourceCode=ZYZC2019112500000198&applyCode=YYSQ2020041300000836&sysCode=0003&response_type=code&client_id=00PD&scope=oauth_info&redirect_uri=" +
        encodeURIComponent("http://" + redirect_uri + "/" + getPath()) +
        "&code=1";
    } else {
      sessionStorage.setItem("open-platform-oauth", "1");
      window.location.href =
        remote_api +
        "/open-platform-oauth/oauth/authorize?client_id=0003&scope=user_info&code=1&response_type=code&redirect_uri=" +
        remote_api +
        "/open-platform-exchange/exchange/getResource?resourceCode=ZYZC2020050400009072%26applyCode=YYSQ2020050400000883%26sysCode=0003";
    }
  }
};

export const getSysUser = feild => {
  let sysMessage = sessionStorage.getItem("sysMessage");
  if (sysMessage) {
    let sysUser = JSON.parse(sysMessage);
    return sysUser[feild];
  } else {
    return "";
  }
};

export const redirectAfterLogin = referrer => {
  let sysUserId = sessionStorage.getItem("sysUserId");
  if (!!sysUserId == false) return;
  if (!!referrer == true) {
    let sso = referrer.split("?")[0].toLowerCase();
    if (sso == "http://rzsc.sczwfw.gov.cn/sso.action") {
      window.location.href =
        remote_api +
        "/open-platform-exchange/exchange/getResource?resourceCode=ZYZC2019112500000198&applyCode=YYSQ2020041300000836&sysCode=0003&response_type=code&client_id=00PD&scope=oauth_info&redirect_uri=" +
        encodeURIComponent("http://" + redirect_uri + "/" + getPath()) +
        "&code=1";
    }
  }
};
