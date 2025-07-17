// pick 특정 속성을 뽑아서 새로운 타입을 만들어 낼 떄 사용
interface Profile {
    id: string;
    address: string;
}

type ProfileId = Pick<Profile, "id">;

var captProfile: ProfileId = {
    id: "캡틴 아이디",
};

interface UserProfile {
    id: string;
    name: string;
    address: string;
}

type HulkProfile = Pick<UserProfile, "id" | "name">;

var hulk: HulkProfile = {
    id: "1",
    name: "헐크",
};

// Omit
interface UserProfile2 {
    id: string;
    name: string;
    address: string;
}

type User1 = Omit<UserProfile2, "address">;
type User2 = Pick<UserProfile2, "address">;

// Partial
interface Todo {
    id: string;
    title: string;
}

type OptionalTodo = Partial<Todo>;

// Exclude
type Languages = "C" | "Java" | "TypeScript" | "React";
type TrueLanguages = Exclude<Languages, "React">;

// Record
type HeroProfile = {
    skill: string;
    age: number;
};

type HeroNames = "thor" | "hulk" | "capt";

type Heroes = Record<HeroNames, HeroProfile>;

var avengers: Heroes = {
    capt: {
        skill: " 방패",
        age: 100,
    },
    thor: {
        skill: "해머",
        age: 3000,
    },
    hulk: {
        skill: "괴성",
        age: 47,
    },
};

// Record 2번째 사용 방법
type PhoneBook = Record<string, string>;

var familyPhones: PhoneBook = {
    dad: "010-2837-105x",
    mom: "010-1774-492x",
};
