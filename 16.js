//and , or operator


let firstName="adarsh";
let age=22;

// if(firstName[0] === "A"){
// console.log("your name starts with A");
// }
// if(age>=18){
// console.log("your age is above 18");
// }

if(firstName[0] === "A" && age>18){
    console.log("Name starts with A and above 18");
}
else if(firstName[0] === "A" || age>18){
    console.log("only one condition is satisfied")
}
else{
    console.log("condition is not satisfied");
}