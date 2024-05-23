const arr1 =[1,2,3,4,5]
const arr2 =["manzar","nawaz","ayush","devansh","yogesh"]
// console.log(arr1.length);
// arr1.push(arr2)
// console.log(arr1);
// //console.log(arr1[3][1]);
// console.log(arr1.length);

//use concat
// const newarr = arr1.concat(arr2);
// console.log(newarr);
// console.log(newarr[7]);

//best use
// const newarr2 = [...arr1,...arr2] 
// console.log(newarr2);

//array in array
// const newarr3 = [1,2,3,[4,5],7,5,[3,4,5,[1,2]]]
// console.log(newarr3);
// console.log(newarr3.flat(Infinity)); //flat use convert all element in single array

console.log(Array.isArray("Manzar"));  //false bcz Array class me koi manzar name ka array nhi h
console.log(Array.from("Manzar"));     //create array of manzar in Array class
//console.log(Array.frome(name : "Manzar")); //intersting research

let score1=230
let score2=445
let socre3=100
console.log(Array.of(score1,score2,socre3)); //create array from scores
