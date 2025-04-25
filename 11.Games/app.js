import express from 'express';
const app = express();

app.use(express.json());

import gamesRouter from './router/gamesRouter.js';
app.use(gamesRouter);

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port:", PORT));
