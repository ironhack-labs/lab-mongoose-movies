const express = require('express');

const router = express.Router();


const celebritiesController = require("../controllers/celebrities.controller");
// Iteration 2
router.get('/celebrities',celebritiesController.list);
// Iteration 4 

router.get('/celebrities/new',celebritiesController.create);

router.post('/celebrities',celebritiesController.doCreate);
// Iteration 5
router.post('/celebrities/:id/delete',celebritiesController.delete)

// Iteration 3 
router.get('/celebrities/:id',celebritiesController.detail);



module.exports = router;