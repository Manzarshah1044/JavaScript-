let score = 23
let name = "Manzar"

//for type cheak any value
console.log(typeof(score))  
//or
console.log(typeof score)
console.log(typeof name)

//type Conversion..
let ScoreInString = String(score)
console.log(typeof ScoreInString)  // now 23 => String 
console.log(ScoreInString)         //print 23

let NameInNumber = Number(name)
console.log(typeof NameInNumber)   //print Number
console.log(NameInNumber)          // print NaN(Not a Number)

let StringValue = "hello"
let StringInBool = Boolean(StringValue)
console.log(typeof StringInBool)  //boolean
console.log(StringInBool)        //true
let str1=""  
let bool1 = Boolean(str1)   
console.log(bool1)
console.log(typeof bool1)

//type cheak undefineded and null
let var1 = null
let var2 = undefined
console.log(typeof var1) //object
console.log(var1)       // undefined
console.log(typeof var2) //undefined
console.log(var2)      //undifined

/*
  "21" => 21  String to number (print 21)
  "23abc" =>  string to number (print Nan)
  1 => true
  0 => false
  "" =>false
  "manzar" => true
   null => objct(type)
   undefined => undefined(type)


*/

//*****************Operation****************
//A Number and Number
let value = 8
let negvalue = -value
console.log(negvalue) //-8
console.log(2**3)     //8
console.log(2-2)     //0
console.log(2/3)     //0.6666666666666666
console.log(2%3)     //2

//B. String and String 
let str = "hello"
let str2 = "javascript"
console.log(str + str2)  //hellojavascript

//C. String and Number
let str3="manzar"
let id=864
let manzar = str3+id
console.log(manzar)     //mazar864
console.log(2+"1")      //21
console.log("3"+4)      //34
console.log("1"+2+4)    //124
console.log(1+2+3+"4")  //64
console.log((3+4)*5%3)  //2
console.log(+true)      //1
console.log(+"")        //0
let num1,num2,num3
num1=num2=num3=2+2 
console.log(num1);    //4
console.log(num1+num2+num3);  //12
let a=10
++a;
console.log(a);  //11
a++;
console.log(a); //12
 
