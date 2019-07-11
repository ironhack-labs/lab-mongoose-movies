'use strict';

import {Application, Request, Response} from "express";


const Config = require('./Config').default;

const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

const cors = require('cors');

const app: Application = express();

app.use(cors());

if (Config.isServerDev) {
   const logger = require('morgan');
   app.use(logger('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());


app.get("/", function (req, res) {
   res.json({"ope": "i´m back :)"});
});


const port: number = Config.backPort;
app.listen(port, () => {
   console.log(`app on port ${port}!`)
});
