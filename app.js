import express from "express";
import { port, routeArray, nameArray, birthPlaceArray, religionArray, smkMajorArray, smaMajorArray } from "./dependency.js";
import { randomInteger, randomUniqueInteger } from "./utility.js";

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.render("index", { routeArray });
});

//#region Static

app.get("/api/name", (req, res) => {
    const nameResponse = nameArray.map((name, nameIndex) => {
        return { id: nameIndex + 1, name: name };
    });

    res.json(nameResponse);
});

app.get("/api/birth-place", (req, res) => {
    const birthPlaceResponse = birthPlaceArray.map((birthPlace, birthPlaceIndex) => {
        return { id: birthPlaceIndex + 1, birthPlace: birthPlace };
    });

    res.json(birthPlaceResponse);
});

app.get("/api/religion", (req, res) => {
    const religionResponse = religionArray.map((religion, religionIndex) => {
        return { id: religionIndex + 1, religion: religion };
    });

    res.json(religionResponse);
});

app.get("/api/smk-major", (req, res) => {
    const smkMajorResponse = smkMajorArray.map((smkMajor, smkMajorIndex) => {
        return { id: smkMajorIndex + 1, smkMajor: smkMajor };
    });

    res.json(smkMajorResponse);
});

app.get("/api/sma-major", (req, res) => {
    const smaMajorResponse = smaMajorArray.map((smaMajor, smaMajorIndex) => {
        return { id: smaMajorIndex + 1, smaMajor: smaMajor };
    });

    res.json(smaMajorResponse);
});

//#endregion Static

//#region Random

app.get("/api/random/coinflip", (req, res) => {
    res.json({ id: 1, type: "coinflip", value: randomInteger(0, 1) });
});

//#endregion Random
