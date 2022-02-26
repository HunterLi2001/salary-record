/**
 * 发送请求的包装
 * @param {string} route 路由地址
 * @param {Object|string} data 发送数据
 * @param {Object} callBackFn 回调函数对象
 * @param {boolean} isShowModal 可选，控制失败后是否弹窗
 */
function sendPostRequest(route, data, callBackFn, isShowModal) {
	uni.request({
		url: "http://203.56.169.102:8084" + route,
		method: "POST",
		data,
		success(data) {
			callBackFn.success(data);
		},
		fail(error) {
			callBackFn.fail(error);
			isShowModal ? uni.showModal({
				content: "请求失败！错误代码为：" + error.errMsg,
				showCancel: false
			}) : console.log(0);
		}
	})
}
export default sendPostRequest;
