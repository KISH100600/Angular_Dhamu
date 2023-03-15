type arr = readonly [
  first: Number,
  sec: String,
  th: Number,
  fou: Number,
  fif: Number
];

// Number | String | Boolean | Object | null | undefined  = any

const newArray: arr = [1, "2", 3, 4, 5];

// newArray['first'] = 20;

let newObjectData: {
  name: String;
  address: string;
  age: number;
  mobile?: number;
} = {
  name: "kish",
  age: 99,
  address: "chennai",
  mobile: 23,
};

delete newObjectData.mobile;
// delete newObjectData.age;

console.log(newObjectData);

const anotherObj: { [index: number]: number; [index: string]: number } = {
  10: 10,
  first: 10,
};
