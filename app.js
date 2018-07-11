const express = require("express");
const createError = require("http-errors");
const path = require("path");
const app = express();
const PORT = 3000;

require('./configs/db.config')

const celebRouter = require("./routes/celebrity.routes")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use('/celebrities', celebRouter);


app.listen(PORT, () => {
    console.log("connected")
})