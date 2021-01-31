const express = require('express');

const router = express.Router();


const celebritiesController = require("../controllers/celebrities.controller");
// Iteration 2
router.get('/celebrities',celebritiesController.list)



module.exports =celebritiesController;