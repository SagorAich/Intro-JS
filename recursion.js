function factorial (n){
    if(n==1){
        return 1;
    }
    return n*factorial(n-1); 
}
 var fact = factorial(10);
 console.log(fact)