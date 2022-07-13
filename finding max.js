/* var num1 =100;
var num2=101;
var num3=102;

var max=Math.max(num1,num2,num3);
console.log('largest num is:',max); */


// finding maximum of 3 vaules
/* function max(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1;
    }
    if(num1<num2 && num2>num3){
        return num2;
    }
    else{
        return num3;
    }
}
var maximum =max(100,101,103);
console.log(maximum); */

function min(num1,num2,num3){
    if(num1<num2 && num1<num3){
        return num1;
    }
    if(num2<num1 && num2<num3){
        return num2;
    }
    else{
        return num3;
    }
}
var minimum =min(100,101,103);
console.log(minimum);