// TS는 미리 정의해 줘야 한다.
// private 접근 불가 클래스 코드 밖에서
class Person {
    private name: string;
    private skill: string;
    constructor(name: string, skill: string) {
        this.name = name;
        this.skill = skill;
    }

    private sayHi() {
        console.log(`hi`);
    }
}

// 인스턴스
var joo = new Person("형주", "인프랩 운영");
// 상속
class Developer extends Person {
    constructor(name, skill) {
        super(name, skill);
    }

    coding() {
        console.log("fun doing" + this.skill + "skill" + this.name);
    }
}

var capt = new Developer("캡틴", "방패 던지기");
capt.sayHi();

// public 어디서든 접근 가능
// #을 붙여서 실행 시점에 에러를 방지
class WaterPuifier {
    #waterAmount: number;

    constructor(waterAmount) {
        this.#waterAmount = waterAmount;
    }

    wash() {
        if (this.#waterAmount > 0) {
            console.log("정수기 동작 성공");
        }
    }
}

var purifier = new WaterPuifier(30);
purifier.wash();

// protected
class Person2 {
    protected name: string;
    protected skill: string;
    constructor(name: string, skill: string) {
        this.name = name;
        this.skill = skill;
    }

    protected sayHi() {
        console.log(`hi`);
    }
}

// 인스턴스
var joo2 = new Person2("형주", "인프랩 운영");
// 상속
class Developer2 extends Person2 {
    constructor(name, skill) {
        super(name, skill);
    }

    coding() {
        console.log("fun doing" + this.skill + "skill" + this.name);
    }
}

var capt2 = new Developer2("캡틴", "방패 던지기");
capt2.coding();
