"use strict";
class simple {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const simpleObj = new simple("kish ds sd fdfd fdfdf d");
console.log(simpleObj.getName());
class Base {
    constructor() {
        this.name = "base";
        console.log("My name is " + this.name);
    }
    getName1() {
        return 88;
    }
    getName() {
        return this.name;
    }
}
class Derived extends Base {
    // name = "derived";
    getName() {
        console.log(super.name);
        // console.log(Base.name);
        return "ji";
    }
}
// Prints "base", not "derived"
const d = new Derived();
console.log(d.getName());
