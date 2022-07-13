function largestElement(numbers){
    let largest = numbers[0];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]>largest){
            largest=numbers[i];
        }
    }
    return largest;
}

const ages = [11,16,18,55,89,101,150];
const output=largestElement(ages);
console.log('Oldest:',output);

const output1=largestElement([-8,-80,-1,-4,-2,-8,-9]);
console.log('Oldest:',output1);