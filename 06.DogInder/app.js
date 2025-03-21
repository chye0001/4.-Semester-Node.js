import express from "express";
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

import pagesRouter from "./routers/pagesRouter.js";
app.use(pagesRouter);
import matchesRouter from "./routers/api/matchesRouter.js";
app.use(matchesRouter);
import contactRouter from "./routers/api/contactRouter.js";
app.use(contactRouter);

const PORT = 8080;
app.listen(PORT, () => console.log("Server running on port:", PORT));
