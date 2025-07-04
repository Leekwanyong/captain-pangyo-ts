// type을 구분하여 사용할 수 있다. 특정 타입의 속성과 메서드를 사용하고 싶다면
// type in 타입을 구분하는 것을 타입가드라고 한다.
function logText(text: string | number) {
    if (typeof text === 'string') {
        console.log(text.toUpperCase());
    }
    if (typeof text === 'number') {
        console.log(text.toFixed());
    }
}

logText('hello world');
logText(1)

// 주의점 두 개 중에 속성이 있어야 할꺼 같지만 오류가남.
interface Person {
    name: string;
    age: number;
}

interface Developer {
    name: string;
    skill: string;
}

// in을 사용하여 해결해야 한다.
// in 연산자는 객체 안에 특정 속성이 있는지 확인한다.
function introduce(someone: Person | Developer) {
    if ('age' in someone) {
        console.log(someone.age)
        return;
    } else {
        console.log(someone.skill);
        return;
    }
}

// 인터섹션 타입
interface Avenger {
    name: string;
}

interface Hero {
    skill: string;
}

function introduce2(someone: Avenger & Hero) {
    console.log(someone.name);
    console.log(someone.skill);
}

introduce2({name: '캡틴', skill: '어셈블'});
