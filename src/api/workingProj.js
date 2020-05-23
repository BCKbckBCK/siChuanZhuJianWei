import request from "@/utils/request";
import axios from "axios";

//现场作业记录
export const saveWorkRecord = data => {
  return request({
    url: "/inEngineering/doEditSiteOperation",
    method: "post",
    data
  });
};

//编辑工程信息
export const doEditContract = data => {
  return request({
    url: "/inEngineering/doEditContract",
    method: "post",
    data
  });
};

//fileId 下载报告文件
export const downloadFile = params => {
  return request({
    url: "/inEngineering/download/" + params,
    method: "get",
    responseType: "blob"
  });
  // .then(response => {
  //   const url = window.URL.createObjectURL(new Blob([response.data]));
  //   const link = document.createElement("a");
  //   let fname = "report.pdf";
  //   link.href = url;
  //   link.setAttribute("download", fname);
  //   document.body.appendChild(link);
  //   link.click();
  // });
};

export const download = (url, fileName, successCallback, errorCallback) => {
  var val = {},
    objectUrl,
    isUrlConnect,
    data = JSON.stringify(val),
    oAjax = new XMLHttpRequest();
  oAjax.responseType = "blob";
  isUrlConnect = url.indexOf("?") === -1 ? "?" : "&";
  oAjax.open(
    "GET",
    process.env.VUE_APP_BASE_API + url + isUrlConnect + "_=" + Date.now(),
    true
  );
  oAjax.setRequestHeader("Content-type", "application/json");
  oAjax.onreadystatechange = function() {
    if (
      oAjax.readyState === 4 &&
      ((oAjax.status >= 200 && oAjax.status < 300) || oAjax.status == 304)
    ) {
      var blob = oAjax.response;
      var URL = window.URL || window.webkitURL;
      blob = new Blob([blob], { type: "application/pdf" });
      objectUrl = URL.createObjectURL(blob);
      // download Fn
      // var a = document.createElement("a");
      // a.href = objectUrl;
      // a.download = decodeURI(fileName, "utf-8");
      // document.body.appendChild(a);
      // a.click();
      // a.remove();
      if (successCallback) {
        setTimeout(function() {
          successCallback(objectUrl);
        }, 1500);
      }
    } else {
      var statusText = oAjax.statusText;
      var statusCode = oAjax.status;
      if (statusCode === "401") {
        //  apiError.unauthorized();
      }
      if (statusText.toLocaleLowerCase() !== "ok") {
        errorCallback && errorCallback(new Error(statusText));
      }
    }
  };
  oAjax.send(data);
};

// 上传
export const uploadFileReport = data => {
  let instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000,
    headers: { "Content-Type": "multipart/form-data" }
  });
  let url =
    "/inEngineering/uploadFileReport?eCode=" +
    data.eCode +
    "&fileReportName=" +
    data.fileReportName;
  let formData = new FormData();
  formData.append("fileName", data.fileName);
  return instance.post(url, formData);
};

// ecode 拿取工程信息
export const getWorkingDetail = eCode => {
  return request({
    url: "/inEngineering/viewDetails/" + eCode,
    method: "get"
  });
};
