//Object Create .....
  //1. Object literal(normally)
  //2. singleton(with the help of constructor)

  mysym = Symbol("key1")

  const firstObj =
  {
    "Name" : "Manzar Shah",   //by default as a string hi manta hai ( "Name" or Name both are same)
    id   : 07,
    email : "some@gmail.com",
    isloggedin : false,
    lastloggin : ["sun","sat","mon"],
    [mysym] : "mykey1",
    location : "mzn"
  }

//   console.log(firstObj.Name);
//   console.log(firstObj["Name"]);
//   console.log(firstObj[mysym]); //key not in string bcz this is symbol
//   console.log(firstObj.mysym);  //undefined 
//   console.log(firstObj.lastloggin);
//   console.log(firstObj.isloggedin);

firstObj.email="newsome@gmail.com";  //email changed
console.log(firstObj.email);

//you can freez the object then not possible to any change
// Object.freeze(firstObj)
// firstObj.email= "xyz@gmail.com"
// console.log(firstObj.email); //print old email not error not changed bcz freze


firstObj.var1 = 10        //you can also after assign the object
console.log(firstObj.var1);

//function uses in object
firstObj.Greeting = function(){
    console.log("hello javascript");
}

firstObj.Gtr2=function(){
    console.log(`hello javascript user, ${this.Name} `);
}
console.log(firstObj.Greeting());
console.log(firstObj.Gtr2());