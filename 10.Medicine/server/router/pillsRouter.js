import { Router } from 'express';
const router = Router();
const URL_PREFIX = "/api"

router.get(URL_PREFIX + "/pills", (req, res) => {
    res.send({ data: "pills gotten" })
})

router.post(URL_PREFIX + "/pills", (req, res) => {
    res.send({ data: "pills added" })
})

export default router;
