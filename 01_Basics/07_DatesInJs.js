const myDate = new Date();
// console.log(typeof myDate);  //object

// console.log(myDate);
// console.log(myDate.getDate()); //23(current date)
// console.log(myDate.toLocaleString());
// console.log(myDate)

let myCreateDate = new Date(2024 , 4 , 24)
// console.log(myCreateDate);
// console.log(myCreateDate.toDateString());
// myCreateDate = new Date("01-14-2023")
// console.log(myCreateDate.toDateString());

// let MytimeStamp =  Date.now();
// console.log(MytimeStamp);
// console.log(MytimeStamp.toLocaleString());
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); 
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    
}))