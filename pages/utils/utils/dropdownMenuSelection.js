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
export default dropdownMenuSelection;