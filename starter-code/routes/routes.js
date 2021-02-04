const router = require("express").Router();
const celebsController = require("../controllers/celebs.controller");
const miscController = require("../controllers/misc.controller");


/* GET home page */
router.get('/', miscController.index);

//Celebrities list

router.get('/celebrities', celebsController.list)

//Create new celebritie

router.get('/celebrities/new', celebsController.new)
router.post('/celebrities', celebsController.newP)

//Edit a celebritie

router.get('/celebrities/:id/edit', celebsController.edit)
router.post('/celebrities/:id',celebsController.editP)

//Delete a celebritie

router.post('/celebrities/:id/delete', celebsController.delete)


//Celebritie details page

router.get('/celebrities/:id', celebsController.detail)
module.exports = router;

