import request from "@/utils/request";

// 项目受理
export const acceptance = ecode => {
  return request({
    url: "/processFlow/acceptance/" + ecode,
    method: "get"
  });
};

// 撤销审查
export const revokeCheck = ecode => {
  return request({
    url: "/processFlow/revokeCheck/" + ecode,
    method: "get"
  });
};
// 提交审核
export const submitReview = ecode => {
  return request({
    url: "/processFlow/submitReview/" + ecode,
    method: "get"
  });
};
