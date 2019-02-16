//util을 이용한 클래스 상속

var util = require('util');

// function Parent(){ // Parent 클래스의 생성자겸 클래스
//     this.name = "parent class";
// }
// Parent.prototype.sayHello = function(){
//     console.log(`hello. from ${this.name}`);
// }

// function Child(){
//     this.name = "child class";
// }

// util.inherits(Child,Parent);

// var c = new Child();
// c.sayHello();


class Parent{
    constructor(){
        this.name = "parent";
    }
    sayHello(){
        console.log(`hello. from ${this.name}`);
    }
}

class Child extends Parent {
    constructor(){
        super(); //부모의 생성자를 명시적 호출
        this.name = "child";
    }
}

var c = new Child();
c.sayHello();