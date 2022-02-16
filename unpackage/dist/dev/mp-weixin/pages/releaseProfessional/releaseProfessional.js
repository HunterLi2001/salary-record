"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_utils_utils = require("../utils/utils.js");
const _sfc_main = {
  setup() {
    const tabStatus = common_vendor.ref(1);
    const changeTab = (data) => {
      tabStatus.value = data;
    };
    const company = common_vendor.ref("");
    const showCollapse = common_vendor.ref(false);
    function openCollapse() {
    }
    function closeCollapse() {
    }
    const alternativeCompany = common_vendor.reactive([]);
    function quickShowInputCompany() {
      console.log(company.value);
      alternativeCompany.splice(0, alternativeCompany.length);
      switch (company.value) {
        case "\u963F":
        case "\u963F\u91CC":
          alternativeCompany.push("\u963F\u91CC\u5DF4\u5DF4");
          break;
        case "\u817E":
        case "\u817E\u8BAF":
          alternativeCompany.push("\u817E\u8BAF");
          break;
        case "\u534E":
          alternativeCompany.push("\u534E\u4E3A", "\u534E\u7855");
          break;
        case "\u5927":
          alternativeCompany.push("\u5927\u7586", "\u5927\u534E");
          break;
        case "\u79FB":
        case "\u79FB\u52A8":
          alternativeCompany.push("\u79FB\u52A8");
          break;
        case "\u5BCC":
        case "\u5BCC\u58EB":
          alternativeCompany.push("\u5BCC\u58EB\u5EB7");
          break;
        case "\u79D1":
        case "\u79D1\u5927":
          alternativeCompany.push("\u79D1\u5927\u8BAF\u98DE");
          break;
        case "\u4E2D":
          alternativeCompany.push("\u4E2D\u5174", "\u4E2D\u539F\u7535\u5B50", "\u4E2D\u82AF\u56FD\u9645");
          break;
        case "\u5C0F":
          alternativeCompany.push("\u5C0F\u7C73");
          break;
        case "\u5B57":
        case "\u5B57\u8282":
          alternativeCompany.push("\u5B57\u8282\u8DF3\u52A8");
          break;
        case "\u6EF4":
        case "\u6EF4\u6EF4":
          alternativeCompany.push("\u6EF4\u6EF4");
          break;
        case "\u4E2D\u539F":
          alternativeCompany.push("\u4E2D\u539F\u7535\u5B50");
          break;
        case "\u957F":
        case "\u957F\u6C5F":
          alternativeCompany.push("\u957F\u6C5F\u50A8\u5B58");
          break;
        case "\u6D77":
        case "\u6D77\u5EB7":
          alternativeCompany.push("\u6D77\u5EB7\u5A01\u89C6");
          break;
        case "\u7F8E":
          alternativeCompany.push("\u7F8E\u56E2", "\u7F8E\u7684");
          break;
        case "\u6C47":
          alternativeCompany.push("\u6C47\u5DDD");
          break;
        case "\u8363":
          alternativeCompany.push("\u8363\u8000");
          break;
        case "\u767E":
          alternativeCompany.push("\u767E\u5EA6");
          break;
        case "\u4EAC":
          alternativeCompany.push("\u4EAC\u4E1C");
          break;
        case "\u8054":
          alternativeCompany.push("\u8054\u5F71", "\u8054\u60F3");
          break;
        case "\u643A":
          alternativeCompany.push("\u643A\u7A0B");
          break;
        case "\u7F51":
          alternativeCompany.push("\u7F51\u6613");
          break;
        case "\u9E3F":
          alternativeCompany.push("\u9E3F\u6D77\u7CBE\u5BC6");
          break;
        case "\u8054":
          alternativeCompany.push("\u8054\u60F3");
          break;
        case "\u62FC":
        case "\u62FC\u591A":
          alternativeCompany.push("\u62FC\u591A\u591A");
          break;
        case "\u641C":
          alternativeCompany.push("\u641C\u72D0");
          break;
        case "\u65B0":
          alternativeCompany.push("\u65B0\u6D6A");
          break;
      }
    }
    const job = common_vendor.ref("");
    const city = common_vendor.ref("");
    const city_list = [
      {
        id: 1,
        label: "\u4E0A\u6D77"
      },
      {
        id: 2,
        label: "\u5317\u4EAC"
      },
      {
        id: 3,
        label: "\u91CD\u5E86"
      },
      {
        id: 4,
        label: "\u6210\u90FD"
      }
    ];
    function selectHotCity(cityId) {
      for (let key in city_list) {
        if (city_list[key].id === cityId) {
          city.value = city_list[key].label;
        }
      }
    }
    function closeCity(cityId) {
      for (let key in city_list) {
        if (city_list[key].id === cityId) {
          city_list.splice(key, 1);
        }
      }
    }
    const salary = common_vendor.ref("");
    const type_list = [
      {
        id: 1,
        label: "\u6821\u62DB"
      },
      {
        id: 2,
        label: "\u5B9E\u4E60"
      },
      {
        id: 3,
        label: "\u793E\u62DB"
      }
    ];
    const selType = common_vendor.ref(1);
    const changeSelType = (data) => {
      selType.value = data;
    };
    const sel_education = common_vendor.ref("\u8BF7\u9009\u62E9\u5B66\u5386");
    const education_popup = common_vendor.ref(null);
    const education_popOpen = () => {
      education_popup.value.open("bottom");
    };
    function changeEducation(edu) {
      pages_utils_utils.dropdownMenuSelection(education_popup, sel_education, edu);
    }
    const sel_industry = common_vendor.ref("\u8BF7\u9009\u62E9\u884C\u4E1A");
    const industry_popup = common_vendor.ref(null);
    const industry_popOpen = () => {
      industry_popup.value.open("bottom");
    };
    function changeIndustry(indu) {
      pages_utils_utils.dropdownMenuSelection(industry_popup, sel_industry, indu);
    }
    const job_note = common_vendor.ref("");
    function showDetail() {
      common_vendor.index.showModal({
        content: "\u4E25\u7981\u53D1\u5E03\u4E0D\u826F\u4FE1\u606F\uFF0C\u8FDD\u6CD5\u5FC5\u7A76\r\n\u6240\u6709\u6570\u636E\u672A\u7ECF\u5141\u8BB8\u4E0D\u5F97\u76D7\u7528\uFF0C\u4FB5\u6743\u5FC5\u7A76\r\n\u4FE1\u606F\u5747\u4E3A\u7528\u6237\u81EA\u613F\u5171\u4EAB\u53D1\u5E03\r\n\u5E0C\u671B\u5927\u5BB6\u80FD\u81EA\u89C9\u9075\u5B88\u58F0\u660E",
        showCancel: false
      });
    }
    function submit() {
      if (company.value === "" || salary.value === "") {
        common_vendor.index.showModal({
          content: "\u8BF7\u586B\u5B8C\u5E26*\u7684\u9009\u9879",
          showCancel: false
        });
        return;
      }
      common_vendor.index.showModal({
        content: "\u4F60\u786E\u5B9A\u8981\u63D0\u4EA4\u5417\uFF1F",
        success(res) {
          if (res.confirm) {
            common_vendor.index.showModal({
              content: "\u63D0\u4EA4\u6210\u529F\uFF01",
              showCancel: false
            });
            let obj = {
              company: company.value,
              job: job.value,
              city: city.value,
              salary: salary.value,
              type: tabStatus.value === 1 ? selType.value : 0,
              education: sel_education.value,
              industry: sel_industry.value,
              jobNote: job_note.value
            };
            console.log(obj);
          } else if (res.cancel) {
            return;
          }
        }
      });
    }
    return {
      city,
      salary,
      company,
      showCollapse,
      openCollapse,
      closeCollapse,
      alternativeCompany,
      job,
      tabStatus,
      changeTab,
      city_list,
      type_list,
      job_note,
      selType,
      changeSelType,
      education_popOpen,
      education_popup,
      sel_education,
      sel_industry,
      industry_popup,
      industry_popOpen,
      quickShowInputCompany,
      selectHotCity,
      closeCity,
      changeEducation,
      changeIndustry,
      submit,
      showDetail
    };
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_collapse_item2 = common_vendor.resolveComponent("uni-collapse-item");
  const _easycom_uni_collapse2 = common_vendor.resolveComponent("uni-collapse");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_easyinput2 + _easycom_uni_collapse_item2 + _easycom_uni_collapse2 + _easycom_uni_popup2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_collapse_item = () => "../../uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.js";
const _easycom_uni_collapse = () => "../../uni_modules/uni-collapse/components/uni-collapse/uni-collapse.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_collapse_item + _easycom_uni_collapse + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $setup.tabStatus === 1 ? 1 : "",
    b: common_vendor.o(($event) => $setup.changeTab(1)),
    c: $setup.tabStatus === 2 ? 1 : "",
    d: common_vendor.o(($event) => $setup.changeTab(2)),
    e: common_vendor.o($setup.closeCollapse),
    f: common_vendor.o($setup.openCollapse),
    g: common_vendor.o($setup.quickShowInputCompany),
    h: common_vendor.o(($event) => $setup.company = $event),
    i: common_vendor.p({
      placeholder: "\u8F93\u5165\u516C\u53F8\u540D\u79F0",
      modelValue: $setup.company
    }),
    j: common_vendor.f($setup.alternativeCompany, (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: common_vendor.o(($event) => $setup.company = item)
      };
    }),
    k: common_vendor.p({
      ["title-border"]: "none",
      border: false,
      ["show-arrow"]: false,
      open: $setup.showCollapse
    }),
    l: common_vendor.o(($event) => $setup.job = $event),
    m: common_vendor.p({
      placeholder: "\u8F93\u5165\u5C97\u4F4D\u540D\u79F0",
      modelValue: $setup.job
    }),
    n: common_vendor.f($setup.city_list, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.label),
        b: common_vendor.o(($event) => $setup.closeCity(item.id)),
        c: item.id,
        d: common_vendor.o(($event) => $setup.selectHotCity(item.id), item.id)
      };
    }),
    o: common_vendor.o(($event) => $setup.city = $event),
    p: common_vendor.p({
      placeholder: "\u8F93\u5165\u57CE\u5E02\u540D\u79F0",
      modelValue: $setup.city
    }),
    q: common_vendor.o(($event) => $setup.salary = $event),
    r: common_vendor.p({
      placeholder: "\u8F93\u5165\u85AA\u8D44\u540D\u79F0",
      modelValue: $setup.salary
    }),
    s: $setup.tabStatus === 1
  }, $setup.tabStatus === 1 ? {
    t: common_vendor.f($setup.type_list, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.label),
        b: item.id,
        c: $setup.selType === item.id ? 1 : "",
        d: common_vendor.o(($event) => $setup.changeSelType(item.id), item.id)
      };
    })
  } : {}, {
    v: $setup.tabStatus === 1
  }, $setup.tabStatus === 1 ? {
    w: common_vendor.t($setup.sel_education),
    x: common_vendor.o((...args) => $setup.education_popOpen && $setup.education_popOpen(...args))
  } : {}, {
    y: common_vendor.t($setup.sel_industry),
    z: common_vendor.o((...args) => $setup.industry_popOpen && $setup.industry_popOpen(...args)),
    A: common_vendor.o(($event) => $setup.job_note = $event),
    B: common_vendor.p({
      type: "textarea",
      placeholder: "\u53EF\u4EE5\u586B\u5199\u5DE5\u4F5C\u7684\u8BE6\u60C5\u5F85\u9047,\u5982\u798F\u5229\u8865\u8D34,\u798F\u5229\u5F85\u9047\u7B49",
      modelValue: $setup.job_note
    }),
    C: common_vendor.o((...args) => $setup.showDetail && $setup.showDetail(...args)),
    D: common_vendor.o((...args) => $setup.submit && $setup.submit(...args)),
    E: common_vendor.o(($event) => $setup.changeEducation("\u5176\u4ED6")),
    F: common_vendor.o(($event) => $setup.changeEducation("\u535A\u58EB985")),
    G: common_vendor.o(($event) => $setup.changeEducation("\u535A\u58EB211")),
    H: common_vendor.o(($event) => $setup.changeEducation("\u535A\u58EB\u6D77\u5F52")),
    I: common_vendor.o(($event) => $setup.changeEducation("\u535A\u58EB\u5176\u4ED6")),
    J: common_vendor.o(($event) => $setup.changeEducation("\u7855\u58EB985")),
    K: common_vendor.o(($event) => $setup.changeEducation("\u7855\u58EB211")),
    L: common_vendor.o(($event) => $setup.changeEducation("\u7855\u58EB\u6D77\u5F52")),
    M: common_vendor.o(($event) => $setup.changeEducation("\u7855\u58EB\u5176\u4ED6")),
    N: common_vendor.o(($event) => $setup.changeEducation("\u672C\u79D1985")),
    O: common_vendor.o(($event) => $setup.changeEducation("\u672C\u79D1211")),
    P: common_vendor.o(($event) => $setup.changeEducation("\u672C\u79D1\u6D77\u5F52")),
    Q: common_vendor.o(($event) => $setup.changeEducation("\u672C\u79D1\u5176\u4ED6")),
    R: common_vendor.o(($event) => $setup.changeEducation("\u5927\u4E13")),
    S: common_vendor.sr("education_popup", "ce65f5b8-7"),
    T: common_vendor.p({
      type: "bottom",
      ["background-color"]: "#fff"
    }),
    U: $setup.tabStatus === 1
  }, $setup.tabStatus === 1 ? {
    V: common_vendor.o(($event) => $setup.changeIndustry("IT|\u901A\u4FE1|\u4E92\u8054\u7F51")),
    W: common_vendor.o(($event) => $setup.changeIndustry("\u91D1\u878D")),
    X: common_vendor.o(($event) => $setup.changeIndustry("\u9500\u552E|\u5BA2\u670D|\u5E02\u573A")),
    Y: common_vendor.o(($event) => $setup.changeIndustry("\u8D22\u52A1|\u4EBA\u529B\u8D44\u6E90|\u884C\u653F")),
    Z: common_vendor.o(($event) => $setup.changeIndustry("\u9879\u76EE\u8D28\u91CF|\u9AD8\u7EA7\u7BA1\u7406")),
    aa: common_vendor.o(($event) => $setup.changeIndustry("\u623F\u4EA7|\u5EFA\u7B51|\u7269\u4E1A\u7BA1\u7406")),
    ab: common_vendor.o(($event) => $setup.changeIndustry("\u91C7\u8D2D|\u4EA4\u901A|\u8D38\u6613|\u7269\u6D41")),
    ac: common_vendor.o(($event) => $setup.changeIndustry("\u751F\u4EA7|\u5236\u9020")),
    ad: common_vendor.o(($event) => $setup.changeIndustry("\u4F20\u5A92|\u827A\u672F|\u8BBE\u8BA1|\u5370\u5237")),
    ae: common_vendor.o(($event) => $setup.changeIndustry("\u54A8\u8BE2|\u6CD5\u5F8B|\u6559\u80B2|\u7FFB\u8BD1")),
    af: common_vendor.o(($event) => $setup.changeIndustry("\u670D\u52A1\u4E1A")),
    ag: common_vendor.o(($event) => $setup.changeIndustry("\u80FD\u6E90\u73AF\u4FDD|\u519C\u4E1A\u79D1\u7814")),
    ah: common_vendor.o(($event) => $setup.changeIndustry("\u5176\u4ED6\u884C\u4E1A")),
    ai: common_vendor.o(($event) => $setup.changeIndustry("\u517C\u804C|\u5B9E\u4E60|\u793E\u5DE5\u5176\u5B83"))
  } : {}, {
    aj: $setup.tabStatus === 2
  }, $setup.tabStatus === 2 ? {
    ak: common_vendor.o(($event) => $setup.changeIndustry("\u7F51\u7EDC\u4E3B\u64AD|\u89C6\u9891\u62CD\u6444|\u535A\u4E3B")),
    al: common_vendor.o(($event) => $setup.changeIndustry("\u5916\u5356|\u95EA\u9001")),
    am: common_vendor.o(($event) => $setup.changeIndustry("\u4EE3\u9A7E|\u7F51\u7EA6\u8F66")),
    an: common_vendor.o(($event) => $setup.changeIndustry("\u5176\u4ED6\u884C\u4E1A"))
  } : {}, {
    ao: common_vendor.sr("industry_popup", "ce65f5b8-8"),
    ap: common_vendor.p({
      type: "bottom",
      ["background-color"]: "#fff"
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ce65f5b8"]]);
wx.createPage(MiniProgramPage);
