import request from "@/utils/request";
import axios from "axios";

export const getUserInfoByToken = data => {
  return request({
    url: "/user/getUserInfoByToken?token=" + data,
    method: "get"
  });
};

export const getUserInfoByCode = data => {
  return request({
    url:
      "/user/getUserInfoByCode?code=" +
      data.code +
      "&redirectUrl=" +
      data.redirectUrl,
    method: "get"
  });
};
