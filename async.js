'use strict';

//async & await
//clear style of using promis

//1. async
//async 키워드 쓰면 promise로 바뀜
async function fetchUser() {
    return 'ellie' ;
}

const user = fetchUser();
// user.then(console.log)
// console.log(user);

//2. await
//await 쓰면 동기적으로 함
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return '🍎'
}

async function getBanana() {
  await delay(2000);
  return '🍌';
}

async function pickFruits() {

  //병렬 실행
  const applePromise = getApple();
  const bababaPromise = getBanana();

  const apple = await applePromise;
  const banana = await bababaPromise;
  return `${apple} + ${banana}`;
}

// pickFruits().then(console.log);

//3. usuful Promise APIs
//모든 프로미스를 병렬적으로 다 모음
function pickAllFruits() {
  return Promise.all([getApple(),getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log)

// 먼저 실행되는거 하나만 받겠다.
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log)
