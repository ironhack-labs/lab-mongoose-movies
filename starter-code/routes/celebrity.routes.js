// Routes file needs to be required in the app.js in order not to give 404
// App needs to know you created a new route file, that's the only way for it to know which routes you want to hit.

const express = require('express');
const celebrityRouter = express.Router();


// Require Celebrity model in order to use it for CRUD

const Celebrity = require('.../models/Celebrity-model');


// ****************************************************************************************
// GET - to display the form for creating the celebrities
// ****************************************************************************************

//                                         make sure you see all the folders that are inside the "views" folder,
//                                         but you don't have to specify "views" folder tho
//                                         in res.render() we don't use '/' 🚨 before we put the the path to the hbs file we want to render
//   localhost:3000/celebrity-input

celebrityRouter.get('/celebrities/new', (req, res) => res.render('celebrities/new-celebrity'));