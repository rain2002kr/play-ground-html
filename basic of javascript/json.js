const obj = { name: "khlee", age: 30 };
const log = (m) => console.log(m);
const clr = () => console.clear();
// 1. Object to JSON
log(obj);
const json = JSON.stringify(obj);
log(json);

const rabbbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    log(`${name} can jump!`);
  },
};

{
  //const json2 = JSON.stringify(rabbbit,['name','color']);
  const json2 = JSON.stringify(rabbbit, (key, value) => {
    log(`key: ${key}, value: ${value}`);
    return value;
  });

  log(json2);
}

// 2. JSON to Object
/* const obj2 = JSON.parse(json);
log(obj2); */
