console.log("Hello world")

// const is NOT a constant
// that means that const CAN have its value changed
// const is a constant in the DECLARATION
// const MUST be declared as it is initialized, i.e. you MUST declare/initilize it with a value.

// TODO What is the difference between declaration and initilizetion

const me = {};
me.name = "Bo"
console.log(me)

const hobbies = ["coding"];
hobbies.pop();
hobbies.push("chilling", "eating");

console.log(hobbies);
// ^^
// We have demostrated that const can have its values changed, but the delcatation IS constant and cant be changed.






// jsObject is not the same as JSON.
const jsObject = {

}






// "" or '' or `` = string literals
// `` = template strings
// ${} syntax = string interpolation

//String interpolation f.eks: ${2 + 2}
//String literal f.eks: ` string, html and stuff inside backtick ${2 + 2} `






const assignmentDescription = "...and the value is..."
const value = 4;

// don't use plus "+" in console.log use "," instead to avoid type coercion. A.K.A, us "," so it wont change the datatype for value to String.
// but if you use plus "+" it would change the datatype to a String. We dont want this as the console.log() is made for us devs to debug. We want to see the datatype

//do this
console.log(assignmentDescription, value)

//avoid this
console.log(assignmentDescription + " " + value)



// data types: null, undefined, object, string, number, boolean, bigint, 

