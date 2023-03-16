function getNamekskd<type1, type2>(name: type1, age: type2): [type1, type2] {
  return [name, age];
}

const data = getNamekskd<number, number>(88, 87);

console.log(data);

const ogjectData: Record<string, any> = {
  name: 12,
  12: "kisj",
  bool: true,
};
