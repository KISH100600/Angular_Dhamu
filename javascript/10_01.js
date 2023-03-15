let array = ["hi", "hello", "names", "kish", "josh"];

array = null;

array.map((data) => {
  console.log(data);
  return { ...data, age: 10 };
});

const num = [1, 2, 3, 4, 5, 6, 7, 8];

let sum = 10;

for (var i = 0; i < num.length; i++) {
  if ("name") sum += num[i];
}

num.reduce((a, b) => a + b);
