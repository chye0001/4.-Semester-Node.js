const express = require("express");
const app = express();

let visitorsCount = 0;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage.html") // this needs the abselute path rather than the relative path. Therefor we use __dirname.
})

// task: create a route /visitorcounts that returns the visitor count
app.get("/visitorscounts", (req, res) => {
    res.send({data: ++visitorsCount})
})

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
// EOF - End Of File
