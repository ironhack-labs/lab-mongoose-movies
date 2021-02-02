const express = require('express');
const router  = express.Router();
const miscController = require("../controllers/misc.controller");

/* GET home page */
router.get('/',miscController.index);

module.exports = router;
