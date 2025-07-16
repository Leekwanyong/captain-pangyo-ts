import type { Banner, Tony, Steve } from "./index";
// 비슷한 성격의 import
// import { Steve } from "./captain";
// import { Banner } from "./hulk";
// import { Tony } from "./ironman";

// js 모듈화를 위한 시도들
function sum(a: number, b: number) {
    return a + b;
}
// module.exports로 내보내기
// module.exports = {
//     sum,
// };
// require 외부 라이브러리를 가져오는 것처럼
// var math = require("./math.js");

// console.log(math.sum(10, 20));

var capt: Person = {
    name: "캡틴",
};

// 중복
type Person = {
    name: string;
    skill: string;
};
// var, interface 등 재선언이나 병합 선언이 가능한 코드는 별도로 에러 표시가 되지않음
interface Person2 {
    name: string;
    skill: string;
}

var banner: Banner = { name: "배너" };
var tony: Tony = { name: "토니" };
var steve: Steve = { name: "스티브" };
