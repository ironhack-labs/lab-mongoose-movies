const express               = require('express');
const router                = express.Router();
const celebritiesController = require('../controllers/celebrities.controller');


router.get('/new', celebritiesController.create);
router.post('/index', celebritiesController.doCreate);

router.get('/:id/edit', celebritiesController.edit);
router.post('/:id', celebritiesController.doEdit);

router.post('/:id/delete', celebritiesController.delete);

router.get('/index', celebritiesController.list);
router.get('/:id',   celebritiesController.details);


module.exports = router;