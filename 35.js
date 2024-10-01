// array destructing

const myArray=["value1" , "value2" , "value3" ,"value4"];

// let myVar1=myArray[0];
// let myVar2=myArray[1];
// console.log("value of myVar1 : " ,myVar1 );
// console.log("value of myVar1 : " ,myVar2);



// // const [myVar1, ,myVar2]=myArray; // add one more comma to skip an element

// //  let [myVar1,myVar2]=myArray;

// myVar1="value changed"; // gives error as it is constant
// console.log("value of myVar1 : " ,myVar1 );
// console.log("value of myVar1 : " ,myVar2);

//making an array to store remaining value of destructed array

const [myVar1,myVar2, ...myNewArray]=myArray;
console.log(myNewArray);