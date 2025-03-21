// const express = require("express");     //This is commonjs
import express from 'express';             //This comes from ES6 because of modules.
import path from 'path';
import partiesLibraryESModules from './util/partiesLibaryES.js'

// const { parties } = require("./util/partiesLibary.js") //this is called DESTRUCTURING
// console.log(parties)

const app = express();
app.use(express.static('public')); // in express there is a security feature that prevents you from linking to files, such as src="" or href="" inside <link> and <script></script>. To enable this we use express.static('public'). Everything in the public folder is by convention public to everyone.

let visitorsCount = 0;

//commonjs v
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/frontpage/frontpage.html") // this needs the abselute path rather than the relative path. Therefor we use __dirname.
// })

// //ES6 v
// import path from 'path';

app.get("/partypage", (req, res) => {
    res.sendFile(path.resolve("public/partypage/partyPage.html"));
});

// task: create a route /visitorcounts that returns the visitor count
app.get("/visitorscounts", (req, res) => {
    res.send({data: ++visitorsCount})
})

app.get("/dangerouspage", (req, res) => {
    res.sendFile(path.resolve("./public/dangerouspage/dangerouspage.html"));
})

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
// EOF - End Of File
