// var result=1;
// for(var i=1; i<=4; i++)
// {
//    result=result*i;
// }
// console.log(result);


// var result=1;
// function factorial(num){
//     for(var i=1; i<=num; i++)
//     {
//         result=result*i;
//     }
//     console.log(result);
// }

// factorial(10);

var result=1;
function factorial(num){
    while(num>0){ 
        result = result*num;
        num--;
    }  
    return result;  
}
var output=factorial(4);
console.log('Factorial is:',output);