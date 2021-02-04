const router = require("express").Router();

const celebritiesController = require("../controllers/celebrities.controller");
const miscController = require("../controllers/misc.controller");

// home
router.get("/", miscController.index);

//celebrities
router.get("/celebrities", celebritiesController.list);
router.get("/celebrities/:id", celebritiesController.show);






module.exports = router;