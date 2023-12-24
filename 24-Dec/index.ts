let myname: string | null | number; // union literals
myname = 123;

let myAge: string | number;
myAge = 16; //narrowing
console.log("myAge");

// myAge = "todat is mh name";
// console.log(myAge);

// myAge = Math.random() > 0.6 ? "Khan" : 60;
