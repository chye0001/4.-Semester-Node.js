import 'dotenv/config' //god vane gøre altid dette som det første når man arbejder med dotenv / .env

import express from 'express';
const app = express();

app.use(express.json());
app.use(express.static(path.resolve('../client/dist/')));
// app.use(express.urlencoded({ extended: true })); only use this line when working with forms and needing data from the form

import session from 'express-session';
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  //false beacause we use http in dev, but has to be true in production because it uses https
}))

import employeesRouter from './router/employees.js';
app.use(employeesRouter);

import pillsRouter from './router/pillsRouter.js';
app.use(pillsRouter);

// This code block is when you want to do SSR / have a server serving the static files so it live reloads. 
// import livereload from 'livereload';
// import connectLivereload from 'connect-livereload';

// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch('../client/dist');
// liveReloadServer.server.once("connection", () => {
// setTimeout(() => {
//     liveReloadServer.refresh("/");
// }, 500);
// });

// app.use(connectLivereload()); 


import path from 'path';
app.get("/{*splat}", (req, res) => {
    res.sendFile(path.resolve('../client/dist/index.html'));
})

const PORT = Number(process.env.PORT || 8080);
app.listen(PORT, () => {console.log("Server is running on port:", PORT)})








import { JSDOM } from 'jsdom';
import { URL } from 'url';

const visitedUrls = new Set();

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function crawlPage(pageUrl) {
    const cleanUrl = new URL(pageUrl);
    cleanUrl.hash = '';

    if (visitedUrls.has(cleanUrl.href)) {
        return;
    }

    visitedUrls.add(cleanUrl.href);

    try {
        const response = await fetch(cleanUrl.href);
        if (!response.ok) {
            console.error(`Failed to fetch ${cleanUrl.href}: ${response.statusText}`);
            return;
        }

        const html = await response.text();
        const { window } = new JSDOM(html);
        const document = window.document;

        const mainContent = Array.from(document.querySelectorAll('.mw-parser-output p, .mw-parser-output h1, .mw-parser-output h2, .mw-parser-output h3'))
            .map(element => element.textContent.trim())
            .join(' ')
            .replace(/[\t\n\r]+/g, ' ')
            .trim();

        console.log('Indexing:', cleanUrl.href);
        // todo send or save cleanUrl.href, mainContent somewhere

        const links = Array.from(document.querySelectorAll('a')).map(link => link.getAttribute('href'));
        for (let href of links) {
            if (href && href.startsWith('/wiki/') && !href.includes(':')) {
                const resolvedUrl = new URL(href, cleanUrl.origin).href;
                const normalizedUrl = resolvedUrl.split('#')[0];
                
                if (!visitedUrls.has(normalizedUrl)) {
                    await delay(1000);
                    await crawlPage(normalizedUrl);
                }
            }
        }
    } catch (error) {
        console.error(`Error crawling ${cleanUrl.href}:`, error);
    }
}

crawlPage('https://en.wikipedia.org/wiki/Elasticsearch');