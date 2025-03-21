import { Router } from 'express';

const router = Router();

router.post("/api/contact", (req, res) => {
    const reqBody = req.reqBody;
    console.log(reqBody)
    res.redirect("/");
})

export default router;