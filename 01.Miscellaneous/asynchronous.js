// JavaScript is single-threaded, everything runs on the main-thread

// database interactions, file handling, fetch / HTTP request (network)

// Solution 1: Callback functions
// problem with solution 1; callback hell / pyramid of doom.

// Solution 2: Promises
// Promises works with callbacks under the hood, but it is just syntaxic sugar.

// State of Promises
// pending, fulfilled
//         resolved / rejected

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("Everything went well");
//         reject("Something went wrong");
//     }, 2000) // 2 sec.
// })
// .then((result) => console.log(result))
// .catch((error) => console.log(error));

function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve("Something Good");
      } catch (error) {
        reject(error);
      }
    });
  }, 3000);
}

function myFetch(url, options) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve({
            json: () => new Promise((resolve, reject) => resolve("Data from the server") ) 
        })

      } catch (error) {
        reject(error);
      }
    }, 3000);
  });
}

// myFetch()
// .then((response) => response.json())
// .then((result) => console.log(result))
// .catch((error) => console.log(error))

// IIFE
(async function() {
    const response = await myFetch();
    const result = await response.json();
    console.log(result);
})()