<template>
  <view class="professionDetail">
    <view class="top_list">
      <view class="pos_name">{{ detailData.pos_name }}</view>
      <view class="salary">{{ detailData.pos_salary }}/月</view>
    </view>
    <view class="center_pos_list">
      <view class="address">{{ detailData.com_address }}</view>
      <view class="education">{{ detailData.education }}</view>
      <view class="pos_type">{{ detailData.pos_type }}</view>
    </view>
    <view class="center_com_list">
      <view class="com_left">
        <view class="com_name">{{ detailData.com_name }}</view>
      </view>
      <view class="com_right">
        <view class="center_time_list">
          <view class="address">发布时间：{{ detailData.release_time }}</view>
        </view>
        <view class="center_more_list">
          <view class="read_count">浏览量：{{ 1 }}</view>
          <view class="praise_count">点赞量：{{ 0 }}</view>
        </view>
      </view>
    </view>

    <view class="remark">
      {{ detailData.explain }}
    </view>
    <view class="comments"> 评论 </view>
    <view class="advertising">
      <ad></ad>
    </view>
  </view>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import sendRequest from "../../utils/utils/sendRequest.js"
export default {
  setup(options) {
    onMounted(() => {
      search();
    });
    console.log(options);
    const type = reactive(options.type);
    const id = ref(options.id);

    function search() {
      sendRequest(
        "http://203.56.169.102:8084",
        type.value === 1
          ? "/showDetail/getNormalWork"
          : "/showDetail/getNewWork",
        "post",
        id.value,
        function () {
          console.log(data);
          operateData(data);
        },
        function () {
          uni.showModal({
            content: "搜索失败!错误代码为:" + error.errMsg,
            showCancel: false,
          });
        }
      );
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
    const detailData = reactive({
      pos_name: null,
      pos_salary: null,
      com_address: null,
      education: null,
      pos_type: null,
      com_name: null,
      release_time: null,
      explain: null,
    });
    return {
      type,
      id,
      search,
      operateData,
      detailData,
    };
  },
};
</script>

<style scoped lang="scss">
.professionDetail {
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
  padding: 10px 20px;

  .top_list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15rpx;

    .pos_name {
      font-size: 40rpx;
    }

    .salary {
      font-size: 48rpx;
      color: #00bf57;
    }

    .center_more_list {
      font-size: 48rpx;
      color: #00bf57;
    }
  }

  .center_pos_list {
    display: flex;
    justify-content: space-between;
    font-size: 24rpx;
    color: gray;
    margin-top: 20rpx;
  }

  .center_com_list {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .com_left {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .com_name {
        font-size: 38rpx;
      }
    }

    .com_right {
      // display: flex;
      // justify-content: flex-start;
      // align-items: center;
      .center_more_list,
      .center_time_list {
        display: flex;
        justify-content: flex-end;
        font-size: 24rpx;
        color: gray;
        margin-top: 20rpx;

        .read_count {
          margin-right: 30rpx;
        }
      }
    }
  }

  .remark {
    box-sizing: border-box;
    width: 100%;
    padding: 100rpx;
    border: 1rpx solid gray;
    text-align: center;
    margin-top: 20rpx;
  }

  .comments {
    box-sizing: border-box;
    width: 100%;
    padding: 100rpx;
    border: 1rpx solid gray;
    text-align: center;
    margin-top: 20rpx;
  }

  .advertising {
    box-sizing: border-box;
    width: 100%;
    padding: 100rpx;
    border: 1rpx solid gray;
    text-align: center;
    margin-top: 20rpx;
  }
}
</style>
<style lang="scss">
// .professionDetail{}
</style>
