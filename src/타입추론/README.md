## 타입 추론이란?

-   타입 스크립트를 더 깊이 이해하려면 알아야 하는 개념이다. IDE에서 부가적인 코드 정보를 표시해 주거나 자동 완성을 할 수 있었는데 이는 TS가 내부적으로 타입을 추론하기 떄문이다.
-   적당한 타입을 제시하고 정의해 주는 것을 타입 추론이라고 한다. 예를 들어 var a = 10;을 number로 타입을 추론해준다.
-   var a; 변수를 선언하고 아무 것도 주지 않는다면 TS는 any타입으로 추론한다. 뭐가 들어올지 알 수 없기 떄문에
-   하지만 var a; a = 10; 으로 한다면 이는 any타입으로 추론한다. TS는 한 줄 한 줄 해석하기 떄문이다.

## 함수의 타입 추론: 반환 타입

-   function sum(a: number, b: number) { return a + b } 라면 반환타입은 자동적으로 number타입이다.
-   return a === b라면 반환타입은 자동적으로 boolean타입으로 추론한다.
-   function sum(a = 10) { return a } 라면 a?: number 타입으로 추론한다. 함수의 파라미터에 값을 넘기거나 넘기지 않아도 되기 떄문에 옵셔널 파라미터를 의미하는 ?가 붙는다.

## 인터페이스와 제네릭의 추론 방식

-   interface Dropdown<T> {title: string; value: T;} let shoppongItem: Dropdown<number> = {title: '길벗 책', value: 20000}
-   Dropdown<number> 타입으로 넘겼기 떄문에 number 타입으로 타입을 추론한다.
-   interface Dropdown<T> {title: string; value: T;}
-   interface DetailedDropdown<k> extends Dropdown<K> {tag: string; descripton: string;} 확장한다면
-   let shoppongItem: DetailedDropdown<number> = {title: '길벗 책', tag: 'ts', descripton: 'ts배우기', value: 20000} 여전히 number type 으로 추론한다. number 넘겼기 떄문에
