'use strict';

//Object
//object = { key: value}

//1. Literals and properties
const obj1 = {};
const obj2 = new Object();

const ellie = {name : 'ellie', age: 4}
print(ellie);

//with Javascript magic (dynamically typed language)
ellie.hasjob =true;
console.log(ellie.hasjob);

//can delete
delete ellie.hasjob;
console.log(ellie.hasjob); //undefined 나옴

//2. Computed properties
console.log(ellie.name);
console.log(ellie['name']); // 위와 동일, Computed properties, 키는 스트링타입으로 지정할 것
//실시간 동적으로 값을 받아야할떄는 [] 사용해야 함
function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, 'name');


//3.Property value shorthand
const person1 = {name:'ellie', age: 30};
const person4 = makePerson('ellie', 30);
// name : name, age: age는 아래와 같이 생략가능
// 이건 함수임, 클래스없을떄는 이렇게 만들어서 사용함
function makePerson(name, age) {
  return {
    name,
    age
  }
}

//4.Constructor function
//클래스
function Person(name, age) {
  this.name= name;
  this.age = age;
}

//5. in operation : property existence check (key in obj)
// 키 있는지 확인
console.log('name' in ellie);

//6. for..in vs for..of
//for (key in obj)

// console.clear(); // 콘솔 다 초기화
for (key in ellie) {
  console.log(key)
}


//for (value of iterable)
const array = [1, 2, 4, 5,];
for (value of array) {
  console.log(value);
}

// 7.FUn cloning
// refrence 가 복사됌
const user = {name:'ellie', age: "20"}
const user2 = user;

//user2.name="바꾸면"
//user.name도 바뀜

//값만 복제하는 방법
//old way, 방법1
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}

//방법2
const user4 = {};
Object.assign(user4, user);

//가장 오른쪽부터 왼쪽으로 덮어쓰기 됌, 객체 여러개도 가능하단말임
const user5 = Object.assign({}, user);



