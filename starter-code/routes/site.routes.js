const express = require("express");
const router = express.Router();

//GET authHome--users register
router.get('/register', (req, res) => res.render('auth-views/authHome'));

module.exports = router;

