const express = require("express")
const router = express.Router()
const Celebrity = require('../models/celebrity')


router.get('/celebrities', async (req, res, next) => {
    const celebrities = await Celebrity.find()
    res.render('celebrities/index', {celebrities});
  console.log('celebrities')
    if(!celebrities){
        console.log("Existe un error") 
  }
  });
  
  
  router.get('/celebrities/:id', async (req, res) => {
    const {id} = req.params 
    const celebrity = await  Celebrity.findById(id)
    console.log(celebrity)
    res.render('celebrities/show', celebrity);
   
  });
  
  router.get('/new',  (req, res)=>{
    res.render('celebrities/new')
  })
 
router.post('/new', (res, req)=>{
    const {name, occupation, catchPhrase}= req.body;
    const addCeleb=  new Celebrity({ name, occupation, catchPhrase });   
     addCeleb.save()
    res.render('/')
})



router.post('/celebrities/:id/delete', (req, res)=>{
     Celebrity.findByIdAndDelete({ _id: req.params.id })
    .then(() => res.redirect('/celebrities'))
    .catch(() => { throw Error('Cannot be deleted.'); });
});




module.exports = router