const express = require('express');
const celebrityRouter = express.Router();

const Celebrity = require('../models/Celebrity.model');

celebrityRouter.get('/celebrities', (req, res) => res.render('celebrity-views/celebrity-form'));