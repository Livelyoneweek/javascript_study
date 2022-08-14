'use strict';

//javascript is sychronous(동기, 순서대로실행)
// Execute the code block by order after hoistion.
//호이스팅이란 바, 함수 선언들이 제일 위로 올라감
//호이스팅 이후 코드가 나타나는대로 실행됌

// console.log('1');
// setTimeout(() => console.log('2'), 1000);
// console.log('3');

//Synchronous callback
function printImmediately(print) {
  print();
}

// printImmediately(() => console.log('hello'));


//ASynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

// printWithDelay(() => console.log('async callback'),2000);

//Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(()=>{
      if(
        (id==='ellie' && password==='dream') ||
        (id==='coder' && password==='academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    },2000)
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(()=> {
      if(user==='ellie') {
        onSuccess({name:'ellie',role:'admin'});
      } else{
        onError(new Error('no access'));
      }
    },1000)
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your paswword');
userStorage.loginUser(
  id,
  password,
    user => {
  userStorage.getRoles(
    user,
    userWithRole => {
      alert(`Hello ${userWithRole.name}, you hava a ${userWithRole.role} role`);
    },
    error => {
      console.log(error)
    }
  );
},
  error => {
    console.log(error);
  }
);
