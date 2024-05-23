 const arr = [1,2,3,4]
// console.log(typeof arr);
// console.log(arr);
// arr.push(344)     
// console.log(arr); //insert element at last ..
// arr.pop()         //delete value from top
// console.log(arr);
// console.log(arr)

// const arr2 = [1,"manzar",4,2,"java",3.2] //you can dissimiliar type of array
// console.log(arr2);
// console.log(arr2.length);
// console.log(arr2[1]);

const arr3 = new Array(1,2,3,4)
// console.log(arr3);
// console.log(typeof arr3);
// console.log(arr3.length);

//Methods........
arr3.push(5);
arr3.push(6);   //insert at ending
arr3.pop();     // remove from end
console.log(arr3);

arr3.unshift(8);
arr3.unshift(9);  //insert at bigning
arr3.shift();     //remove from befgining
console.log(arr3);

const arr4 = new Array(3,4,2,4,5,2,3,5)
console.log(arr4.indexOf(4)); //1
console.log(arr4.includes(2)); //true
console.log(arr4.includes(45));

const newarr = arr4.join();
console.log(arr4);
console.log(newarr);  //now become a string 
console.log(typeof newarr);

//Diff between slice and splice.........
const arr5 = [1,2,3,4,5,6,7,8,9]
console.log("A", arr5);

const myn1=arr5.slice(1,5) 
console.log("B",myn1);      //B [2,3,4,5]
console.log("A" ,arr5);     //A [1,2,3,4,5,6,7,8,9]

const myn2 = arr5.splice(1,5)
console.log("C" , myn2);   //C [2,3,4,5,6]
console.log("A" , arr5);   //A [1,7,8,9]