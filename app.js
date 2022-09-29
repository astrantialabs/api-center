import express from "express";
import { port, routeArray, markdownBadgeArray } from "./dependency.js";

import { staticRouter } from "./routes/static.js";
import { randomRouter } from "./routes/random.js";
import { apiStaticRouter } from "./routes/api/static.js";
import { apiRandomRouter } from "./routes/api/random.js";

const app = express();

app.use(logRoute);

app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.render("index", { routeArray, markdownBadgeArray });
});

app.use("/static", staticRouter);
app.use("/random", randomRouter);
app.use("/api/static", apiStaticRouter);
app.use("/api/random", apiRandomRouter);

function logRoute(req, res, next) {
    console.log(req.originalUrl);

    next();
}
