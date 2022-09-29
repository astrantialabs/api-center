import { Router } from "express";
import { randomInteger, randomStudentSMA, randomStudentSMK } from "../../utility.js";

export const apiRandomRouter = Router();

apiRandomRouter.get("/coinflip", (req, res) => {
    res.json({ id: 1, type: "coinflip", value: randomInteger(0, 1) });
});

apiRandomRouter.get("/dice", (req, res) => {
    res.json({ id: 1, type: "dice", value: randomInteger(1, 6) });
});

apiRandomRouter.get("/student/smk", (req, res) => {
    const responseObject = randomStudentSMK(100);

    res.json(responseObject);
});

apiRandomRouter.get("/student/smk/amount/:amount", (req, res) => {
    const responseObject = randomStudentSMK(parseInt(req.params.amount));

    res.json(responseObject);
});

apiRandomRouter.get("/student/sma", (req, res) => {
    const responseObject = randomStudentSMA(100);

    res.json(responseObject);
});

apiRandomRouter.get("/student/sma/amount/:amount", (req, res) => {
    const responseObject = randomStudentSMA(parseInt(req.params.amount));

    res.json(responseObject);
});
