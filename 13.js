//truthy and falsy value

// below values are falsy values
// false
// ""
//null
//undefined
//0

// let firstName="";
// let firstName=false;
// let firstName=null;
// let firstName;
let firstName=0;

if(firstName){
    console.log(firstName);
}
else{
    console.log("firstName is kinda empty");
}

//below values are truthy values
// "abc"
//1,-1

let secondName=-1;

if(secondName){
    console.log(secondName);
}
else{
    console.log("secondName is kinda empty");
}
