// as 키워드를 붙여야 한다.
var myName = "세호" as string;

interface Person {
    name: string;
    age: number;
}

// 이미 운영 중인 서비스의 코드나 누군가가 만들어 놓은 코드라고 한다면 타입 에러를 해결하는 데 변경해야 할 코드가 많아 질 것이다.
// 이떄 타입 단언을 이용해서 기존 코드를 변경하지 않고도 타입 에러를 해결할 수 있다.
var joo = {} as Person;
joo.name = "형주";
joo.age = 31;

function getId(id) {
    return id;
}

var myId = getId("josh") as number;

// 타입 단언 중첩
var num = 10 as any as number;

// 호환되지 않는 타입 단언
var str = "hello" as number;

// null 체크
// 하지만 이렇게 매번하는 것은 번거로운 작업이다.
interface Book {
    shuffle: Function;
}

function shuffleBooks(books: Book | null) {
    if (books === null || books === undefined) {
        return;
    }
    var result = books.shuffle();
    return result;
}
// null이 아니라고 확신이 있다면 다음과 같이 할 수 있다. (!)
// 실행할 떄 실제로 null 값이 들어오면 실행 에러가 발생하므로 주의해야한다.
function shuffleBooks2(books: Book | null) {
    var result = books!.shuffle();
    return result;
}
