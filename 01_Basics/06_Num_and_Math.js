const num = 324
console.log(num)           //324
console.log(typeof num);   //number

const num2 = new Number(134);
console.log(num2);         //[Number : 134]
console.log(typeof num2);  //object

let a=12
let b=54
console.log(Math.abs(a-b));   //difference if negative value then converted +ve value
let num3= new Number(43453223.34)
console.log(num3.toString.length);  //convert num to string the find length of number...

let num4=123.36
console.log(num4.toFixed(3));       //print 3 decimal value after point.......
console.log(num4.toPrecision(4));   //print 123.4  

const num5 = 108700
console.log(num5.toLocaleString()); //by default doller  108,700
console.log(num5.toLocaleString(`en-IN`));  //now indian 1,08,700

//*****************************Maths******************************* */

// console.log(Math);
// console.log(Math.floor(3.65));  // print lower value 3
// console.log(Math.floor(4.23));  //4
// console.log(Math.ceil(3.43));   //4
// console.log(Math.ceil(6.5));  //print upper value  //7
// console.log(Math.round(45.23));  //45
// console.log(Math.round(45.65));  //46
// console.log(Math.round(45.5));   //46

console.log(Math.random());  //print value between 0 and 1 
console.log(Math.random()*2); //print value between 0 and 2 
console.log((Math.random()*10) +1 ) //print value between 1 amd 11  with decimal
console.log(Math.floor((Math.random()*10) + 1))  //print value between 1 and 11 withour decimal
//we use formula 
let min =5
let max =20
console.log(Math.floor(Math.random()*(max-min+1)) + min); //now print value randomly 5 to 20 




