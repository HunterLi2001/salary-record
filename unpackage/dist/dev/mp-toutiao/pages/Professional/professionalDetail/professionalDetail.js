"use strict";
var common_vendor = require("../../../common/vendor.js");
var pages_utils_utils_sendPostRequest = require("../../utils/utils/sendPostRequest.js");
const _sfc_main = {
  props: {
    type: String,
    id: String
  },
  setup(props) {
    common_vendor.onMounted(() => {
      search();
    });
    console.log(props);
    const type = common_vendor.reactive(props.type);
    const id = common_vendor.ref(props.id);
    function search() {
      pages_utils_utils_sendPostRequest.sendPostRequest(type.value === 1 ? "/showDetail/getNormalWork" : "/showDetail/getNewWork", id.value, {
        success(data) {
          console.log(data);
          operateData(data);
        },
        fail() {
        }
      }, true);
    }
    function operateData(data) {
      detailData.pos_name = data.data.post;
      detailData.pos_salary = data.data.salary;
      detailData.com_address = data.data.city.cityName;
      detailData.education = data.data.degree.degreeName;
      detailData.pos_type = data.data.type.typeName;
      detailData.com_name = data.data.company;
      detailData.release_time = data.data.createTime;
      detailData.explain = data.data.explain;
    }
    const detailData = common_vendor.reactive({
      pos_name: null,
      pos_salary: null,
      com_address: null,
      education: null,
      pos_type: null,
      com_name: null,
      release_time: null,
      explain: null
    });
    return {
      type,
      id,
      search,
      operateData,
      detailData
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($setup.detailData.pos_name),
    b: common_vendor.t($setup.detailData.pos_salary),
    c: common_vendor.t($setup.detailData.com_address),
    d: common_vendor.t($setup.detailData.education),
    e: common_vendor.t($setup.detailData.pos_type),
    f: common_vendor.t($setup.detailData.com_name),
    g: common_vendor.t($setup.detailData.release_time),
    h: common_vendor.t(1),
    i: common_vendor.t(0),
    j: common_vendor.t($setup.detailData.explain)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a9323b40"]]);
tt.createPage(MiniProgramPage);
