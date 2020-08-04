"use strict";


const data = {
    name: '',
    surname: '',
    age: '',
    student: false
};

data.name = prompt("Write your name", "");
data.surname = prompt("Write your surname", "");
data.age = prompt("Write your age", "");
data.student = confirm('Are you student?');

alert(`Hello, ${data.surname} ${data.name}! Stutent: ${data.student}, you are ${data.age} years old`);
document.write(`Hello, my friend ${data.surname} ${data.name}`);