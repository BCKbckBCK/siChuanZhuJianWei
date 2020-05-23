import request from "@/utils/request";
// 勘察单位  工程列表
export const list = data => {
  return request({
    url: "/survey/list",
    method: "post",
    data
  });
};
// 勘察单位  指派劳务单位
export const chooseLabor = data => {
  return request({
    url: "/survey/chooseLabor",
    method: "post",
    data
  });
};
// 勘察单位  查询劳务单位列表
export const companyList = data => {
  return request({
    url: "/survey/companyList",
    method: "post",
    data
  });
};
// 勘察单位  工程合同信息编辑
export const doEditContract = data => {
  return request({
    url: "/survey/doEditContract",
    method: "post",
    data
  });
};

// 勘察单位  更新现场作业
export const doEditSiteOperation = data => {
  return request({
    url: "/survey/doEditSiteOperation",
    method: "post",
    data
  });
};

// 勘察单位  选择人员信息列表
export const personList = data => {
  return request({
    url: "/survey/personList",
    method: "post",
    data
  });
};
