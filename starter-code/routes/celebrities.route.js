const express = require('express');
const router = express.Router();
const celebrityController =  require('../controllers/celebrities.controllers');


router.get('/celebrities/new', celebrityController.create);
router.post('/celebrities', celebrityController.doCreate);

router.get('/celebrities/:id/edit', celebrityController.edit);
router.post('/celebrities/:id', celebrityController.doEdit);

router.post('/celebrities/:id/delete', celebrityController.delete);

router.get('/celebrities', celebrityController.list);
router.get('/celebrities/:id', celebrityController.show);

module.exports = router;