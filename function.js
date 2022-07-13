// function startFan(){
//     console.log('walk toward the switch');
//     console.log('press the switch');
// }

// startFan();

// function bringSingara(taka){
//     console.log('Price of Singara:',taka);
//     var singaraPrice = 10;
//     var singaraQuantity = taka/singaraPrice;
//     return singaraQuantity;
// }
// var unit = 100;
// var singara = bringSingara(unit);
// console.log(singara);

// function addTwoNumbers(num1,num2){
//     console.log(num1,num2);
//     var total = num1 + num2;
//     return total;
// }
// var f1 = 3;
// var f2 = 4;
// var sum = addTwoNumbers(f1,f2);
// console.log('summation result:',sum);



// function multiply(n1,n2){
//     console.log(n1,n2);
//     var result = n1*n2;
//     return result;
// }

// var mul = multiply(2,10);
// console.log('multiplication result:',mul);


function isMoonUp(time){
    if(time>=5 && time<19)
    {
        return false;
    }
    return true;
}

var moonStatus=isMoonUp(41);
console.log(moonStatus);