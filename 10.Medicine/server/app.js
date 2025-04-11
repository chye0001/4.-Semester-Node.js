import express from 'express';
const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true })); only use this line when working with forms and needing data from the form

import cors from 'cors';
app.use(cors({
    origin: "http://localhost:5173"
}));

//hard coded middleware
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

import dotenv from 'dotenv/config'
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


const PORT = Number(process.env.PORT || 8080);
app.listen(PORT, () => {console.log("Server is running on port:", PORT)})