const express = require('express');
const router = express.Router();
const Celebrity = require("../models/celebrity");

/* GET celebrity Index */
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(allCelebrities => {
      res.render('celebrities', { celebrity: allCelebrities });
    })
    .catch(error => {
      console.log(error)
    })

});

/* GET celebrity detail */
router.get('/show/:celebrity_id', (req, res, ) => {

  Celebrity.findById(req.params.celebrity_id)
    .then(theCelebrity => {
      res.render('celebrities/show', theCelebrity);
    })
    .catch(error => {
      console.log(error)
    })
});

/* GET NEW celebrity */
router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});


/* POST NEW celebrity */
router.post('/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase })
  newCelebrity.save()
    .then(
      res.redirect("/")
    )
    .catch(error => {
      console.log(error)
    })

})

/* POST DELETE celebrity */
router.post('/:id/delete', (req, res, next) => {

  Celebrity.findOneAndDelete({ _id: req.params.id })
    .then(theCelebrity => {
      console.log(theCelebrity)
      res.redirect('/');
    })
    .catch(error => {
      console.log(error)
    })

})

/* GET UPDATE celebrity */
router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById({ _id: req.params.id })
    .then(celebrity => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch(error => {
      console.log(error)
    })
});

router.post('/edit', (req, res) => {
  const { name, occupation, catchPhrase } = req.body
  Celebrity.update({ _id: req.query.celebrity_id }, { $set: { name, occupation, catchPhrase } })
    .then(celebrity => {
      console.log("here the clog", celebrity)
      res.redirect('/celebrities')
    })
    .catch(error => console.log(error))
})


module.exports = router;


  // tuve problemas con el /:id, que por lo que he entendido chocaba con el /new,
  // asi que cada vez que iba a /new el server crasheaba diciendome que no podia 
  // "Cast to ObjectId failed for value "new" at path "_id" for model "Celebrity""


  // ademas cuando en las instrucciones dice "If there's an error, 
  // call the route's next function and return the error" 
  // no entiendo donde deberiamos meter el next (se refiere al tercer argumento de router.get??)

  // Ah, no tengo ninguna idea de como pasar argumentos. A veces paso el id como {id} y a veces sin llaves.
  // Lo intento random y dejo lo que funciona, pero me gustaria entender el porque algunos funcionan y otros no. 
  // Sobre todo porque en el ejemplo de la clase algunos funcionan y a mi no y tengo que usar otras formas.