function updateInput(textInput: number | string | boolean) {
    // 타입 가드
    if (typeof textInput === "number") {
        textInput.toFixed(2);
        return;
    }
    if (typeof textInput === "string") {
        console.log(textInput.length);
        return;
    }
}

// 주요 연산자
// typeof
// 특정 코드의 타입을 문자열 값으로 반환해 준다.
typeof 10; // number
typeof "hello"; // string
typeof function () {}; // function
// 이처럼 typeof를 사용하면 특정 위치에서 원하는 타입으로 구분할 수 있다.
function printText(text: string | number) {
    if (typeof text === "string") {
        console.log(text.trim());
        return;
    }
    if (typeof text === "number") {
        console.log(text.toFixed(2));
        return;
    }
}

// instanceof 변수가 대상 객체의 프로토타입 체인에 포함되는지 확인하여 true/false를 반환한다.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var captain = new Person("캡틴", 100);

class Person2 {
    name: string;
    age: number;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// 주로 class 타입이 유니언 타입으로 묶여 있을 떄 타입을 구분하기 위해 사용한다.
function fetchInfoByProfile(profile: Person2 | string) {
    if (profile instanceof Person2) {
        profile.age;
        profile.name;
    }
}

// in 객체에 속성이 있는지 확인해 준다.
// 객체에 특정 속성이 있으면 true, false를 반환한다.
// interface가 2개가 유니언 타입으로 연결되어 있을 떄 특정 인터페이스로 구분할 수 있다.
interface Book {
    name: string;
    rank: number;
}

interface OnlineLecture {
    name: string;
    url: string;
}

function learnCourse(material: Book | OnlineLecture) {
    if ("url" in material) {
        material.name;
        material.url;
    }
    if ("rank" in material) {
        material.name;
        material.rank;
    }
    // 다른 타입과 구분되는 유일한 특징을 조건으로 걸어야 한다.
    if ("name" in material) {
        material.name;
    }
}

// 타입 가드 함수
// is 연산자를 사용하여 여러 개의 타입 중 하나로 구분한다.

interface Perosn3 {
    name: string;
    age: number;
}

interface Developer {
    name: string;
    skill: string;
}

function isPerson(someone: Perosn3 | Developer): someone is Perosn3 {
    return (someone as Perosn3).age !== undefined;
}

function greet(someone: Perosn3 | Developer) {
    if (isPerson(someone)) {
        console.log(someone.age);
    } else {
        console.log(someone.skill);
    }
}

interface Hero {
    name: string;
    nickname: string;
}

interface Person4 {
    name: string;
    age: number;
}

interface Developer2 {
    name: string;
    age: string;
    skill: string;
}

// age 가 숫자관련이 아니기 때문에 숫자관련 API를 사용할 수 없다.
// 이 때에 타입 가드 함수를 선언하여 해결할 수 있다.
function greet2(someone: Hero | Person4 | Developer2) {
    if ("age" in someone) {
        console.log(someone.age);
    }
}

function isPerson2(someone: Hero | Person4 | Developer2): someone is Person4 {
    return typeof (someone as Person4).age === "number";
}

function greet3(someone: Hero | Person4 | Developer2) {
    if (isPerson2(someone)) {
        console.log(someone.age);
    }
}

// 구별된 유니언 타입
interface Person5 {
    name: string;
    age: number;
    industy: "common";
}

interface Developer3 {
    name: string;
    age: string;
    skill: string;
    industy: "tech";
}
// 속성에 문자열 타입 값을 비교해서 타입을 구분해 낸다. 구별된 유니언 타입
function greet4(someone: Person5 | Developer3) {
    if (someone.industy === "common") {
        someone.age.toFixed;
    }
    if (someone.industy === "tech") {
        someone.age.toString();
    }
}

// swutch문으로 타입가드
interface Human {
    name: string;
    age: number;
    industy: "common";
}

interface Engineer {
    name: string;
    age: string;
    industy: "tech";
}

function greet5(someone: Human | Engineer) {
    switch (someone.industy) {
        case "common":
            console.log(someone.age.toFixed(2));
            break;
        case "tech":
            console.log(someone.age.split(""));
            break;
    }
}

// 논리연산자로 타입가드
function sayHi(message: string | null) {
    if (message && message.length >= 3) {
        console.log(message);
    }
}
