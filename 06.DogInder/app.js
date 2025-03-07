import express from "express";
import path from "path";

const app = express();
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontpage/frontpage.html"))
})

app.get("/matches", (req, res) => {
    res.sendFile(path.resolve("public/matches/matches.html"))
})

console.log(process.env.PORT)

const PORT = 8080;
app.listen(PORT, () => console.log("Server running on port:", PORT));
