const express = require('express');
const router  = express.Router();
const celebrityController = require('../controllers/celebrity.controllers');



/* GET home page */
router.get('/', celebrityController.home); 
router.get('/celebrities', celebrityController.list); 
router.get('/celebrities/create', celebrityController.create); 
router.post('/celebrities/create', celebrityController.doCreate);
router.get('/celebrities/:id', celebrityController.show); 
router.post('/celebrities/:id/delete', celebrityController.delete); 




module.exports = router;
