import request from "@/utils/request";

export const login = params => {
  return request({
    url: "/auth/login/" + params,
    method: "get"
  });
};
export const addPersonInfo = data => {
  return request({
    url: "/personnel/doAdd",
    method: "post",
    data
  });
};
export const deletePersonInfo = path => {
  return request({
    url: "/personnel/doDelete/" + path,
    method: "get"
  });
};
export const doAddList = data => {
  return request({
    url: "/personnel/doAddList",
    method: "post",
    data
  });
};

export const doPersonList = params => {
  return request({
    url: "/construction/personList?projectCode=" + params.projectCode,
    method: "get"
  });
};
