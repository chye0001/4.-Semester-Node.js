import { Router } from "express";

const router = Router();



function greeter(req, res, next) {
    console.log("Helle there. PLease enter the room");
    next();
}

function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
} 




router.get("/room", greeter, ipLogger, (req, res, next) => {
    // res.send({ message: "Welcome to room 1" })
    next();
})



// Inline middleware (the first function call, containing console.log())
router.get("/room", (req, res, next) => {
    console.log("You are in the lobby for room 2");
    next();
}, (req, res, next) => {
    res.send({ message: "Welcome to room 2" })
})



// router.get("*", (req, res) => {
//     res.send("<h1>What would this be?</h1>")
// })

export default router;
