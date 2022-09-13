import express from "express";
import { port, routeArray, markdownBadgeArray, nameArray, birthPlaceArray, religionArray, smkMajorArray, smaMajorArray } from "./dependency.js";
import { randomInteger, randomStudentSMA, randomStudentSMK } from "./utility.js";

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.render("index", { routeArray, markdownBadgeArray });
});

//#region Static

app.get("/static/name", (req, res) => {
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

app.get("/static/birth-place", (req, res) => {
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

app.get("/static/religion", (req, res) => {
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

app.get("/static/smk-major", (req, res) => {
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

app.get("/static/sma-major", (req, res) => {
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

//#endregion Static

//#region Random

app.get("/random/coinflip", (req, res) => {
    const responseObject = [{ id: 1, type: "coinflip", value: randomInteger(0, 1) }];

    const routeObject = routeArray.find((route) => {
        if (route.route == "random/coinflip") {
            return route;
        }
    });

    res.render("route", { title: "Random Coin Flip", responseObject: responseObject, routeObject: routeObject });
});

app.get("/random/dice", (req, res) => {
    const responseObject = [{ id: 1, type: "dice", value: randomInteger(1, 6) }];

    const routeObject = routeArray.find((route) => {
        if (route.route == "random/dice") {
            return route;
        }
    });

    res.render("route", { title: "Random Dice", responseObject: responseObject, routeObject: routeObject });
});

app.get("/random/student/smk", (req, res) => {
    const responseObject = randomStudentSMK(100);

    const routeObject = routeArray.find((route) => {
        if (route.route == "random/student/smk") {
            return route;
        }
    });

    res.render("route", { title: "Random Student SMK", responseObject: responseObject, routeObject: routeObject });
});

app.get("/random/student/smk/amount/:amount", (req, res) => {
    const responseObject = randomStudentSMK(parseInt(req.params.amount));

    const routeObject = routeArray.find((route) => {
        if (route.route == "random/student/smk/amount/:amount") {
            return route;
        }
    });

    res.render("route", { title: `Random Student SMK by ${req.params.amount} Amount`, responseObject: responseObject, routeObject: routeObject });
});

app.get("/random/student/sma", (req, res) => {
    const responseObject = randomStudentSMA(100);

    const routeObject = routeArray.find((route) => {
        if (route.route == "random/student/sma") {
            return route;
        }
    });

    res.render("route", { title: "Random Student SMA", responseObject: responseObject, routeObject: routeObject });
});

app.get("/random/student/sma/amount/:amount", (req, res) => {
    const responseObject = randomStudentSMA(parseInt(req.params.amount));

    const routeObject = routeArray.find((route) => {
        if (route.route == "random/student/sma/amount/:amount") {
            return route;
        }
    });

    res.render("route", { title: `Random Student SMA by ${req.params.amount} Amount`, responseObject: responseObject, routeObject: routeObject });
});

//#endregion Random

//#region API Static

app.get("/api/static/name", (req, res) => {
    const responseObject = nameArray.map((name, nameIndex) => {
        return { id: nameIndex + 1, name: name };
    });

    res.json(responseObject);
});

app.get("/api/static/birth-place", (req, res) => {
    const responseObject = birthPlaceArray.map((birthPlace, birthPlaceIndex) => {
        return { id: birthPlaceIndex + 1, birthPlace: birthPlace };
    });

    res.json(responseObject);
});

app.get("/api/static/religion", (req, res) => {
    const responseObject = religionArray.map((religion, religionIndex) => {
        return { id: religionIndex + 1, religion: religion };
    });

    res.json(responseObject);
});

app.get("/api/static/smk-major", (req, res) => {
    const responseObject = smkMajorArray.map((smkMajor, smkMajorIndex) => {
        return { id: smkMajorIndex + 1, smkMajor: smkMajor };
    });

    res.json(responseObject);
});

app.get("/api/static/sma-major", (req, res) => {
    const responseObject = smaMajorArray.map((smaMajor, smaMajorIndex) => {
        return { id: smaMajorIndex + 1, smaMajor: smaMajor };
    });

    res.json(responseObject);
});

//#endregion Static

//#region API Random

app.get("/api/random/coinflip", (req, res) => {
    res.json({ id: 1, type: "coinflip", value: randomInteger(0, 1) });
});

app.get("/api/random/dice", (req, res) => {
    res.json({ id: 1, type: "dice", value: randomInteger(1, 6) });
});

app.get("/api/random/student/smk", (req, res) => {
    const responseObject = randomStudentSMK(100);

    res.json(responseObject);
});

app.get("/api/random/student/smk/amount/:amount", (req, res) => {
    const responseObject = randomStudentSMK(parseInt(req.params.amount));

    res.json(responseObject);
});

app.get("/api/random/student/sma", (req, res) => {
    const responseObject = randomStudentSMA(100);

    res.json(responseObject);
});

app.get("/api/random/student/sma/amount/:amount", (req, res) => {
    const responseObject = randomStudentSMA(parseInt(req.params.amount));

    res.json(responseObject);
});

//#endregion Random
