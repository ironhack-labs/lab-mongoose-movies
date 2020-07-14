const express = require('express');
const router = express.Router();
const celebController = require('../controllers/celebrities.controller');

/* Home page */
router.get('/', (req, res) => res.render('index'));

/*Celebrities*/
router.get('/celebrity/list', celebController.list);
router.get('/celebrity/details-:id', celebController.details);

router.get('/celebrity/new', celebController.renderCreate);
router.post('/celebrity/new', celebController.doCreate);

router.get('/celebrity/delete-:id', celebController.delete);

router.get('/celebrity/edit-:id', celebController.renderEdit);
router.post('/celebrity/edit-:id', celebController.doEdit);

module.exports = router;