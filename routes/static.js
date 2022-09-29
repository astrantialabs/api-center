import { Router } from "express";
import { routeArray, nameArray, birthPlaceArray, religionArray, smkMajorArray, smaMajorArray } from "../dependency.js";

export const staticRouter = Router();

staticRouter.get("/name", (req, res) => {
    const responseObject = nameArray.map((name, nameIndex) => {
        return { id: nameIndex + 1, name: name };
    });

    const routeObject = routeArray.find((route) => {
        if (route.route == "static/name") {
            return route;
        }
    });

    res.render("route", { title: "Static Name", responseObject: responseObject, routeObject: routeObject });
});

staticRouter.get("/birth-place", (req, res) => {
    const responseObject = birthPlaceArray.map((birthPlace, birthPlaceIndex) => {
        return { id: birthPlaceIndex + 1, birthPlace: birthPlace };
    });

    const routeObject = routeArray.find((route) => {
        if (route.route == "static/birth-place") {
            return route;
        }
    });

    res.render("route", { title: "Static Birth Place", responseObject: responseObject, routeObject: routeObject });
});

staticRouter.get("/religion", (req, res) => {
    const responseObject = religionArray.map((religion, religionIndex) => {
        return { id: religionIndex + 1, religion: religion };
    });

    const routeObject = routeArray.find((route) => {
        if (route.route == "static/religion") {
            return route;
        }
    });

    res.render("route", { title: "Static Religion", responseObject: responseObject, routeObject: routeObject });
});

staticRouter.get("/smk-major", (req, res) => {
    const responseObject = smkMajorArray.map((smkMajor, smkMajorIndex) => {
        return { id: smkMajorIndex + 1, smkMajor: smkMajor };
    });
    const routeObject = routeArray.find((route) => {
        if (route.route == "static/smk-major") {
            return route;
        }
    });

    res.render("route", { title: "Static SMK Major", responseObject: responseObject, routeObject: routeObject });
});

staticRouter.get("/sma-major", (req, res) => {
    const responseObject = smaMajorArray.map((smaMajor, smaMajorIndex) => {
        return { id: smaMajorIndex + 1, smaMajor: smaMajor };
    });

    const routeObject = routeArray.find((route) => {
        if (route.route == "static/sma-major") {
            return route;
        }
    });

    res.render("route", { title: "Static SMA Major", responseObject: responseObject, routeObject: routeObject });
});
