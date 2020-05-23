import request from "@/utils/request";
// 搜索框查询
export const doSearch = data => {
  return request({
    url: "/engineering/doSearch",
    method: "post",
    data
  });
};

// 查询工程列表
export const getList = data => {
  return request({
    url: "/construction/list",
    method: "post",
    data
  });
};

//验证是否有勘察合同
export const checkContract = code => {
  return request({
    url: "/project/checkContract?projectCode=" + code,
    method: "get"
  });
};

// 项目统一代码验证
export const codeVerify = code => {
  return request({
    url: "/project/listByCode/?companyCode=" + code,
    method: "get"
  });
};

// 新建项目
export const doAdd = data => {
  return request({
    url: "/engineering/doAdd",
    method: "post",
    data
  });
};

//查询勘察单位列表
export const getExplorationLabor = data => {
  return request({
    url: "project/companyList",
    method: "post",
    data
  });
};
// 选择勘察单位
export const chooseCompany = data => {
  return request({
    url: "/project/chooseCompany",
    method: "post",
    data
  });
};
