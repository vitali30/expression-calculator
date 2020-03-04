function eval() {return;}

function expressionCalculator(expr) {
    let array = [...expr.replace(/\s/g, "")];
    let n = 0;
    let m = 0;
    for (let el of array){
        if(el =="(")n+=1;
        else if (el ==')') m +=1; 
    }
    if(n !== m) throw new Error('ExpressionError: Brackets must be paired')
    for (let i =0 ; i < array.length ; i ++){
        if (array[i] == "/" && array[i+1] == "0") throw new Error('TypeError: Division by zero.')
    }
    let result = new Function("return " + expr.replace(/\s/g, "")); 
    return(result());
}
module.exports = {
    expressionCalculator
}