'use strict';

import {Application, Request, Response} from "express";


const express = require('express');

const bodyParser   = require("body-parser");

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.get("/", function(req, res) {
    res.json({"ope":"i´m back :)"});
});


const port: number = 3006;
app.listen(port, () => console.log(`app on port ${port}!`));
