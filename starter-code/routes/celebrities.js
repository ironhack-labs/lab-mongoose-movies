const express = require(`express`)
const router = express.Router()

const Celebrity = require('../models/Celebrity')

router.get('/',(req, res, next) => {
  Celebrity.find()
    .then(allCelebrities=>{res.render("celebrity-index",{celebrity: allCelebrities})})
    .catch(error => console.log(error))
})
router.get('/:celebrity_id',(req, res) =>{
  Celebrity.findById(req.params.celebrity_id)
  .then(theCelebrity => res.render('celebrity-detail', { algo: theCelebrity}))
  .catch(error => console.log(error))
})
router.get('/addd', (req, res) => {
  console.log('entra')
  res.render('celebrity-add')})
// router.push()
module.exports= router