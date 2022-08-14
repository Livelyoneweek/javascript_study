'use strict';

// 1. Object to Json
let json = JSON.stringify(true);
// console.log(json)

json = JSON.stringify(['apple', 'banana']);
// console.log(json)

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  }
}



{
  //jump나 자바스크립트에만있는 Symbol 데이터는 포함안됌
  json = JSON.stringify(rabbit);
  // console.log(json);

  json = JSON.stringify(rabbit, ['name', 'color','size']);
  // console.log(json);
  json = JSON.stringify(rabbit, (key,value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name'? 'ellie':value;
  });
  // console.log(json);

}

//2. Json to Object
{
  console.clear();
  json = JSON.stringify(rabbit);
  console.log(json)
  const obj = JSON.parse(json, (key,value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate'? new Date(value) : value;
  });
  console.log(obj);
  console.log(rabbit.birthDate.getDate());
  console.log(obj.birthDate.getDate()); //얘는 에러남

}

