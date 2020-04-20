const express = require('express')
const router = express.Router()

const {
  listCelebrityNames,
  specificCelebrity,
  newCelebrity,
  createCelebrity,
  deleteCelebrity,
} = require('../controllers/celebrities')

router.get('/', listCelebrityNames)
router.get('/new', newCelebrity)
router.post('/process', createCelebrity)

router.get('/:id', specificCelebrity)
router.post('/:id/delete', deleteCelebrity)

module.exports = router
