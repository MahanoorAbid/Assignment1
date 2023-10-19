//equality or in equallity
let fruit1: string = "apple";
let fruit2: string = "orange";
let fruit3: string = "apple";

console.log("equality and inequality");

console.log(fruit1 === fruit2); 
console.log(fruit1 === fruit3); 
console.log(fruit1 !== fruit2); 
console.log(fruit1 !== fruit3); 

//lowercase
const text1: string = "Hello World";
const text2: string = "hello world";

console.log("lower case");

console.log(text1.toLowerCase() === text2.toLowerCase()); 


//numerical
const num1: number = 10;
const num2: number = 5;

console.log("numeric");

console.log(num1 > num2);  
console.log(num1 < num2);  
console.log(num1 >= num2); 
console.log(num1 <= num2); 
console.log(num1 === num2); 
console.log(num1 !== num2); 


//and or opp
const age: number = 25;
const isStudent: boolean = true;

console.log("operator");

console.log(age > 18 && isStudent);  
console.log(age > 18 || isStudent);  
console.log(age <= 18 || isStudent); 


//Test whether an item is in an array:
const fruits: string[] = ["apple", "orange", "banana"];
const searchFruit: string = "orange";
const notInArray: string = "grape";

console.log("Test whether an item is in an array");

console.log(fruits.includes(searchFruit));  
console.log(fruits.includes(notInArray));   

//Test whether an item is not in an array:
console.log("Test whether an item is not in an array");
console.log(!fruits.includes(searchFruit)); 
console.log(!fruits.includes(notInArray));  
