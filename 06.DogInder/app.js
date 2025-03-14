import express from "express";
import path from "path";
import { getMatches } from "./util/matches.js";

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontpage/frontpage.html"))
});

app.get("/matches", (req, res) => {
    res.sendFile(path.resolve("public/matches/matches.html"))
});

app.get("/api/v1/matches", async (req, res) => {
    const matches = await getMatches();
    res.send({data: matches})
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server running on port:", PORT));
