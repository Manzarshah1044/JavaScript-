//function........
function myname()
{
    console.log("manzar shah");
}
myname();
myname();

//with parameter........
function add(a,b)
{
    
    return a+b
}
let sum =add("a",6)
console.log(sum);   //a6
let sum2 =add(5,6)
console.log(sum2);  //11

function loginusermessage(username)
{
    if(!username)                 //if not string pass then username store undefined that is false
        {
        console.log("please enter user name");
        return
        }
        return `${username} logged in`
}
console.log(loginusermessage()); 
console.log(loginusermessage("manzar"));

// (...uses)

// function Mobcartprice(...val)
// {
//     return val
// }
function Mobcartprice(val1,val2,...rest) //that mean val1=2343,val2=22,rest=[33,44,55,33]
{
    return rest
}
// function Mobcartprice(val)
// {
//     return val
// }
console.log(Mobcartprice(2343,22,33,44,55,33,));  

//object pass in function
const user ={
    name : "azeem",
    id : 07,
    email :" xyz@gmail.com"
}
function myobj(anyobj)
{
console.log(`my name is ${anyobj.name} and id is ${anyobj.id}`);
}
// myobj(user);
//or
myobj(
    {
    name : "manzar",
    id : 4
    }
)


//array pass in function

function arrfunction(arr2)
{
  console.log(arr2);
}
// let arr =[1,2,3,4,5,6];
// arrfunction(arr)
// //or
arrfunction(
    arr=[23,4,5,6]
)
function returnlength(getarray){
    return getarray.length;
}
console.log(returnlength([2,3,4,5,6,43,2,1,1]));