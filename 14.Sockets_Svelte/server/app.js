import 'dotenv/config';

import express from 'express';
const app = express();
app.use(express.json());
app.use(express.static("public"));


import cors from 'cors';
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


import session from 'express-session';
const sessionMiddleWare = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
});
app.use(sessionMiddleWare);


import nicknamesRouter from './routers/nicknamesRouter.js'
app.use(nicknamesRouter);


import http from 'http';
const server = http.createServer(app);


import {Server} from 'socket.io';
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        credentials: true
    }
});

io.engine.use(sessionMiddleWare);

io.on("connection", (socket) => {
    console.log("A client connected", socket.id);
    
    socket.on("client-sends-color", (data) => {

        data.nickname = socket.request.session.nickname;
        socket.request.session.timesSubmitted = socket.request.session.timesSubmitted + 1 || 1;
        data.timesSubmitted = socket.request.session.timesSubmitted;
        console.log(data);
        
        // emits to all socket in the io namespace
        io.emit("server-sends-color", data)

        // broadcasts to all socket 
        // socket.broadcast.emit("server-sends-color", data)

        // emits to the socket itself
        // socket.emit("server-sends-color", data)
    });

    socket.on("disconnect", () => {console.log("A client disconnected", socket.id)});
})

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log("Server startet up on port:", PORT));
