'use strict';

//Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'oragne'];
  const result = fruits.join(', and ');
  // console.log(result);
}

//Q2. make an array out of a String
{
  const fruits = 'apple,banana,oragne';
  const result = fruits.split(',');
  // console.log(result);
}

//Q3. make this array look like this
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  // console.log(result);
  // console.log(array);
}

//Q4. make new array without the first two elements
// splice 사용하면 array.splice(0,2) splice는 삭제된 게 리턴됌
// splice 는 배열 자체를 삭제하는 기능
//slice가 배열에서 원하는 부분만 지정하여 새 배열 생성
{
  const array = [0, 1, 2, 3, 4];
  const result = array.slice(2, 5);
  // console.log(result);
  // console.log(array);
}
class Student {
  constructor(name, age, enroller, score) {
    this.name=name;
    this.age=age;
    this.enroller=enroller;
    this.score=score;
  }
}

const students =[
  new Student('A',29, true, 45),
  new Student('B',28, false, 80),
  new Student('C',30, true, 90),
  new Student('D',40, false, 66),
  new Student('E',18, true, 88)
];

//Q5. find 는 오브젝트 하나 반환
{
  const result = students.find((student) => student.score ===90);
  // console.log(result)
}

//Q6 filter은 배열 반환
{
  const result = students.filter((student) => student.enroller);
  // console.log(result)
}

//Q7 필터로 값 뺀 후 새로운 배열생성
{
  const reuslt = students.map((student) => student.score);
  // console.log(reuslt);
}

//Q08. check if there is a student withe the score lower than 50
// some은 조건 검색 후 true , false 반환함
// every는 모두 다 true일때만 true
{
  const result = students.some((student) => student.score < 50);
  // console.log(result)

  const result2 = students.every((student) => student.score < 50);
  // console.log(result2)
}

//9 평균점수, 그 전에 값 누적 로직에 reduce 사용
// reduceRight 쓰면 배열 거꾸로 시작
// prev 이전에 콜백함수에서 리턴된 값이 전달 된다.
{
  const result = students.reduce((prev, curr) => {
    // console.log('~~~~~~~~~~~~~');
    // console.log(prev);
    // console.log(curr);
    return prev + curr.score;
  }, 0);

  // console.log(result)
  // console.log(result/students.length)
}

//10 조건 검색 후 String으로 변환
{
  const result = students
    .map((student) => student.score) // 학생 배열을 점수 배열로 변환
    .filter((score) => score >=50) // 점수 조건 문
    .join(); // 배열을 스트링으로 변환
  // console.log(result);
}

//11 학생들의 점수를 정렬해서 스트링으로 변환
{
  const result = students
    .map((student) => student.score)
    .sort((a,b)=> a-b) // 오름차순이며
    .join();
  console.log(result);
}
