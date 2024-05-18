 /* Data Types
 1- Primitive
 2- Non Primitive

 1-Primitive...(total 7)
   1_ String
   2_ Number
   3_ Boolean
   4_ null
   5_ undefined
   6_ Symbol
   7_ BigInt

2- Non primitive(Reference)
   1_Array
   2_Objects
   3_Function
*/
//1 primitive Example....
let name ="manzar"
let score= 54233.56
const isLogin = false
let marks=null
let variable;
const id = Symbol('07') // unique value...
const id2 = Symbol('07') // id and id2 are not same bcz Symbol alwayes return unique value
console.log(id===id2);  //false
console.log(id==id2);  //false  (verified)
let num = 423334343432332434333434n
console.log(num);

//2 Non Primitive Example....
//Array
const fruits = ["apple","mango","banana","papaya"];
console.log(fruits);
console.log(fruits[2]);

//object
let myobj = {
    name :"manzar",
    id :7,
    email :"xyz@gmail.com",
};
console.log(myobj);
console.log(myobj.id);
//console.log(myobj[email]);

//function
const myfun = function(){
    console.log("hello script");
}
console.log(typeof myfun);
console.log(myfun);

console.log(typeof myobj);



