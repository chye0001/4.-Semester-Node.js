
// html filer er client filer. For at lave bedre seperation of concerns vil man lave mapper hvor man kan komme dem i.

const e = require("express");
const express = require("express");
const app = express();

app.use(express.json());

// route / get handler
app.get("/", (request, response) => {
    response.send({ data: "This is the root route" });
});

app.get("/blablabla", (request, response) => {
    response.send({ message: "blablabla" })
})

app.get("/yourfavoritenumber/:favoriteNumber", (req, res) => {
    const yourFavoriteNumber = req.params.favoriteNumber;
    res.send({ message: `The coolest number: ${yourFavoriteNumber}` })
})

app.get("/yourfavoritethings/:thing1/:thing2", (req, res) => {
    const thing1 = req.params.thing1;
    const thing2 = req.params.thing2;

    res.send([{data: "Your favorite things: ", thing1, thing2}])
})

app.get("/redirecttofavoritethings", (req, res) => {
    res.redirect("/yourfavoritethings/tulipes/sea lions")
})

// assignment create a route for /search that returns an empty JSON
// task create a search where the query parameter is q that contains the search
app.get("/search", (req, res) => {
    const queryParameter = req.query.q;
    res.send({data: `You searched for ${queryParameter}`});
})


app.get("/welcomepage", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/favoritepoliticians", (req, res) => {
    console.log(req.body)
    res.send({data: req.body});
})

// assignment create a new route and send some data to it through the body
app.post("/postsomething", (req, res) => {
    const body = req.body;
    res.send(body)
})

//this is a proxy call, since I can call this server, and then this server calls google's server.
app.get("/proxy", async (req, res) => {
    const response = await fetch("https://www.google.com/");
    const result = await response.text();

    res.send(result);
});

const PORT = 8080;
app.listen(PORT, ()=>console.log("server is running on port: ", PORT));
