'use strict';
//Javascript classes 는 ES6에 들어옴

class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  //methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);

//2. getter and setters
class User {
  //constructor
  constructor(firstName, lastName, age) {
    //fields
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value <0 ? 0: value;
  }
}

//3.Fields (public private)
//Too soon 적용된지 얼마안됌
class Experiment {
  publicField =2;
  #privateField=0; // #붙으면 private임

}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); //언디파인드 나옴

//4. Static properties and methods
class Article {
  static publisher = "Dream Coding";

  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}
const article1= new Article(1);

// static 붙은 메소드 호출할 시에는 클래스를 지정하고 해야함
console.log(Article.publisher);
Article.publisher

//5. Inheritance
class Shape {
  constructor(width, height, color) {
    this.width =width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}
///////////////////////////////////////////////////////////

class Rectangle extends Shape {}

// 오버라이딩 가능
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('tt');
  }

  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());


const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//6. Class checking instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(rectangle instanceof Shape);
console.log(rectangle instanceof Object);
