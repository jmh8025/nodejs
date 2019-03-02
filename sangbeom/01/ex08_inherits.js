// ex08_

//util을 이용한 클래스 상속

// js 형식의 클래스 선언
/*
var util = require('util');

function Parent(){ // parent  클라스의 성성자겸 클라스
    this.name = "parent class";
    
}

Parent.prototype.sayHello = function(){
    console.log(`hello. from ${this.name}`);
}

var p = new Parent();
p.sayHello();


//js 형식의 상속
 function Child(){
     this.name = "Child Class"; // 주석처리하면 부모의 것을 가져온다
 }
Child.prototype = new Parent();
Child.prototype.constructor = Child;


var c = new Child();
c.sayHello();
*/


/*
var util = require('util');

function Parent(){ // parent  클라스의 성성자겸 클라스
    this.name = "parent class";
    
}

Parent.prototype.sayHello = function(){
    console.log(`hello. from ${this.name}`);
}


 function Child(){
     this.name = "Child Class"; // 주석처리하면 부모의 것을 가져온다
 }

util.inherits(Child,Parent);


var c = new Child();
c.sayHello();

*/

class Parent {
    constructor(){
        this.name = "Parent";
    }
    
    
    sayHello(){
         console.log(`hello. from ${this.name}`);
        }
    }


class Child extends Parent{
    constructor(){
        super();
        this.name = "Child";
    }
}

var c= new Child();
c.sayHello();



