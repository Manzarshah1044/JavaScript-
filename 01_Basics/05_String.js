const name = "manzar"
const id=32
//console.log(name + id + "hello");  old use
console.log(`Hello my name is ${name} and id is ${id} `);  // we use this new
const gameName = new String("Mario and Temple");
//now we use many function of gameName 
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));
const newstring = gameName.substring(2,6);
console.log(newstring);
console.log(gameName.length);
const secondstr = gameName.slice(-16,5);
console.log(secondstr);
console.log(gameName.trim());
console.log(gameName.split(' '));

// you can see all function in mdn use and practise.........