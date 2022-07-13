const greeting='hello,how are you?';

function reverseString(text){
    let reverse='';
    for(let letter of text){
        console.log(letter);
        reverse=letter+reverse;
    }
    return reverse;
}
const reversed=reverseString(greeting);
console.log(reversed);