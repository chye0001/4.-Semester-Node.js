import { Router } from 'express';
const router = Router();

const URL_PREFIX = "";
const employees = ["Kenneth", "Homer", "Ilmer"]

router.get("/employees", (req, res) => {
    res.send({ data: employees})
})

export default router;