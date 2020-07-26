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

router.post('/celebrities', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    const newCelebrity = new Celebrity({ name, occupation, catchPhrase })
    newCelebrity.save()
        .then((celeb) => {
        res.redirect('/celebrities')
    })
        .catch((error) => {
        console.log(error)
        res.render('celebrities/new')
    })
})

router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new')
})

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

router.get('/celebrities/:celebId/edit', (req, res, next) => {
    let celebId = req.params.celebId
    Celebrity.findOne({'_id': celebId})
    .then((celeb) => {
        res.render('celebrities/edit', { celeb: celeb })
    })
    .catch((err) => {
        console.log(err)
        next(err)
    })
})

router.post('/celebrities/:celebId', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    let celebId = req.params.celebId;
    Celebrity.update(
      { _id: celebId },
      { $set: { name, occupation, catchPhrase } },
      { new: true }
    )
      .then((celeb) => {
        res.redirect("/celebrities");
      })
      .catch((error) => {
        console.log(error)
        next(error)
      });
})

router.post('/celebrities/:celebId/delete', (req, res, next) => {
    let celebId = req.params.celebId
    Celebrity.findByIdAndRemove({'_id': celebId})
    .then(() => {
        res.redirect('/celebrities')
    })
        .catch((error) => {
        console.log(error)
        return res.status(404).render('not-found');
    })
})

module.exports = router;