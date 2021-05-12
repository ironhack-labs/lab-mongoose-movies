const router = require("express").Router();

const Celebrity = require("../models/Celebrity.model");

router.get("/celebrities", (req, res) => {
    Celebrity.find() // <-- .find() method gives us always an ARRAY back
    .then((celebritiesFromDB) => res.render("celebrities/index", { celebrities: celebritiesFromDB }))
    .catch((err) => next(err));
});

router.get('/celebrities/new', (req, res) => {
    res.render('celebrities/new')
})

router.get('/celebrities/:celebId', (req, res, next) => {
    const { celebId } = req.params
    Celebrity.findById(celebId)
        .then(celebFromDb => {
            console.log('oneCeleb:', celebFromDb)
            res.render('celebrities/show', {oneCeleb: celebFromDb})
        })
        .catch(e => {
            console.log('error while getting celebrity', e)
            next(e)
        })
})

router.post("/celebrities", (req, res) => {
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.create({ name, occupation, catchPhrase })
    .then(() => {
        res.redirect('/celebrities')
    })
    .catch((err) => {
        console.log(`Error while creating a new celebrity: ${err}`)
        res.render('celebrities/new')
    })
  });

router.post('/celebrities/:id/delete', (req, res) => {
    const { id } = req.params;
   
    Celebrity.findByIdAndDelete(id)
      .then(() => res.redirect('/celebrities'))
      .catch(error => next(error));
  });



module.exports = router;