const express = require('express');
const router  = express.Router();
const Celeb = require('../models/Celebrity')

/* GET home page */
router.get('/', (_, res) => {
  const cels = Celeb.find()
  console.log(cels)
  res.render('celebrities/index', cels);
});

router.get('/:id',(req, res)=> {
  const cel = Celeb.findById(req.params.id)
    .then(celeb => res.render('celebrities/show', {cel}))
})
router.get('/new',(_, res)=> {
    res.render('celebrities/new')
})
router.post('/new',(_, res)=> {
  const { name, occupation, catchPhrase} = req.body
  Celeb.create({ name, occupation, catchPhrase })
    .then(celebrity => res.redirect(`/celebrities/${celebrity._id}`))
    .catch(err => console.log(err));
})

router.post('/:id/delete', (req, res)=>{
  const { id } = req.params
  Celeb.findByIdAndDelete(id)
    .then((celebrity) => res.redirect('/celebrities'))
    .catch((err) => console.log(err));
})

module.exports = router;