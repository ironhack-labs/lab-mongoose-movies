const express = require("express");
const createError = require("http-errors");
const path = require("path");
const app = express();
const PORT = 3000;





app.listen(PORT, () => {
    console.log("connected")
})