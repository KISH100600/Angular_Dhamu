"use strict";
const array = [
    { name: "data" },
];
// array[1] = '1';
// array[2] = {name : 'jdj'}
console.log(array);
function getName(name, ...rest) {
    //   console.log(name?.toUpperCase());
    console.log(rest);
    return name;
}
const sum = ` The sum is : ${getName(10, 10, "fd") + getName(5, 10)}`;
console.log(sum);
const num1 = "fdff";
console.log(num1 + num1);
