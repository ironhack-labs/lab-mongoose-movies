const express = require('express');
const router = express.Router();
const celebController = require('../controllers/celebrities.controller');
const movieController = require('../controllers/movies.controller');

/* Home page */
router.get('/', (req, res) => res.render('index', {layout:false}));

/*Celebrities*/
router.get('/celebrity/list', celebController.list);
router.get('/celebrity/details-:id', celebController.details);

router.get('/celebrity/new', celebController.renderCreate);
router.post('/celebrity/new', celebController.doCreate);

router.get('/celebrity/delete-:id', celebController.delete);

router.get('/celebrity/edit-:id', celebController.renderEdit);
router.post('/celebrity/edit-:id', celebController.doEdit);

/*Movies*/
router.get('/movie/list', movieController.list);
router.get('/movie/details-:id', movieController.details);

router.get('/movie/new', movieController.renderCreate);
router.post('/movie/new', movieController.doCreate);

router.get('/movie/delete-:id', movieController.delete);

router.get('/movie/edit-:id', movieController.renderEdit);
router.post('/movie/edit-:id', movieController.doEdit);



module.exports = router;