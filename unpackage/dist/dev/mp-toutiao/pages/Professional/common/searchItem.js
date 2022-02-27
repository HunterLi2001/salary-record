"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    detail: Object,
    type: Number
  },
  setup(props) {
    const imformation = common_vendor.reactive({
      com_name: props.detail.company,
      com_address: props.detail.city.cityName,
      pos_name: props.detail.post,
      pos_salary: props.detail.salary,
      credibility: props.detail.credibility,
      quantity: 0,
      release_time: props.detail.createTime
    });
    const enterDetail = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Professional/professionalDetail/professionalDetail?type=" + props.type + "&id=" + props.detail.id
      });
    };
    return {
      enterDetail,
      imformation
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($setup.imformation.com_name),
    b: common_vendor.t($setup.imformation.com_address),
    c: common_vendor.t($setup.imformation.pos_name),
    d: common_vendor.t($setup.imformation.pos_salary),
    e: common_vendor.t($setup.imformation.credibility),
    f: common_vendor.t($setup.imformation.quantity),
    g: common_vendor.t($setup.imformation.release_time),
    h: common_vendor.o((...args) => $setup.enterDetail && $setup.enterDetail(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-43b3d620"]]);
tt.createComponent(Component);
