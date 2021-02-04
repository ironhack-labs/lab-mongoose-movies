const router = require("express").Router();
const celebsController = require("../controllers/celebs.controller");
const miscController = require("../controllers/misc.controller");


/* GET home page */
router.get('/', miscController.index);

//Celebrities list

router.get('/celebrities', celebsController.list)

module.exports = router;
