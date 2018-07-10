const express = require("express");
const router = express.Router();
const celebController = require("../controllers/celebrities.controller")

router.get('/', celebController.list);

module.exports = router;