const express = require('express');
const app = express();
//const path = require('path');

require('./configs/db.config.js');

app.get('/', (req,res,next) => {
    res.send("hello");
})

module.exports = app;
