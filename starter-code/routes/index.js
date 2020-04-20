const express = require('express')
const router = express.Router()

const {
  celebrityView,
  celebrityDetail,
  newCelebrity,
  newCelebrityProcess,
  celebrityDelete,
  editCeleGet,
  editCelePost,
} = require('../controllers/celebritry.controller')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})

//-------------------------Celebrities----------------------------------------------------------

//Crear
router.get('/celebrity/new', newCelebrity)
router.post('/celebrity/new', newCelebrityProcess)
//Read
router.get('/celebrity', celebrityView)
router.get('/celebrity/:id', celebrityDetail)
//Update
router.get('/celebrity/edit/:id', editCeleGet)
router.post('/celebrity/edit/:id', editCelePost)
//Delete
router.get('/celebrity/delete/:id', celebrityDelete)

module.exports = router
