function isLeapYear(year){
    if((year%4 == 0) && (year%400 == 0) || (year%100 != 0)){
        return true;
    }
    else{
        return false;
    }
}

// var myYear = prompt('Enter a year:');
// const result =isLeapYear(myYear);
// console.log(result);

const myYear = prompt('Enter:');
const result= isLeapYear(myYear);
console.log(result);

