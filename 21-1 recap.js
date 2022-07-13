function largestElement(numbers){
    let max=numbers[0];
    for(let i=0; i<numbers.length; i++){
        if(max<numbers[i]){
            max=numbers[i];
        }
    }
    return max;
}

const array=[4,2,5,9,10];
const output=largestElement(array);
console.log(output);
