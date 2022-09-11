import express from "express";
import { routeArray, nameArray, birthPlaceArray, religionArray, smkMajorArray, smaMajorArray } from "./dependency.js";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.render("index", { routeArray });
});

app.get("/api/name", (req, res) => {
    const nameResponse = nameArray.map((name, nameIndex) => {
        return { id: nameIndex + 1, name: name };
    });

    res.json(nameResponse);
});
