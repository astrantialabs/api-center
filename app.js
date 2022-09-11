const express = require("express");
const app = express();

const port = 3000;
const routeArray = [
    {
        id: 1,
        route: "name",
        example: "name",
        parameter: "",
        description: "List of names",
    },
    {
        id: 2,
        route: "birth-place",
        example: "birth-place",
        parameter: "",
        description: "List of birth places",
    },
    {
        id: 3,
        route: "religion",
        example: "religion",
        parameter: "",
        description: "List of religion",
    },
    {
        id: 4,
        route: "smk-major",
        example: "smk-major",
        parameter: "",
        description: "List of smk majors",
    },
    {
        id: 5,
        route: "sma-major",
        example: "sma-major",
        parameter: "",
        description: "List of sma major",
    },
    {
        id: 6,
        route: "random/coinflip",
        example: "random/coinflip",
        parameter: "",
        description: "Coinflip random event",
    },
    {
        id: 7,
        route: "random/dice",
        example: "random/dice",
        parameter: "",
        description: "Dice random event",
    },
    {
        id: 8,
        route: "random/student/smk",
        example: "random/student/smk",
        parameter: "",
        description: "Random SMK students",
    },
    {
        id: 9,
        route: "random/student/smk/{amount}",
        example: "random/student/smk/10",
        parameter: "Amount - Determines the amount of data",
        description: "Random SMK students based on requested amount",
    },
    {
        id: 10,
        route: "random/student/sma",
        example: "random/student/sma",
        parameter: "",
        description: "Random SMA students",
    },
    {
        id: 11,
        route: "random/student/sma/{amount}",
        example: "random/student/sma/10",
        parameter: "Amount - Determines the amount of data",
        description: "Random SMA students based on requested amount",
    },
];

app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.render("index", { routeArray });
});
