const express = require('express');
const router = express.Router();
const celebritiesRoutes = require("./celebritiesRoutes");
const moviesRoutes = require("./moviesRoutes");

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
});

/* Celebrities routes */
router.use('/celebrities', celebritiesRoutes);

/* Movies routes */
router.use('/movies', moviesRoutes);

module.exports = router;
