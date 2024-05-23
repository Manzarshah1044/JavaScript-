//Nested object....
const name = {
    id : 07,
    fullname : {
        username: {
            firstname: "manzar",
            lastname: "shah"
        }
    }
}
const name2={}
name2.name ="abc"
name2.id=33
console.log(name2);

console.log(name2);  //empty obj print {}

console.log(name.fullname.username.firstname);

//merging the object........

const obj1 ={1:"a" , 2:"b"}
const obj2 ={3:"c" , 4:"d"}

// const obj3 = {obj1,obj2}
// console.log(obj3);

// const obj4 = Object.assign({},obj1,obj2) //convert in sigle obj
// console.log(obj4);
// console.log(obj4["3"]);

//best use
// const obj5 = {...obj1,...obj2}  //merger or concat in single object
// console.log(obj5);

// //object from constructor
// const newobj = new Object() //singleton object.........
// newobj.id=12
// console.log(newobj); //empty object print {}

const Student ={
    name : "Azeem gaur",
    course : "Mca",
    rollno : 98,
    section : "B",
    email : "xyz@gmail.com"
}
console.log(Object.keys(Student));  //onle keys(name,roll etc) print in array form
console.log(Object.values(Student)); //onle value of keys print in array form
console.log(Object.entries(Student)); //both key and value print in array form

//objectss in Array...

const user = [
    {
        name: "user1",
        id : 1
    },
    {
        name: "user2",
        id : 2
    },
    {
        name: "user2",
        id : 2
    },
]
console.log(user[1].name);

//cheak prop include or not in object.....
console.log(Student.hasOwnProperty('name')); //if yes then true otherwise false 

//Destructuring in object
const course ={
    name : "js",
    price: 543,
    teacher : "xyz"
}
console.log(course.teacher);
const {teacher} = course //xyz
console.log(teacher);   //less name print xyz
const {teacher : t} = course  //you can change name
console.log(t); //xyz

// //jason (object withour name)
// {
//     "name"= "abc",          //keys and value both string
//     "price" = "free"
// }