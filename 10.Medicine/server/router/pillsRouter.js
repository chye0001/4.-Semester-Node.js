import { Router } from 'express';
const router = Router();
const URL_PREFIX = "/api"

router.get(URL_PREFIX + "/pills", (req, res) => {
    res.send({ data: req.session.pills || [] });
})

router.post(URL_PREFIX + "/pills", (req, res) => {
    
    if (!req.session.pills) {
        req.session.pills = [];
    }
    req.session.pills.push(req.body);
    
    res.send({ data: req.session.pills });
})

export default router;
