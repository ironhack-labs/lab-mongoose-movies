const express = require('express');
const router = express.Router();
const celebrityController =  require('../controllers/celebrities.controller');


router.get('/celebrities', celebrityController.list);

router.get('/celebrities/:id', celebrityController.details);

router.get('/celebrities/new', celebrityController.create);
router.post('/celebrities', celebrityController.doCreate);

router.get('/celebrities/:id/edit', celebrityController.edit);
router.post('/celebrities/:id', celebrityController.doEdit);

router.post('/:id/delete', celebrityController.delete);

module.exports = router;