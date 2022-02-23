/**
 * 下拉菜单选取修改功能
 * @param {any} selection 要对其进行改动的下拉菜单 
 * @param {any} value 要修改的值
 * @param {any} pName 要修改的参数 
 */
function dropdownMenuSelection(selection, pName, value) {
	pName.value = value;
	selection.value.close("bottom");
}
/**
 * 检查一个字符串是否包含在另一个字符串里,并且首字符相同
 * @param {string} i 计算机科学与技术
 * @param {string} j 计科
 * @return {boolean} true
 */
function checkStrContain(i, j) {
	if (!i || !j) {
		return false;
	}
	if (i.charAt(0) != j.charAt(0)) {
		return false;
	}
	i = i.substr(1, i.length - 1);
	j = j.substr(1, j.length - 1);
	let a, b;
	if (i.length > j.length) {
		a = i;
		b = j;
	} else {
		a = j;
		b = i;
	}
	let count = 0;
	for (let bi = 0; bi < b.length; bi++) {
		let bArr = b.split("");
		if (a.indexOf(bArr[bi]) != -1) {
			count++;
		} else {
			break;
		}
	}
	if (b.length == count) {
		return true;
	} else {
		return false;
	}
}

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
export {
	dropdownMenuSelection,
	checkStrContain,
	sendRequest
}
