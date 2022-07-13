// var student1 = {
//     id : 115,
//     name : 'Abir Adnan',
//     marks : 81,
//     phone : 12345678
// };

// var mobile = {
//     color : 'black',
//     storage: '16GB',
//     price : 19000,
//     screenSize : 6
// }

// var book = {
//     title:'start with why',
//     author:'Simon Sinel',
//     price:300,
//     pages:455,
//     publisher:'penguin'
// }

var computer = {
    price:15000,
    storage:'34GB',
    processor: 'intel i5',
    color:'silver'
};
console.log(computer);

console.log(computer.color);

var computerPrice=computer.price;
console.log(computerPrice);
// set a object property value 

computer.price=50000;
console.log(computer.price);

computer['price']=52000;
console.log(computer['price']);