import { Router } from "express";
const router = Router();



function isAdmin(req, res, next) {
    // This simulate requsting a databse if the user is admin
    // the variable below would then set accordingly
    const userIsAdmin = true;
    if (userIsAdmin) {
        req.isAdmin = userIsAdmin;
        //again, this simulates getting it from the database
        req.username = "Johnnie";

        return next();
    }

    res.status(403).send({message: "Sorry. You do not have permission."})
}

// function greetLoggedInUSers(req, res, next) {
//     // let's assume that we do a DB ceheck to see that they are logged in here
//     console.log("Welcome, logged in user");
//     next();
// }

// router.use(greetLoggedInUSers);

router.get("/auth/admin", isAdmin, (req, res) => {
    console.log(req.isAdmin);
    
    res.send({ message: "You are an admin!" });
});



router.get("/auth/user", (req, res) => {
    res.send({ message: "You are just a user" });
});


export default router;
