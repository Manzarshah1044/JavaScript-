
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c=4
    console.log("INNER: ", a); //10 bcz let local variable
    console.log("Inner2: ",c)
    
}



console.log(a); //300
//console.log(b); //error (b is not defined)
console.log(c); //4


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //error bcz website is not defined

     two()

}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
         console.log(username + website);
    }
    //console.log(website); //error
}

//console.log(username);//error


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }
