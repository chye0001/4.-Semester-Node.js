// hoisting
// description: line 3 is called hoisting, since the function is initilized on line 5 after line 3. 
//              so it bubbles up to where its called. In JS the sequence does not matter. 
console.log(getRandomInt(0, 10))






//TODO ask GPT what the difference is
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) - min);
}

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max));
}

const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) - min);
}; // Notice we have a statement here so it ends with a semicolon ";". 
   // Functions do not

const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) - min);
}; // Same here




              //name: string  |  action: function
function genericPerformer(name, action) {
    return action(name);
}

// callback function
// description: callback function is a function that is passed as a parameter/argument to another function
//              possibly with the aim of calling it latter (but not NOECESSARILY), very important.
const codingAction = (name) => `${name} likes coding.` 

// assignment: 

console.log(genericPerformer("Lasse", codingAction));



function sleepingAction(name) {
    return `${name} loves sleeping`;
}

console.log(genericPerformer("Andreas", sleepingAction));

console.log(genericPerformer("Tara", (name) => `${name} owns at boxing`));