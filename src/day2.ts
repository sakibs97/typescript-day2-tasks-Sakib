//1. *Object & Array Manipulation*

import console = require("console");


interface User {
    name: string,
    email: string,
    phone?: string,
    active: boolean,
}

function filterActiveUsers(users: User[]): User[] {
    const result: User[] = [];

    for (const user of users) {
        if (user.active) {
            result.push(user)
        }
    }
    return result
}

const users: User[] = [
    {
        name: 'Sakib',
        email: 'sakib@gmail.com',
        phone: '01700000000',
        active: true
    },
    {
        name: 'Hridoy',
        email: 'hridoy@gmail.com',
        phone: '01700000002',
        active: false
    },
    {
        name: 'Nahihan',
        email: 'nahihan@gmail.com',
        phone: '01700000003',
        active: false
    },
    {
        name: 'Shuvo',
        email: 'sakib@gmail.com',
        active: true
    }
];

const activeUsers = filterActiveUsers(users)

// console.log(activeUsers);

// 2. *Function Overloading*

function getArea(shape: 'circle', r:number): number
function getArea(shape: 'square', r:number): number

function getArea(shape:'circle' | 'square', value: number): number{
    if (shape === 'circle') {
        return Math.PI * value * value
    }else{
        return value * value
    }
}

console.log(getArea('circle', 3))
console.log(getArea('square', 6))




// 4. *Error Handling*

function safeJSONParse(str: string): object | null {
    try {
        const parsed = JSON.parse(str);
        return parsed;
    } catch (error) {
        console.error('JSON parsing failed:', (error as Error).message);
        return null
    }
}

const validJSON = '{"name": "Sakib", "age": 26, "email": "sakib@gmail.com"}'

const validArray = '[1,2,3]'

const inValidJSON = '{name: "Sakib", age: 26, email: "sakib@gmail.com"}'

const emptyString = ''

console.log(safeJSONParse(validJSON));
console.log(safeJSONParse(inValidJSON));
console.log(safeJSONParse(validArray));
console.log(safeJSONParse(emptyString));

// 5. *Interface + Class Implementation*

interface Animsl {
    name: string,
    sound(): string
}

class Dog implements Animsl {
    name: string

    constructor(name: string) {
        this.name = name
    }

    sound(): string {
        return 'Woof!'
    }
}

const myDog = new Dog('Atto')

console.table([myDog.name, myDog.sound()]);

// 6.*Generic Function*

function getLastItem<T>(arr: T[]): T | null {
    if (arr.length === 0) {
        return null;
    }
    return arr[arr.length - 1] ?? null;
}

const numbers = [1, 2, 3];
const names = ['Sakib', 'Hridoy', 'Shuvo', 'Shihab'];
console.log(getLastItem(numbers));
console.log(getLastItem(names));

// // Array of objects

console.log(getLastItem(users));  //from line 21-45
console.log(getLastItem([]));

// 7. *Module Export/Import*

// import { add, multiply, subtract } from "./utils/mathUtils.js";

// console.log("Addition:", add(9, 7));
// console.log("Subtraction:", subtract(6, 1));
// console.log("Multiply:", multiply(5,5));

// 8. *Simple CLI Program*




