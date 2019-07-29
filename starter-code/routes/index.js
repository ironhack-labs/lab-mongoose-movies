const express = require('express');
const router  = express.Router();
// const celebritiesRouter = require('./celebrities.routes')  OTRA FORMA DE ENRUTAR COMO EN APP.JS

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('main');
});

/* GET celebrities */
// router.get('/celebrities', celebritiesRouter) OTRA FORMA DE ENRUTAR COMO EN APP.JS



module.exports = router;
