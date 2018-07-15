const express = require("express");
const createError = require("http-errors");
const path = require("path");
const app = express();
const PORT = 4000;

require('./configs/db.config');

const celebRouter = require("./routes/celebrity.routes")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/celebrities', celebRouter);

app.listen(PORT, () => {
    console.log("connected")
})