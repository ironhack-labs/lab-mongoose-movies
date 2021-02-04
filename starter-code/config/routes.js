const router = require("express").Router();

const celebritiesController = require("../controllers/celebrities.controller");
const miscController = require("../controllers/misc.controller");

// home
router.get("/", miscController.index);

//celebrities
router.get("/celebrities", celebritiesController.list);

router.get("/celebrities/new", celebritiesController.new); //Ubicar antes de "/celebrities/:id" porque sino hay problema con las rutas
router.post("/celebrities/new", celebritiesController.addNew);

router.get("/celebrities/:id", celebritiesController.show);

router.post("/celebrities/:id/delete", celebritiesController.delete);

router.get("/celebrities/:id/update", celebritiesController.update);
router.post("/celebrities/:id/update", celebritiesController.doUpdate);


module.exports = router;