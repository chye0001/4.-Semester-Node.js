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

// app.get("/yourfavoritethings/:thing1/:thing2", (req, res) => {
//     const thing1 = req.params.thing1;
//     const thing2 = req.params.thing2;

//     res.send([{thing: thing1}, {thing: thing2}])
// })

app.get("/yourfavoritethings/:thing1/:thing2", (req, res) => {
    const thing1 = req.params.thing1;
    const thing2 = req.params.thing2;

    res.send([{data: "Your favorite things: ", thing1, thing2}])
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

app.listen("8080");
