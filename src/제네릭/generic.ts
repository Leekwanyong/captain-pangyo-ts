// 기본 문법
// 함수를 실행할 떄 아무 타입이나 넘길 수 있다.
function getText<T>(text: T) {
    return text;
}

getText<string>("hi");

// 함수에 호출 결과도 제네릭 타입을 따라간다.
var myString = getText<string>("hi");
var myNumber = getText<number>(3);

// 인터페이스 제네릭 사용하기
// 모든 타입을 일일이 정의한다면 타입 코드도 많아진다.
// 관리도 어렵고 번거롭다
interface ProductDropdown {
    value: string;
    selected: boolean;
}

interface StockDropdown {
    value: string;
    selected: boolean;
}

interface AddressDropdown {
    value: { city: string; zipCode: string };
    selected: boolean;
}

var product: ProductDropdown;
var stock: StockDropdown;
var address: AddressDropdown;

// 이떄 제네릭으로 사용하기
// 타입을 유연하게 확장 비슷한 역할에 코드 줄임
interface Dropdown<T> {
    value: T;
    selected: boolean;
}

var product2: Dropdown<string>;
var stock2: Dropdown<number>;
var address2: Dropdown<{ city: string; zipCode: string }>;

// 타입 제약
// 하지만 이런 식으로 사용할꺼면 그냥 string으로 명시를 하지 않을까
function embranceEverything<T extends string>(thing: T) {
    return thing;
}
embranceEverything<string>("hi");
embranceEverything<number>(1); // error 발생

// 이런식으로 한다면 string, array, object된다.
// T extends {}는 null과 undefined를 제외한 거의 모든 값을 받는다
// 객체만 받기위해서는 object를 써야한다.
function lengthOnly<T extends { length: number }>(value: T) {
    return value.length;
}
lengthOnly("hi");
lengthOnly([1, 2, 3]);
lengthOnly({ title: "abc", length: 123 }); // length 속성이 있기 떄문에 호출이 가능하다.

// keyof
// 대상 타입에 키를 추출해서 유니온 타입으로 변환
type DeveloperKeys = keyof { name: string; skill: string };

function printKets<T extends keyof { name: string; skill: string }>(value: T) {
    console.log(value);
}

printKets("address"); // name skill이 없다
printKets(100); // 마찬가지
