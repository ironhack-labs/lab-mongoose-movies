const express = require('express');

const {
  index,
  detail,
  newCelebrityForm,
  createCelebrity,
  deleteCelebrity,
  formEditCelebrity,
  editCelebrity,
} = require('../controllers/celebrities-controller');

const router = express.Router();

/* GET home page */
router.get('/', index);
router.get('/new', newCelebrityForm);
router.get('/:id/edit', formEditCelebrity);
router.get('/:id', detail);
router.post('/new/createCelebrity', createCelebrity);
router.post('/delete', deleteCelebrity);
router.post('/:id/edit', editCelebrity);

module.exports = router;
