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

const contact = readPage('./public/pages/contact/contact.html');
const contactPage = constructPage(contact, {
    title: 'DogInder | Contact'
})

export {
    frontpagePage,
    matchesPage,
    contactPage
};