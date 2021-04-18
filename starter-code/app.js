
const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose")
const app = express();
const DB_NAME = "celebrities-app";
const bodyParser = require("body-parser")

mongoose.connect(`mongodb://localhost/${DB_NAME}`)
.then (() => {
    console.log("Connected")
})

app.set("views", __dirname + "/views");//donde estan las views
app.set("view engine", "hbs");//motor renderizado
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));

//SEARCH AND USE ROUTES
const index = require("./routes/index");
const celebrities = require("./routes/celebrities");

app.use("/", index);
app.use("/celebrities", celebrities);

app.listen(3000, () => console.log("Listening 3000"))