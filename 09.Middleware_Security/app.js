import express from 'express'
const app = express();

function greetLoggedInUSers(req, res, next) {
    // let's assume that we do a DB ceheck to see that they are logged in here
    console.log("Welcome, logged in user");
    next();
}
app.use(greetLoggedInUSers); // adds the middleware to all routes

import middlewareRouter from './routers/middlewareRouter.js'
app.use(middlewareRouter);

import authRouter from './routers/authRouter.js'
app.use(authRouter);


const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => { console.log("Server running on port:", PORT)})
