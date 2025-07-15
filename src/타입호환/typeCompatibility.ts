var a = "hi";
var b = 10;

b = a;

// 큰거에서 작은걸로 불가
// 작은거에서 큰걸로 가능
var a1: string = "hi";
var b1: "hi" = "hi";

a1 = b1;

// 구조적 타이핑

type Captain = {
    name: string;
};

interface Antman {
    name: string;
}

var a3: Captain = {
    name: "캡틴",
};

var b3: Antman = {
    name: "앤트맨",
};

b3 = a3;

// 생김새와 구조로 타입 호환 여부를 판별한다.
type Captain2 = {
    name: string;
};

interface Antman2 {
    nickName: string;
}

var a4: Captain2 = {
    name: "캡틴",
};

var b4: Antman2 = {
    nickName: "앤트맨",
};

b4 = a4;

// 객체 타입의 호환은 타입 유형에 관계없이 동일한 이름의 속성을 갖고 있고 해당 속성의 타입이 같으면 호환이 가능하다
type Person = {
    name: string;
};

interface Developer {
    name: string;
}

var joo: Person = {
    name: "형주",
};

var capt: Developer = {
    name: "캡틴",
};

capt = joo;
joo = capt;
// 2
type Person2 = {
    name: string;
};
// 옵셔널 주면 에러사라짐
interface Developer2 {
    name: string;
    skill: string;
}

var joo2: Person2 = {
    name: "형주",
};

var capt2: Developer2 = {
    name: "캡틴",
    skill: "방패 던지기",
};

capt2 = joo2;
joo2 = capt2;

// 함수 타입의 호환
var add = function (a: number, b: number) {
    return a + b;
};

var sum = function (x: number, y: number) {
    return x + y;
};

add = sum;
sum = add;

// 인자 매개변수에 개수가 틀려도 호환 불가
// 더 크거나 타입을 만족하지 못하는 함수는 호환 X
var getNumber = function (num: number) {
    return num;
};

var sum2 = function (x: number, y: number) {
    return x + y;
};

getNumber = sum2;
sum2 = getNumber;

// 이넘 타입의 호환
// 숫자형 이넘은 숫자타입과 호환
enum Language {
    C,
    Java,
    TypeScript,
}

var a5: number = 10;
a5 = Language.C;

// 이넘 타입 간 호환 여부
// 같은 속성과 값을 가졌더라도 이넘은 호환이 불가
enum Programing {
    C,
    Java,
    TypeScript,
}

var langC: Language.C;
langC = Programing.C;

// 제네릭 타입의 호환
interface Empty<T> {}
var empty1: Empty<string>;
var empty2: Empty<number>;

empty2 = empty1;
empty1 = empty2;

// type 구조가 다르기 떄문에 호환 X
interface NotEmpty<T> {
    data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;

notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;
