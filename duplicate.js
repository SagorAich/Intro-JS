const name=['abul','babul','cabul','dabul','ebul','fabul','babul','ebul','babul','gabul','abul','habul','dabul'];

function removeDuplicate(naming){
    const unique=[];
   /*  for(i=0; i<naming.length; i++){ 
        console.log(naming[i]);    
    }
     */
    for(const element of naming){
        console.log(element);
        if(unique.indexOf(element)==-1){
            unique.push(element);
        }
    }
    
    return unique;
}

// console.log(removeDuplicate(name));
console.log(removeDuplicate(name))
