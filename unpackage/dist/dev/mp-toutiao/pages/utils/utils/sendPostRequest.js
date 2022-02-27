"use strict";
var common_vendor = require("../../../common/vendor.js");
function sendPostRequest(route, data, callBackFn, isShowModal) {
  common_vendor.index.request({
    url: "/api" + route,
    method: "POST",
    data,
    success(data2) {
      callBackFn.success(data2);
    },
    fail(error) {
      callBackFn.fail(error);
      isShowModal ? common_vendor.index.showModal({
        content: "\u8BF7\u6C42\u5931\u8D25\uFF01\u9519\u8BEF\u4EE3\u7801\u4E3A\uFF1A" + error.errMsg,
        showCancel: false
      }) : console.log(0);
    }
  });
}
exports.sendPostRequest = sendPostRequest;
