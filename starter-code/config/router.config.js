const express = require('express');
const router  = express.Router();

const commonController = require('../controllers/common.controller');
const celebritiesController = require('../controllers/celebrities.controller');

/* GET home page */
router.get('/', commonController.home);
router.get('/celebrities', celebritiesController.list);
router.get('/celebrity/:id', celebritiesController.details);

router.get('/celebrities/new', celebritiesController.create);
router.post('/celebrities/new', celebritiesController.doCreate);

router.post('/celebrity/:id/delete', celebritiesController.delete);



module.exports = router;
