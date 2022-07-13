function animalCount(miles){
    if(miles<=10 && miles>0){
        const count=miles*10
        return count;
    }
    else if(miles<=20 && miles>10){
        const a=100+(miles-10)*50;
        return a;
    }
    else if(miles<=0){
        return 'dont use negative number';
    }
    else{
        return 600+(miles-20)*100;
    }
}
console.log(animalCount(25));

// not same as jhankar mahbub bro (21.9)