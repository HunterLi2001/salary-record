/**
 * 发送请求的包装
 * @param {string} url 发送的地址
 * @param {string} route 路由地址
 * @param {string} method 请求方式
 * @param {Object|string} data 发送数据
 * @param {function} successFn 成功时执行的回调函数
 * @param {function} failFn 失败时执行的回调函数
 */
function sendRequest(url, route, method, data, successFn, failFn) {
	uni.request({
		url: url + route,
		method,
		data,
		success(data) {
			successFn(data);
			// if(successMsg===null)return;
			// uni.showModal({
			// 	content: successMsg,
			// 	showCancel: false
			// })
		},
		fail(error) {
			failFn(error);
			// if(failMsg===null)return;
			// uni.showModal({
			// 	content: failMsg + "失败代码为：" + error.errMsg,
			// 	showCancel: false
			// })
		}
	})
}
export default sendRequest;
