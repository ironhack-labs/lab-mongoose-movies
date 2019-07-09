'use strict';

import {Application, Request, Response} from "express";


const express = require('express');
const app: Application = express();




const port: number = 3006;
app.listen(port, () => console.log(`app on port ${port}!`));
