interface PhoneNumberDictionary {
    [phone: string]: {
        num: number;
    };
}

interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
}

// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts(): Promise<Contact[]> {
    // TODO: 아래 변수의 타입을 지정해보세요.
    const contacts: Contact[] = [
        {
            name: "Tony",
            address: "Malibu",
            phones: {
                home: {
                    num: 11122223333,
                },
                office: {
                    num: 44455556666,
                },
            },
        },
        {
            name: "Banner",
            address: "New York",
            phones: {
                home: {
                    num: 77788889999,
                },
            },
        },
        {
            name: "마동석",
            address: "서울시 강남구",
            phones: {
                home: {
                    num: 213423452,
                },
                studio: {
                    num: 314882045,
                },
            },
        },
    ];
    return new Promise((resolve) => {
        setTimeout(() => resolve(contacts), 2000);
    });
}

enum PhoneType {
    Home = "Home",
    Office = "office",
    Studio = "studio",
}

// main
class AddressBook {
    // TODO: 아래 변수의 타입을 지정해보세요.
    contacts: Contact[] = [];

    constructor() {
        this.fetchData();
    }

    fetchData() {
        fetchContacts().then((response) => {
            this.contacts = response;
        });
    }

    /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
    findContactByName(name: string): Contact[] {
        return this.contacts.filter((contact) => contact.name === name);
    }

    findContactByAddress(address: string): Contact[] {
        return this.contacts.filter((contact) => contact.address === address);
    }

    findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
        return this.contacts.filter((contact) => contact.phones[phoneType].num === phoneNumber);
    }

    addContact(contact: Contact): void {
        this.contacts.push(contact);
    }

    displayListByName(): string[] {
        return this.contacts.map((contact) => contact.name);
    }

    displayListByAddress(): string[] {
        return this.contacts.map((contact) => contact.address);
    }
    /* ------------------------------------------------ */
}

const book = new AddressBook();
book.findContactByPhone(11122223333, PhoneType.Home);
