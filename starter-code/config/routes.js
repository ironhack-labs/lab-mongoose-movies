const router = require("express").Router();

//require controllers
const miscController = require("../controllers/misc.controller");
const celebritiesController = require("../controllers/celebrities.controller");
const moviesController = require("../controllers/movies.controller");

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


//movies
router.get("/movies", moviesController.list);


router.get("/movies/new", moviesController.new); //Ubicar antes de "/movies/:id" porque sino hay problema con las rutas
router.post("/movies/new", moviesController.addNew);

router.get("/movies/:id", moviesController.show);

router.post("/movies/:id/delete", moviesController.delete);

router.get("/movies/:id/update", moviesController.update);
router.post("/movies/:id/update", moviesController.doUpdate);


module.exports = router;