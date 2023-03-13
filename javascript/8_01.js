function changeData(param1, param2, param3) {
  console.log(param1, param2, param3);
  //   return 20;
  if (!param1 || !param2 || !param3) {
    console.log("Nothing present");
    document.getElementById("error").style.display = "block";
  } else {
    document.getElementsByClassName("head")[0].innerText = "hi there";

    document.getElementById("head1").innerText = param1.name;
    //   "<h1> this is inner text </h1>";
    document.getElementById("head2").innerHTML =
      "<h1> this is inner text </h1>";

    document.getElementById("head2").style.display = "flex";
  }

  // document.write("<h1>hi its js</h1>");
}

document.getElementById("head2").style.color = "red";
document.getElementById("head2").style.background = "yellow";
changeData(
  {
    name: "kish",
    age: 39,
    email: "kis@gmail.com",
    mobile: 6858665868,
  },
  34,
  43
);
