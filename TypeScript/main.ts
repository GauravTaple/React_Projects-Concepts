export { }
let message = "Hello World...!!!";
console.log(message);

// ---------------------------------------------------------
// 1. Variable Declarations in TypeScript
var x = 10;
let y = 20;
const z = 30;

var xy;
x = 20;
var x = 50;

// let y = 50;
let sum;

// const z = 10;
// const zxy;
const zzz = 'TypeScript variables...!!!'


// ---------------------------------------------------------
// 2. Variable Types in TypeScript
let isBeginner: boolean = true;
let totalNumber: number = 10;
let name: string = 'Gaurav';

let sentence: string = `My name is ${name} and my number is ${totalNumber} and i am typeScript beginner...!!!`
console.log(sentence);

let n: null = null;
let u: undefined = undefined;

// let isNew: boolean = null;
// let myName: string = undefined;

// ---------------------------------------------------------------

// any datatype we can stored any type of value. 
let anyType: any = 10;
anyType = 'Gaurav';
anyType = null;
anyType = true;
anyType = undefined;

console.log('anyType:-', anyType);

// ------------------------------------------------------------------

// multiple type can be assign using pipe '|' character Or operator.
let multiType: number | string | boolean | null;
multiType = 10;
multiType = 'Sonu';
multiType = true;
multiType = null;

// ----------------------------------------------------------------------
// 3. Function in TypeScript
function add(num1: number, num2?: number): number {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(10, 20);
add(10);
// add('gaurav', null);

// ----------------------------------------------------------------------
// 4. Interface in TypeScript
interface Personssss {
    fname: string,
    lname?: string
}

function fullName(person: Personssss) {
    console.log(`${person.fname} and ${person.lname}`);
}

let p = {
    fname: 'Gaurav',
    // lname: 'Taple'
}

fullName(p);

// -------------------------------------------------------------------------
// 5. Class in TypeScript
class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let p1 = new Employee('GauravTaple');
console.log(p1.employeeName);
p1.greet();
