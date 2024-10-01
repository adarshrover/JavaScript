//undefined
//null
let firstName;
console.log(typeof firstName);
firstName="Adarsh";
console.log(typeof firstName,firstName);

//const cannot be defined without a value
// const name;

//null
let myVariable= null;
console.log(myVariable);
myVariable="Adarsh";
console.log(myVariable,typeof myVariable);
console.log(typeof null);


//BigInt
let myNumber=BigInt(2346466464646646466464644646464); //1st method for BigInt
let sameMyNumber=233335355353535335535535353355n //2nd method

console.log(myNumber);
console.log(sameMyNumber);

//maximum number of int datatype
console.log(Number.MAX_SAFE_INTEGER);