const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

// rota index 
router.get('/', (req, res, next) => {
    Celebrity.find()
    .then(allCelebrities => {
        res.render('celebrities/index',{allCelebrities});
    })
    .catch(error => console.log(error));
});

// rota add celebrity
router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
});


router.post('/new', (req, res, next) => {
    const {name, occupation, catchphrase} = req.body;
    const newCelebrity = new Celebrity({name, occupation, catchphrase});
    newCelebrity.save()
    .then(res.redirect('/celebrities'))
    .catch(error => console.log(error));
});

// rota para deletar
router.get('/delete-celebrity/:id', (req, res, next) => {
Celebrity
.findByIdAndDelete(req.params.id)
.then(theCelebrity => {
    res.redirect('/celebrities');
})
.catch(error => console.log(error));
});

// rota editar
router.get('/edit/:celebrityId', (req, res, next) => {
   Celebrity
   .findById(req.params.celebrityId)
   .then(theCelebrity => {
       res.render('celebrities/edit', {celebrity:theCelebrity});
   })
   .catch(error => console.log(error));
});

router.post('/edit', (req, res, next) => {
    const{celebrityId, name, occupation, catchphrase} = req.body;
    Celebrity.findByIdAndUpdate(celebrityId, {$set:{name, occupation, catchphrase}}, 
    {new:true})
    .then(theEdit => {
        res.redirect(`/celebrities/${celebrityId}`)
    })
    .catch(error => console.log(error));
});

//rota celebrity details
router.get('/:id', (req, res, next) => {
    Celebrity
    .findById(req.params.id)
    .then(theCelebrity => {
        res.render('celebrities/show',{celebrity : theCelebrity})
    })
    .catch(error => console.log(error));
});



module.exports = router;