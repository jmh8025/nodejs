//ex08_inherits.js
//util을 이용한 클래스 상속

let util = require("util");



/***** JS형식 사용법 *****/
/*function Parent(){    // Parent 클래스의 생성자 겸 클래스
    this.name = "parent class";
}
Parent.prototype.sayHello = function(){
    console.log(`Hello. from ${this.name}`);
}
function Child(){
    this.name = "child class";
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
//혹은
//util.inherits(Child, Parent);
var p = new Parent();
var c = new Child();
p.sayHello();
c.sayHello();*/





/***** ES형식 사용법 *****/
class Parent{
    constructor(){
        this.name = "Parent";
    }
    sayHello(){
        console.log(`Hello. from ${this.name}`);
    }
}

class Child extends Parent{
    constructor(){
        super();    //부모의 생성자 명시적 호출
        this.name = "Child";
    }
}

let c = new Child();
c.sayHello();