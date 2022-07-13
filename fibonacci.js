/* const fibo=[0,1];
for(let i=2; i<=10; i++){
   fibo[i]=fibo[i-1]+fibo[i-2]; 
}
console.log(fibo); */


/* function fibonacciSeries(num){
        const fibo=[0,1];
        for(let i=2; i<=num; i++){
            fibo[i]=fibo[i-1]+fibo[i-2]; 
        }
        return fibo;
}

const output=fibonacciSeries(1);
console.log(output); */


function fibonacciSeries(num){
    if(typeof num != 'number'){
        return 'Please give a number.'
    }
    if(num < 2){
        return 'Please enter a number greater than 2'
    }
    const fibo=[0,1];
    for(let i=2; i<num; i++){
        fibo[i]=fibo[i-1]+fibo[i-2]; 
    }
    return fibo;
}

const ouput=fibonacciSeries(5);
console.log(ouput);