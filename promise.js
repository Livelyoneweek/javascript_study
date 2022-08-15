'use strict';

//promie is a javascript object for asychronous opertion.
//State: pending -> fulfilled or rejected
//Producer vs Consumer

//1. Producer
//프로미스는 만들어지순간 실행함
//when new promise is created, the executor runs automatically
const promise = new Promise((resolve,reject)=> {
  //doing some heavy work(network,read files)
  console.log('doing something...');
  setTimeout(()=> {
    resolve('ellie');
    // reject(new Error('no network'))
  },2000);
})
//에러는 자바스크립트에서 제공하는 오브젝트

//2. Consumers: then, catch, finally
// 프로미스가 정상적으로 실행되면 리졸브 콜백함수를 통해 then으로 전달
promise
  .then((value) => {
  console.log(value);
})
  .catch(error => {
    console.log(error);
  })
  .finally(()=> {
    console.log('finally yeaa');
  })

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000)
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));

//4. Error handling
const getHen = () =>
  new Promise((resolve, reject) => {
  setTimeout(() => resolve('🐓'), 1000)
  });

// const getEgg = hen =>
//   new Promise((resolve,reject) => {
//     setTimeout(() => resolve(`${hen}=> 🥚`), 1000)
//   });

const getEgg = hen =>
  new Promise((resolve,reject) => {
    setTimeout(() => reject(new Error(` error ${hen}=> 🥚`)), 1000)
  });

const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg}=> 🍳`),1000)
  });

// getHen()
//   .then(hen => getEgg(hen))
//   .then(egg => cook(egg))
//   .then(meal => console.log(meal));

//위 를 줄인 것
getHen()
  .then(getEgg)
  .catch(error => {
    return '🧇';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);


