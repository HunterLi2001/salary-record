"use strict";
var common_vendor = require("../../common/vendor.js");
var item = [
  "\u4E94\u9669\u4E00\u91D1\u67E5\u8BE2\u65B9\u5F0F",
  "\u4E94\u9669\u4E00\u91D1\u7684\u4F7F\u7528",
  "\u5404\u57CE\u5E02\u4E94\u9669\u4E00\u91D1\u7F34\u7EB3\u6BD4\u4F8B",
  "\u4E2A\u4EBA\u6240\u5F97\u7A0E\u76F8\u5173\u653F\u7B56",
  "\u51CF\u514D\u7A0E\u7533\u62A5\u6761\u4EF6"
];
const _sfc_main = {
  onShareAppMessage(res) {
    if (res.from === "button") {
      console.log(res.target);
    }
    return {
      title: "\u81EA\u5B9A\u4E49\u5206\u4EAB\u6807\u9898",
      path: "/pages/test/test?id=123"
    };
  },
  setup() {
    const content = common_vendor.reactive(item);
    const enterProfessional = (target) => {
      common_vendor.index.navigateTo({
        url: `../Professional/Professional/Professional?target=${target}`
      });
    };
    function enter() {
      common_vendor.index.navigateTo({
        url: "#"
      });
    }
    return {
      content,
      enterProfessional,
      enter
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $setup.enter && $setup.enter(...args)),
    b: common_vendor.o(($event) => $setup.enterProfessional(1)),
    c: common_vendor.o(($event) => $setup.enterProfessional(2)),
    d: common_vendor.f($setup.content, (item2, k0, i0) => {
      return {
        a: common_vendor.t(item2)
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-57280228"]]);
_sfc_main.__runtimeHooks = 2;
tt.createPage(MiniProgramPage);
