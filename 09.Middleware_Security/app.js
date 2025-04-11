import express from 'express'
const app = express();


import helmet from 'helmet'
app.use(helmet());


import { rateLimit } from 'express-rate-limit'
const generalLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 300, // Limit each IP to 300 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})
app.use(generalLimiter)

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 5,
    standardHeaders: 'draft-8',
    legacyHeaders: false
})
app.use("/auth", authLimiter);

// import dotenv from 'dotenv';
// dotenv.config();
// console.log(process.env.SESSION_SECRET)

import dotenv from 'dotenv/config'

import session from 'express-session';
app.use(session({
    secret: process.env.SESSION_SECRET, // have this secret in a .env file
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  //false beacause we use http in dev, but has to be true in production because it uses https
}))


// function greetLoggedInUSers(req, res, next) {
//     // let's assume that we do a DB ceheck to see that they are logged in here
//     console.log("Welcome, logged in user");
//     next();
// }
// app.use(greetLoggedInUSers); // adds the middleware to all routes


import middlewareRouter from './routers/middlewareRouter.js';
app.use(middlewareRouter);


import authRouter from './routers/authRouter.js';
app.use(authRouter);


import sessionRouter from './routers/sessionRouter.js';
app.use(sessionRouter);



app.get("/{*splat}", (req, res) => {
    res.status(404).send("<h1>Not found</h1>")
})

app.all("/{*splat}", (req, res) => {
    res.status(404).send({ errorMessage: `${req.path} for ${req.method} not found` })
})

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => { console.log("Server running on port:", PORT)})
