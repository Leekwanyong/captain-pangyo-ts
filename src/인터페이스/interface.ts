interface User {
    name: string;
    age: number;
}

var seho: User = {name: '세호', age: 36};

interface Person {
    name: string;
    age: number;
}

function logAge(someone: Person) {
    console.log(someone.age)
}

var captain = {name: 'Capt', age: 100};
logAge(captain);

function getPerson(someone: Person) {
    return someone;
}

var hulk = getPerson({name: 'Hulk', age: 36});

interface Person2 {
    name?: string;
    age: number;
}

function logAge2(someone: Person2) {
    console.log(someone.age);
}

function logPersonInfo(you: Person2) {
    console.log(you.name);
    console.log(you.age);
}

var captain2 = {age: 100};
logAge2(captain2);
logPersonInfo(captain2)

interface Hero {
    power: boolean;
}

interface Person3 extends Hero {
    name: string;
    age: number;
}

interface Developer extends Person3 {
    skill: string;
}

var ironman: Developer = {
    name: '아이언맨',
    age: 21,
    skill: '만들기',
    power: true
};

// 인덱싱
// 특정 속성에 접근하는 것을 인덱싱이라 한다.

// 배열 인덱싱 타입 정의 [0], [1]처럼 숫자로만 접근 가능, .은 불가능
// 스트링이라면 접근 가능 .이든 []이든
interface StringArray {
    [index: number]: string;
}

var user = {
    name: '캡틴',
    admin: true
};

console.log(user['name']) // 캡틴

var companies: StringArray = ['삼성', '네이버', '인프런'];
console.log(companies[0]); // 삼성

interface SalaryMap {
    [level: string]: number;
}

var salary: SalaryMap = {
    junior: 100
};

// 인덱스 시그니처
// 즉 몇개의 타입을 정의할 줄 모르겠을 떄 유용하다. 단점은 코드 자동 완성이 제공되지 않는다.
// 즉 명확하게 정의되어 있다면 인덱스 시그니처 보다는 직접 명시하는게 좋다.
interface SalaryInfo {
    [level: string]: string;
}

var salary2: SalaryInfo = {
    junior: '100원',
    mid: '400원',
    senior: '700원'
};

// 다음과 같이 혼용으로 사용이 가능하다.
interface User2 {
    [property: string]: string;
    id: string;
    name: string;
}

var seho3: User2 = {
    id: '1',
    name: '세호'
};