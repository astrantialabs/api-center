import { Router } from "express";
import { nameArray, birthPlaceArray, religionArray, smkMajorArray, smaMajorArray } from "../../dependency.js";

export const apiStaticRouter = Router();

apiStaticRouter.get("/name", (req, res) => {
    const responseObject = nameArray.map((name, nameIndex) => {
        return { id: nameIndex + 1, name: name };
    });

    res.json(responseObject);
});

apiStaticRouter.get("/birth-place", (req, res) => {
    const responseObject = birthPlaceArray.map((birthPlace, birthPlaceIndex) => {
        return { id: birthPlaceIndex + 1, birthPlace: birthPlace };
    });

    res.json(responseObject);
});

apiStaticRouter.get("/religion", (req, res) => {
    const responseObject = religionArray.map((religion, religionIndex) => {
        return { id: religionIndex + 1, religion: religion };
    });

    res.json(responseObject);
});

apiStaticRouter.get("/smk-major", (req, res) => {
    const responseObject = smkMajorArray.map((smkMajor, smkMajorIndex) => {
        return { id: smkMajorIndex + 1, smkMajor: smkMajor };
    });

    res.json(responseObject);
});

apiStaticRouter.get("/sma-major", (req, res) => {
    const responseObject = smaMajorArray.map((smaMajor, smaMajorIndex) => {
        return { id: smaMajorIndex + 1, smaMajor: smaMajor };
    });

    res.json(responseObject);
});
