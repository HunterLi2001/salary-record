"use strict";
function dropdownMenuSelection(selection, pName, value) {
  pName.value = value;
  selection.value.close("bottom");
}
exports.dropdownMenuSelection = dropdownMenuSelection;
