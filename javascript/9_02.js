const data = {
  name: "kish",
  age: 76,
  mobile: 848584,
  email: "jhdjhd@jhhjs.com",
  about: {
    dob: "10 - 06 - 1888",
    place: {
      dist: "ramnad",
      village: "hhdh",
      state: "tamilnadu",
    },
  },
};
console.log(data);
// document.getElementById("head").innerText = JSON.stringify(data);
// document.getElementById("head").innerText = data.about.place.dist;
document.getElementById("head").innerText = data["about"]["place"]["dist"]; //data.mobile
