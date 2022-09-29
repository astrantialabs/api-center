import { Router } from "express";
import { routeArray } from "../dependency.js";
import { randomInteger, randomStudentSMA, randomStudentSMK } from "../utility.js";

export const randomRouter = Router();

randomRouter.get("/coinflip", (req, res) => {
    const responseObject = [{ id: 1, type: "coinflip", value: randomInteger(0, 1) }];

    const routeObject = routeArray.find((route) => {
        if (route.route == "random/coinflip") {
            return route;
        }
    });

    res.render("route", { title: "Random Coin Flip", responseObject: responseObject, routeObject: routeObject });
});

randomRouter.get("/dice", (req, res) => {
    const responseObject = [{ id: 1, type: "dice", value: randomInteger(1, 6) }];

    const routeObject = routeArray.find((route) => {
        if (route.route == "random/dice") {
            return route;
        }
    });

    res.render("route", { title: "Random Dice", responseObject: responseObject, routeObject: routeObject });
});

randomRouter.get("/student/smk", (req, res) => {
    const responseObject = randomStudentSMK(100);

    const routeObject = routeArray.find((route) => {
        if (route.route == "random/student/smk") {
            return route;
        }
    });

    res.render("route", { title: "Random Student SMK", responseObject: responseObject, routeObject: routeObject });
});

randomRouter.get("/student/smk/amount/:amount", (req, res) => {
    const responseObject = randomStudentSMK(parseInt(req.params.amount));

    const routeObject = routeArray.find((route) => {
        if (route.route == "random/student/smk/amount/:amount") {
            return route;
        }
    });

    res.render("route", { title: `Random Student SMK by ${req.params.amount} Amount`, responseObject: responseObject, routeObject: routeObject });
});

randomRouter.get("/student/sma", (req, res) => {
    const responseObject = randomStudentSMA(100);

    const routeObject = routeArray.find((route) => {
        if (route.route == "random/student/sma") {
            return route;
        }
    });

    res.render("route", { title: "Random Student SMA", responseObject: responseObject, routeObject: routeObject });
});

randomRouter.get("/student/sma/amount/:amount", (req, res) => {
    const responseObject = randomStudentSMA(parseInt(req.params.amount));

    const routeObject = routeArray.find((route) => {
        if (route.route == "random/student/sma/amount/:amount") {
            return route;
        }
    });

    res.render("route", { title: `Random Student SMA by ${req.params.amount} Amount`, responseObject: responseObject, routeObject: routeObject });
});
