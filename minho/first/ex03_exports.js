//사용자 정의 모듈을 modules.exports 추가
//객체, 클래스, 함수 등 모두 추가 가능

//let calc = {};
//calc.plus = function(x,y){
//    return x + y;
//}
//calc.minus = function(x,y){
//    return x - y;
//}



//
//function Calc() {
//    this.result = 0;
//}
//
//Calc.prototype.plus = function(x,y) {
//    this.result = x + y;
//    return this.result;
//}
//
//Calc.prototype.minus = function(x,y) {
//    this.result = x - y;
//    return this.result;
//}
//
//module.exports = Calc;




// ES방식으로 클래스 선언 - class 키워드가 있다.
class Calc {
    constructor() {
        this.result = 0;
    }
    
    plus(x,y){
        this.result = x + y;
        return this.result;
    }
    
    minus(x,y){
        return x-y;
    }
}

module.exports = Calc;

