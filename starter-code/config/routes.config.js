const express = require('express');
const router = express.Router();
const indexContrtoller = require('../controllers/index.controller')
const celebritiesController = require('../controllers/celebrities.controller')

router.get('/celebrities/new', celebritiesController.create);

router.get('/celebrities', celebritiesController.list);
router.post('/celebrities', celebritiesController.doCreate);


router.get('/celebrities/:id', celebritiesController.show);
router.post('/celebrities/:id/delete', celebritiesController.delete);


router.get('/', indexContrtoller.home);


module.exports = router;
