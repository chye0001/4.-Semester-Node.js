// JavaScript is single-threaded, everything runs on the main-thread

// database interactions, file handling, fetch / HTTP request (network)

// Solution 1: Callback functions
// problem with solution 1; callback hell / pyramid of doom.

// Solution 2: Promises
// Promises works with callbacks under the hood, but it is just syntaxic sugar.

// State of Promises 
// pending, fulfilled
//         resolved / rejected

new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Everything went well");
        reject("Something went wrong");
    }, 2000) // 2 sec.
})
.then((result) => console.log(result))
.catch((error) => console.log(error));
