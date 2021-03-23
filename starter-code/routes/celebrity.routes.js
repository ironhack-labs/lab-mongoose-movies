const express = require('express');
const router = express.Router();

const CelebrityController = require('../controller/celebrity.controller');

/* GET home page */
router.get('/', CelebrityController.getAllCelebrities);
router.post('/', CelebrityController.postNewCelebrity);
router.get('/new', CelebrityController.getCreateCelebrity);
router.get('/:celebrityId', CelebrityController.getCelebrityById);
router.get('/:celebrityId/delete', CelebrityController.deleteClebrityById);

module.exports = router;