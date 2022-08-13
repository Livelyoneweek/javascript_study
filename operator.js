//1. String concatenation
console.log('my' + 'cat');
console.log(`String literals
////
1 + 2 = ${1 + 2}`);


//2. Numeric operators
console.log(1 + 1);

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter +1;
// preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, counter:${counter}`);

const postIncrement = counter++;
//postIncrement = counter;
//counter = counter +1;
console.log(`postIncrement : ${postIncrement}, counter:${counter}`);

//4. Assignment operators
let x =3;
let y =6;
x +=y; // x=x+y;

//5.Comparison operators
console.log(10 < 6);
console.log(10 <= 6);

//6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

//중요한점 or이나 and나 앞에 true, false로 이미 답이 정해지면 뒤에꺼
//실행 안함 즉 오래걸리는건 가장 마지막에 위치하는게 유리
console.log(`or: ${value1} || ${value2} || check()`);

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('hhh');
  }
  return true;
}

//7. Equality
//== loose equality 타입 상관없이 값만 비교
//=== strict equality 타입도 같아야함

console.log(0 == false); //t
console.log(0 === false); //f
console.log('' == false); //t
console.log('' === false); //f
console.log(null == undefined); //t
console.log(null === undefined); //f

//8.Conditional operators: if
//if, else if, else

//9. Ternary operator: ?
//condition ? value1 : value2;
console.log(name === 'elllie' ? 'yes' : 'no');

//10. Switch
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go Away');
    break;
  case "Chrome":
    console.log('Chrome Away');
    break;

  default:
    console.log("yyyy");
    break;
}

//11.Loops
let i = 3;
while (i > 0) {
  console.log(`while:${i}`);
  i--;
}

//12.do while loop
//블럭을 먼저 실행
do {
  console.log(`do while :${i}`);
  i--;
} while (i > 0);

//for loop, for(begin; condition; step) {}


//모든 조건문에 break, continue 사용 가능
