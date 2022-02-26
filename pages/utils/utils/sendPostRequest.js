/**
 * 发送请求的包装
 * @param {string} route 路由地址
 * @param {Object|string} data 发送数据
 * @param {function} successFn 成功时执行的回调函数
 * @param {function} failFn 失败时执行的回调函数
 * @param {boolean} isShowModal 可选 控制失败后是否弹窗
 */
function sendPostRequest(route, data, successFn, failFn, isShowModal) {
	uni.request({
		url: "http://203.56.169.102:8084" + route,
		method: "POST",
		data,
		success(data) {
			successFn(data);
		},
		fail(error) {
			failFn(error);
			isShowModal ? uni.showModal({
				content: "请求失败！错误代码为：" + error.errMsg,
				showCancel: false
			}) : console.log(0);
		}
	})
}
export default sendPostRequest;
