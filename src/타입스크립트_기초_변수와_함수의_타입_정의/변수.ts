// 문자열
var name1: string = 'captain';

// 숫자
var age: number = 32;
console.log(age);

// 진위 타입
var isLogin: boolean = false;
console.log(isLogin);

// 객체 타입 TS를 더 잘 사용하기 위해서는 타입을 구체적으로 선언하는 것이 좋다.
var hero: Object = {name: 'captain', age: 100};
console.log(hero);

// Array
var companies: Array<string> = ['네이버', '삼성', '인프런'];
var companies: string[] = ['네이버', '삼성', '인프런'];
// 숫자 베열
var cards: Array<number> = [1, 2, 3, 4];
var cards: number[] = [1, 2, 3, 4];

// 튜플 배열 길이 고정 각 요소 타입 정의된 배열
var items: [string, number] = ['hello', 1];

// any 사기 타입
var myName: any = '캡틴';
myName = 100;
var age2: any = 21;

// null undefined
var empty: null = null;
var nothingAssigned: undefined = undefined;

// 함수
function sayWord(word: string): string {
    return word;
}

sayWord('hello world');

// 옵셔널
function sayMyName(firstName: string, lastName?: string): string {
    return  firstName + ' ' + lastName;
}

sayMyName('hello');
