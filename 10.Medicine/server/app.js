import express from 'express';
const app = express();

import employeesRouter from './router/employees.js';
app.use(employeesRouter);

import pillsRouter from './router/pillsRouter.js';
app.use(pillsRouter);


const PORT = Number(process.env.PORT || 8080);
app.listen(PORT, () => {console.log("Server is running on port:", PORT)})