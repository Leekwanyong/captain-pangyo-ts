// 이넘은 기본적으로 숫자 값을 가진다.
// 첫 번쨰 속성 부터 0번이다. 이를 리버스 매핑이라한다.
enum ShoesBrand {
    Nike,
    Adidas,
    NewBalance
}
var myShoes = ShoesBrand.Nike;
var yourShoes = ShoesBrand.Adidas;

enum Direction {
    Up = 10,
    Down,
    Left,
    Right
}

// 문자형 이넘 모든 속성 값을 숫자형과 다르게 지정해줘야 한다.
// 문자열로 관리하는 사례가 더 많다.
enum ArrowKey {
    KEY_UP = 'KEY_UP',
    KEY_DOWN = 'KEY_DOWN'
}

// 혼합 이넘
// 이렇게 작성해도 되지만 일괄되게 관리하는 것이 좋다.
enum Answer {
    Yes = 'Yes',
    No = 1
}
// 주의점 SuperAdmin은 User + Admin을 더한 1을 갖는다.
// 여기서 알 수 있는 점은 먼저 선언되어 있는 이넘의 속성을 활용할 수 있다는 것이다.
enum Authorization {
    User,
    Admin,
    SuperAdmin = User + Admin, // 1
    God = 'abc'.length // 3
}

// const 이넘
// 컴파일 결과물에 코드양을 줄여준다. 항상 속성에 고정 값만 넣어줘야 한다.
const enum logLevel {
    Debug = 'Debug',
    Info = 'Info',
    Error = 'Error',
}

var appLevel = logLevel.Error;