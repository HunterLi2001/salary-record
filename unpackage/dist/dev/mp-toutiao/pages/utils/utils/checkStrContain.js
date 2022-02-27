"use strict";
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
exports.checkStrContain = checkStrContain;
