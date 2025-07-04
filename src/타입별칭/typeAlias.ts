// 마치 타입에 이름이 생긴 것과 같다.
// 반복되는 코드를 줄일 수 있다.
type MyName = string;

var capt: MyName = '캡틴';

type MyMessage = string | number;

function logText(text: MyMessage)  {
    if (typeof text === 'string') {
        console.log(text.toUpperCase());
    }
    if (typeof text === 'number') {
        logText(text.toString());
    }
}

var message: MyMessage = 'hello';
logText(message);

// 타입 확장에 차이 인터페이스는 상속
interface Person {
    name: string;
    age: number;
}

interface Developer extends  Person {
    skill: string;
}

var joo: Developer = {
    name: '형주',
    age: 21,
    skill: 'FE',
}

// 타입 별칭은 인터섹션 타입으로 합침
type Person2 = {
    name: string;
    age: number;
}

type Developer2 = {
    skill: string;
}

var joo2: Person2 & Developer2 = {
    name: '형주2',
    age: 21,
    skill: 'FE2',
}

// 다른 사용 방법
type Joo = Person2 & Developer2;

var joo3: Joo = {
    name: '형주3',
    age: 21,
    skill: 'FE3',
}

// 인터페이스 선언 병합 동일한 이름이라면 합쳐진다.
interface Person3 {
    name: string;
    age: number;
}

interface Person3 {
    skill: string;
}

var joo4: Person3 = {
    name: '형주4',
    age: 21,
    skill: 'FE4',
}

// 타입 별칭으로만 정의할 수 있는 타입들
// 유틸리티 타입, 맵드 타입 타입 별칭만 가능하다.
type MyString = string;
type StringOrNumber = string | number;
type Admin = Person | Developer;

// 제네릭, 유틸리티 타입, 맵드 타입과도 연동 가능
// 제네릭
type Dropdown<T> = {
    id: string;
    title: T;
}

// 유틸리티 타입
type Admin2 = {name: string; age: number; role: string};
type OnlyName = Pick<Admin, 'name'>

// 맵드 타입
type Picker<T, L extends keyof T> = {
    [P in K] : T[P];
}

// 타입 별칭 API 함수 응답 형태 정의
type User = {
    id: string;
    name: string;
}

function fetchData(): User {
    return fetch('http://localhost:3000/users/1')
}

// interface API
// 이점은 인터페이스가 더 크다 갑자기 요구사항이 변경되어 화면에 노출해야 하는 데이터 구조가 변경되었다고 생각해보자
interface User2 {
    id: string;
    name: string;
}

function fetchData2(): User {
    return fetch('http://localhost:3000/users/1')
}

interface Admin2 {
    role: string;
    department: string;
}

// 상속
interface User3 extends Admin2 {
    id: string;
    name: string;
}

// 선언 병합
interface User3 {
    skill: string;
}