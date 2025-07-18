// keyof 유니언 타입으로 변환해주는 키워드
interface Hero {
    name: string;
    skill: string;
}

// in 앞의 타입 이름은 개발자 마음대로 가능
type HeroPropCheck1 = {
    [heroName in keyof Hero]: boolean;
};
// 위 코드와 동일한 역할
type HeroPropCheck2 = {
    [H in "name" | "skill"]: boolean;
};

// 에러 발생
type Login = boolean;
type LoginAuth = {
    [L in Login]: string;
};

// 매핑 수정자 옵셔널 ?
type Hero2 = {
    name: string;
    skill: string;
};

type HeroOption1 = {
    [H in keyof Hero2]?: string;
};

// - 다시 원상태로
type HeroOption2 = {
    [H in keyof Hero2]-?: string;
};

// 맵드 타입으로 유틸리티 타입 만들기
interface Todo {
    id: string;
    title: string;
}

type OptionalTodo = Partial<Todo>;

type MyPartial = {
    [Property in keyof Todo]?: Todo[Property];
};

// 어떤 타입이 오든
type MyPartia2<Type> = {
    [Property in keyof Type]?: Type[Property];
};
