import express from 'express';
import path from 'path';
import fs from 'fs';
import { getMatches } from './util/matches.js';

const app = express();
app.use(express.static("public"));

const header = fs.readFileSync('./public/components/header/header.html').toString();
const frontpage = fs.readFileSync('./public/frontpage/frontpage.html').toString();
const matches = fs.readFileSync('./public/matches/matches.html').toString();
const footer = fs.readFileSync('./public/components/footer/footer.html').toString();

const frontpagePage = header + frontpage + footer; 
const matchesPage = header + matches + footer;

console.log(frontpagePage)
// SSR REFACTOR
app.get("/", (req, res) => {
    res.send(frontpagePage)
});

app.get("/matches", (req, res) => {
    res.send(matchesPage);
});


// Not SSR
// app.get("/", (req, res) => {
//     res.sendFile(path.resolve("public/frontpage/frontpage.html"))
// });

// app.get("/matches", (req, res) => {
//     res.sendFile(path.resolve("public/matches/matches.html"))
// });

app.get("/api/v1/matches", async (req, res) => {
    const matches = await getMatches();
    res.send({data: matches})
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server running on port:", PORT));
