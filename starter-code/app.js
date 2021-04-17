const express = require("express");
const hbs = require("hbs");
const app = express();


app.set("views", __dirname + "/views");//donde estan las views
app.set("view engine", "hbs");//motor renderizado
hbs.registerPartials(__dirname + "/views/partials") ;
app.use(express.static("public"));

//SEARCH AND USE ROUTES
const index = require("./routes/index");
app.use("/", index);

app.listen(3000, () => console.log("Listening 3000"))