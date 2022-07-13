// what will the 5th value of fibonacci?

/* function fibonacci(num){
    if(num==0){
        return 0;
    }
    if(num==1){
        return 1;
    }
    return fibonacci(num-1)*fibonacci(num-2);
}

console.log(fibonacci(5)); */


// fibonacci series by recursion 

function fibonacciSeries(n){
    if(n==0){
        return [0];
    }
    if(n==1){
        return [0,1];
    }
    let fibo=fibonacciSeries(n-1);
    fibo[n]=fibo[n-1]+fibo[n-2];
    return fibo;
}

console.log(fibonacciSeries(5));