const express = require('express');

const router = express.Router();


const celebritiesController = require("../controllers/celebrities.controller");
// Iteration 2
router.get('/celebrities',celebritiesController.list);
// Iteration 3 
router.get('/celebrities/:id',celebritiesController.detail);

module.exports = router;