const express = require('express');
const router  = express.Router();
const common = require('../controllers/common.controller');
const celebrities = require('../controllers/celebrities.controller');
const movies = require('../controllers/movies.controller');
/* GET home page */
router.get('/', common.home);
router.get('/celebrities', celebrities.list);
router.get('/celebrities/new', celebrities.new);
router.post('/celebrities', celebrities.create);
router.get('/celebrities/:id', celebrities.details);
router.get('/celebrities/:id/edit', celebrities.edit);
router.post('/celebrities/:id/edit', celebrities.doEdit);
router.post('/celebrities/:id/delete', celebrities.delete);

router.get('/movies', movies.list);
router.get('/movies/new', movies.new);
router.get('/movies/:id', movies.details);
router.post('/movies', movies.create);
router.post('/movies/:id/delete', movies.delete);
router.get('/movies/:id/edit', movies.edit);
router.post('/movies/:id/edit', movies.doEdit);



module.exports = router;
