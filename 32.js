// while loop in array

const fruits=["apple" ,"mango" , "grapes"];

let i=0;
const fruits2=[];
console.log(fruits.length);
while(i<=fruits.length-1){
    fruits2.push(fruits[i].toUpperCase());
    
    // "\r\n" is used for multi line output

    i++;
}
console.log(fruits2);
