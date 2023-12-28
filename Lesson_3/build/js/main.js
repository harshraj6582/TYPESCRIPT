"use strict";
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['starts', 'Less ', 2003];
let mixedData = ['EVH', 1984];
stringArr[0] = "Harsh ";
stringArr.push("Hey This Is Harsh raj ");
guitars[0] = 1984;
guitars.unshift("Jim ");
let myTuple = ['Dave', 42, true];
let myObj;
myObj = [];
console.log(myObj);
let evh = {
    name: "Harsh ",
    albums: [1984, 5500, "OUUK5"]
};
const greetGuitar = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
console.log(greetGuitar(evh));
