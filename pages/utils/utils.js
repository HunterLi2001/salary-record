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
  * i:计算机科学与技术
  *  j:计科
  *  返回true
  */
    function checkStrContain(i, j) {
        if(!i || !j){
            return false;
        }
        if(i.charAt(0) != j.charAt(0)){
            return false;
        }
        i = i.substr(1,i.length-1);
        j = j.substr(1,j.length-1);
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

export {
	dropdownMenuSelection,checkStrContain
}
