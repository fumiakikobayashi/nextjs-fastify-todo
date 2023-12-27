class Person {
    private readonly name: string;
    private readonly age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    getName(): string {
        return this.name;
    }
}

const alice = new Person('Alice', 25);
console.log(alice.greet());
console.log(alice.getName);
