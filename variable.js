//1. Use strict
//added in Es 5
//use this for Valina Javascript.
'use strict';

//2. Variable rw(read/write)
//let( added in ES6)

let globalName = 'global name';

{
  let name = 'hello';
  name = 'world';
  console.log(name)
}

//var (don't ever use this!)
//var hoisting (어디에 선언했는지를 상관없이, 끌어올리다)
//var block 스코프를 철저히 무시
//var 쓰지말것
{
  age = 4;
  var age;
}
console.log(age);

//3. Const r(Read)
//가능하면 변수 지정 시 const 사용
// const는 Immutable 타입의 데이터로 한번
// 할당하면 값이 변하지 않음
// 사용이유로는 보안, 스레드 안전, 실수방지
const noVariable = "noChange";

//4. Variable types
//Primitive 타입이란 single item: number, string, boolean, null, undefined, symbol
//object, box container
//function, first-class function 이 프로그래밍 언어는 다른 데이터타입처럼 함수를 변수에 할당할 수 있음

//자바스크립트는 number가 long, short, large, double 등 모든걸 받음
//number를 따로 선언하지도않고 걍 let 해도 숫자받음

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt 추가됌 맨 마지막에 n 붙이면 빅인트
//크롬 사파리만 사용가능
const bingInt = 123456789123456789n;
console.log(`value: ${bingInt}, type: ${typeof bingInt}`);

//string
const greeting = "hello";
console.log(`value: ${greeting}, type: ${typeof greeting}`);

//boolean
//false 는 0

//null 텅 빈 값, null을 할당
let  nothing = null;

//undefined 선언은 됬지만 값이 할당이 안됌
let x;


//symbol 는 나중에 map 같은 것에 고유한 식별자 필요할 때 쓰임
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2); //false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2); //true

//object
// const ellie 는 못바꿔도 안에 값들은 바꿀수있다.
const ellie = {name: "ellie", age: 20};
ellie.age = 24;

//5. Dynamic typing 언어
//값 선언 시에는 타입 지정없다가, 런타임 중 들어오는 값에 의해 타입 정해짐
//그래서 런타임에러가 많다 ㅎ




