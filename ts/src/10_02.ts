const array: readonly (String | Number | Boolean | Object)[] = [
  { name: "data" },
];

// array[1] = '1';
// array[2] = {name : 'jdj'}

console.log(array);

function getName(name: number, ...rest: (number | string)[]): number {
  //   console.log(name?.toUpperCase());
  console.log(rest);
  return name;
}

const sum: string = ` The sum is : ${getName(10, 10, "fd") + getName(5, 10)}`;

console.log(sum);

const num1: string = "fdff";

console.log(<number>(<unknown>num1) + <number>(<unknown>num1));
