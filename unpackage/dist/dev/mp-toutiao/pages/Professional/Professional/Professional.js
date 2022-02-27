"use strict";
var common_vendor = require("../../../common/vendor.js");
const data$1 = [
  {
    id: 1,
    name: "\u817E\u8BAF"
  },
  {
    id: 2,
    name: "\u767E\u5EA6"
  },
  {
    id: 3,
    name: "\u7F8E\u56E2"
  },
  {
    id: 4,
    name: "\u534E\u4E3A"
  },
  {
    id: 5,
    name: "\u5B57\u8282\u8DF3\u52A8"
  },
  {
    id: 6,
    name: "\u963F\u91CC\u5DF4\u5DF4"
  },
  {
    id: 7,
    name: "\u79D1\u5927\u8BAF\u98DE"
  }
];
var ordinary_list = {
  data: data$1
};
const data = [
  {
    id: 1,
    name: "\u6296\u97F3"
  },
  {
    id: 2,
    name: "\u5FEB\u624B"
  },
  {
    id: 3,
    name: "\u7F8E\u56E2"
  },
  {
    id: 4,
    name: "B\u7AD9"
  },
  {
    id: 5,
    name: "\u6EF4\u6EF4"
  },
  {
    id: 6,
    name: "\u997F\u4E86\u4E48"
  }
];
var emerging_list = {
  data
};
const _sfc_main = {
  props: {
    target: String
  },
  setup(props) {
    console.log(props, props.target);
    const tabStatus = common_vendor.ref(parseInt(props.target));
    const changeTab = (target) => {
      tabStatus.value = target;
      loadingList();
    };
    const showCollapse = common_vendor.ref(false);
    const closeCollapse = () => {
      showCollapse.value = false;
      console.log(showCollapse.value);
    };
    const openCollapse = () => {
      showCollapse.value = true;
      console.log(showCollapse.value);
    };
    const inputValue = common_vendor.ref("");
    const showList = common_vendor.ref(true);
    const changeList = () => {
      showList.value = !showList.value;
    };
    function selectHotOptions(list) {
      loadingList();
      for (let key in common_vendor.toRaw(moreList.value)) {
        if (moreList.value[key].id === list) {
          search(moreList.value[key].name);
        }
      }
    }
    const moreList = common_vendor.reactive({});
    const ordinaryList = common_vendor.reactive(ordinary_list);
    const emergingList = common_vendor.reactive(emerging_list);
    function loadingList() {
      moreList.value = tabStatus.value === 1 ? common_vendor.toRaw(ordinaryList.data) : common_vendor.toRaw(emergingList.data);
    }
    const search = (value) => {
      console.log(value);
      common_vendor.index.navigateTo({
        url: (tabStatus.value === 1 ? "../searchDetail/Ordinary/ordinary" : "../searchDetail/Emerging/Emerging") + "?tabStatus=" + tabStatus.value + "&inputValue=" + (value === "prefix" ? inputValue.value : value)
      });
    };
    return {
      loadingList,
      inputValue,
      search,
      selectHotOptions,
      tabStatus,
      changeList,
      showList,
      moreList,
      ordinaryList,
      emergingList,
      changeTab,
      showCollapse,
      closeCollapse,
      openCollapse
    };
  }
};
if (!Array) {
  const _easycom_uni_collapse_item2 = common_vendor.resolveComponent("uni-collapse-item");
  const _easycom_uni_collapse2 = common_vendor.resolveComponent("uni-collapse");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  (_easycom_uni_collapse_item2 + _easycom_uni_collapse2 + _easycom_uni_easyinput2)();
}
const _easycom_uni_collapse_item = () => "../../../uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.js";
const _easycom_uni_collapse = () => "../../../uni_modules/uni-collapse/components/uni-collapse/uni-collapse.js";
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  (_easycom_uni_collapse_item + _easycom_uni_collapse + _easycom_uni_easyinput)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $setup.tabStatus === 1 ? 1 : "",
    b: common_vendor.o(($event) => $setup.changeTab(1)),
    c: $setup.tabStatus === 2 ? 1 : "",
    d: common_vendor.o(($event) => $setup.changeTab(2)),
    e: $setup.tabStatus === 2
  }, $setup.tabStatus === 2 ? {
    f: common_vendor.o((...args) => $setup.closeCollapse && $setup.closeCollapse(...args)),
    g: common_vendor.o((...args) => $setup.openCollapse && $setup.openCollapse(...args)),
    h: common_vendor.p({
      ["title-border"]: "none",
      border: false,
      ["show-arrow"]: false,
      open: $setup.showCollapse
    })
  } : {}, {
    i: common_vendor.o($setup.search),
    j: common_vendor.o(($event) => $setup.inputValue = $event),
    k: common_vendor.p({
      placeholder: "\u8BF7\u8F93\u5165\u516C\u53F8\u540D\u79F0/\u57CE\u5E02/\u5C97\u4F4D",
      prefixIcon: "search",
      modelValue: $setup.inputValue
    }),
    l: $setup.showList
  }, $setup.showList ? {
    m: common_vendor.f($setup.tabStatus === 1 ? $setup.ordinaryList.data : $setup.emergingList.data, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: item.id,
        c: common_vendor.o(($event) => $setup.selectHotOptions(item.id))
      };
    }),
    n: common_vendor.f(20, (n, k0, i0) => {
      return {
        a: n
      };
    })
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-20eca980"]]);
tt.createPage(MiniProgramPage);
