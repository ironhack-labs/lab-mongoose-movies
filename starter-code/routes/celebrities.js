var express = require('express');
var router = express.Router();

const Celebrity = require('../models/celebrity');

router.get('/celebrities', async (req, res, next) => {
    try {
        let celebrities = Celebrity.find();
        await celebrities.map(celebrity => {
            console.log('Our celebrities: ', celebrity)
            res.render('celebrities/index', { celebrity: celebrity });
        }) 
    } catch (error) {
        console.log('Error while getting celebrities from DB: ', error);
    }
});

router.get('/celebrities/:celebId', (req, res, next) => {
    let celebId = req.params.celebId
    Celebrity.findOne({'_id': celebId})
    .populate('celeb')
    .then(celeb => {
      if (!celeb) {
          return res.status(404).render('not-found');
      }
      res.render("celebrities/show", { celeb: celeb })
    })
    .catch(next)
})

router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new')
})

router.post('/celebrities', (req, res, next) => {
    
})


module.exports = router;