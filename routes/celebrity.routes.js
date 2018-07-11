const express = require("express");
const router = express.Router();
const celebController = require("../controllers/celebrities.controller")

router.get('/', celebController.list);
router.get('/:id', celebController.details);

module.exports = router; 