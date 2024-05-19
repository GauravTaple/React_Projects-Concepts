"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Hello World...!!!";
console.log(message);
// ---------------------------------------------------------
// 1. Variable Declarations in TypeScript
var x = 10;
var y = 20;
var z = 30;
var xy;
x = 20;
var x = 50;
// let y = 50;
var sum;
// const z = 10;
// const zxy;
var zzz = 'TypeScript variables...!!!';
// ---------------------------------------------------------
// 2. Variable Types in TypeScript
var isBeginner = true;
var totalNumber = 10;
var name = 'Gaurav';
var sentence = "My name is ".concat(name, " and my number is ").concat(totalNumber, " and i am typeScript beginner...!!!");
console.log(sentence);
var n = null;
var u = undefined;
// let isNew: boolean = null;
// let myName: string = undefined;
// ---------------------------------------------------------------
// any datatype we can stored any type of value. 
var anyType = 10;
anyType = 'Gaurav';
anyType = null;
anyType = true;
anyType = undefined;
console.log('anyType:-', anyType);
// ------------------------------------------------------------------
// multiple type can be assign using pipe '|' character Or operator.
var multiType;
multiType = 10;
multiType = 'Sonu';
multiType = true;
multiType = null;
// ----------------------------------------------------------------------
// 3. Function in TypeScript
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(10, 20);
add(10);
function fullName(person) {
    console.log("".concat(person.fname, " and ").concat(person.lname));
}
var p = {
    fname: 'Gaurav',
    // lname: 'Taple'
};
fullName(p);
// -------------------------------------------------------------------------
// 5. Class in TypeScript
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var p1 = new Employee('GauravTaple');
console.log(p1.employeeName);
p1.greet();
