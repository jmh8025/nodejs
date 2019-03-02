//ex03_export.js
// 사용자 정의 모듈을 추가한다. module.exports  추가


//  옛날 방식
/*
let calc = {}
calc.plus = function(x,y){
    return x + y;
}


calc.minus = function(x,y){
    return x - y;
}


module.exports = calc;

*/
//js에서 클라스 만들기

//  calc 클래스 생성자
/*
function calc(){
    this.result = 0;
}

calc.prototype.plus = function(x,y){
    this.result = x + y;
    return this.result;
}

calc.prototype.minus = function(x,y){
    this.result = x - y;
    return this.result;
}
*/
//module.exports = new calc();

// 클라스 자체를 넣어 줄수 있다.
//module.exports = calc;



//  ES  방식으로 클라스 선언 class  키워드가 있다.

class Calc{
    constructor(){
        this.result = 0;
        
    }
    
    plus(x,y){
         this.result = x + y;
        return this.result;
    }
    minus(x,y){
         this.result = x - y;
        return this.result;
    }
}

module.exports  = Calc;
