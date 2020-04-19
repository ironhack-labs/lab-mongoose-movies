const express = require('express')
const router = express.Router()

const {
  listCelebrityNames,
  specificCelebrity,
  newCelebrity,
} = require('../controllers/celebrities')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/celebrities', listCelebrityNames)
router.get('/celebrities/:id', specificCelebrity)

module.exports = router
