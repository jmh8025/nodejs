//ex03_exports.js
//사용자 정의 모듈을 modules.exports에 추가
//객체 , 클래스 , 함수 등 모두 추가 가능

/*let calc = {};

calc.plus = function(x, y){
    return x+y;
}

calc.minus = function(x, y){
    return x-y;
}

module.exports = calc;*/



/*************js에서 클래스 만들기*************/
//Calc 클래스 생성자 정의
/*function Calc(){
    this.result = 0;
}

Calc.prototype.plus= function(x, y){
    this.result = x+y;
    return this.result;
}

Calc.prototype.minus= function(x, y){
    this.result = x-y;
    return this.result;
}
//module.exports = new Calc();
module.exports = Calc;*/

/*************ES에서 클래스 만들기*************/
class Calc{
    constructor(){
        this.result = 0;
    }
    
    plus(x, y){
        this.result = x + y;
        return this.result;
    }
    minus(x, y){
        this.result = x - y;
        return this.result;
    }
}
module.exports = Calc;



//virtual box 환경
//vagrant
//or
//docker - 윈도우10 pro에서 그냥 사용가능




