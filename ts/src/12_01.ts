class simple {
  constructor(public name: string) {}
  getName(): string {
    return this.name;
  }
}

interface name {
  getName(): string;
}

const simpleObj = new simple("kish ds sd fdfd fdfdf d");

console.log(simpleObj.getName());

class Base {
  name = "base";
  constructor() {
    console.log("My name is " + this.name);
  }
  getName1() {
    return 88;
  }
  getName() {
    return this.name;
  }
}

class Derived extends Base implements name {
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
