import { readPage, constructPage } from "./templatingEngine.js";

const frontpage = readPage('./public/pages/frontpage/frontpage.html');
const frontpagePage =  constructPage(frontpage);

const matches = readPage('./public/pages/matches/matches.html');
const matchesPage = constructPage(
    matches, 
    {
        title: 'DogInder | Matches',
        cssLinks: '<link rel="stylesheet" href="/pages/matches/matches.css">'
    }
);

export {
    frontpagePage,
    matchesPage
};