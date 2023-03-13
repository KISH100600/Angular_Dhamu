function add(param1, param2) {
  return parseInt(param1) + parseInt(param2);
}
function sub(param1, param2) {
  return param1 - param2;
}
function mul(param1, param2) {
  return param1 * param2;
}
function div(param1, param2) {
  return param1 / param2;
}

function calculateData() {
  const in1 = document.getElementById("input1");
  const in2 = document.getElementById("input2");
  const add1 = add(in1.value, in2.value);
  const sub1 = sub(in1.value, in2.value);
  const mul1 = mul(in1.value, in2.value);
  const div1 = div(in1.value, in2.value);

  const element1 = document.getElementById("sum");
  const element2 = document.getElementById("sub");
  const element3 = document.getElementById("mul");
  const element4 = document.getElementById("div");
  element1.innerHTML = "<p> The Sum is : " + add1 + "</p>"; //  element1.innerText = element1.innertText + add1;
  element2.innerHTML = "<p> The Sub is : " + sub1 + "</p>";
  element3.innerHTML = "<p> The Mul is : " + mul1 + "</p>";
  element4.innerHTML = "<p> The Div is : " + div1 + "</p>";
  element1.style.display = "block";
  element2.style.display = "block";
  element3.style.display = "block";
  element4.style.display = "block";
}

function calculateSum() {
  const in1 = document.getElementById("input1");
  const in2 = document.getElementById("input2");
  const add1 = add(in1.value, in2.value);
  const element1 = document.getElementById("sum");
  element1.innerHTML = "<p> The Sum is : " + add1 + "</p>"; //  element1.innerText = element1.innertText + add1;
  element1.style.display = "block";
}

function calculateSub() {
  const in1 = document.getElementById("input1");
  const in2 = document.getElementById("input2");
  const add1 = sub(in1.value, in2.value);
  const element1 = document.getElementById("sub");
  element1.innerHTML = "<p> The Sub is : " + add1 + "</p>";
  element1.style.display = "block";
}

function calculateMul() {
  const in1 = document.getElementById("input1");
  const in2 = document.getElementById("input2");
  const add1 = mul(in1.value, in2.value);
  const element1 = document.getElementById("mul");
  element1.innerHTML = "<p> The Sub is : " + add1 + "</p>";
  element1.style.display = "block";
}
