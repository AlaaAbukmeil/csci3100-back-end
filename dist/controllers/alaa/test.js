"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDate = void 0;
function createDate(text = null) {
    let date = new Date();
    return "Today is: " + date.toString();
}
exports.createDate = createDate;
