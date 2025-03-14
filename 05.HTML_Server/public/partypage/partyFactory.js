

export function partyFactory(partyName) {
    return {
        partyName,
        supplies: ["🥳", "🍾", "🥂", "🎈", "🎉", "🎊", "🎓"]
    }; //kan fejle hvis ikke man bruge semikolon, når man har multiline return statement
}

export function someFunction (someParameter) {
    console.log(someParameter);
}

import * as functions from './partyFactory.js'

module.exports = {
    partyFactory
}


//correct way of copying
const originalArray = ["S", "O", "M", "E", " ", "V", "A", "L", "U", "E"];
const copiedArray = [...originalArray];

//wrong way, as you are to assigning the same address to another variable
const someArray = [1, 2, 3];
const anotherArray = someArray;


export default partyFactory;



const somePerson = {
    name: "Some",
    lastName: "Name",
    age: 25
}

const somePersonChanged = {
    name: "Some",
    lastName: "Name",
    age: 30
}

const somePersonUpdated = {...somePerson, ...somePersonChanged}

const { name } = somePerson;






// import express from 'express'

// const app = express();

// const PORT = 8080;
// app.listen(PORT)



const express = require('express');
const app = express();

app.get("/someEndpoint", (res, req) => {
    
})

const PORT = 8080;
app.listen(PORT) 

