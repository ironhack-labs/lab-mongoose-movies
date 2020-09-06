const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((data) => {
      res.render("celebrities/index", { data });
    })
    .catch((err) => {
      next(err);
    });
});
router.get("/view/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((data) => {
      res.render("celebrities/show", data);
    })
    .catch((err) => {
      next(err);
    });
});
router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});
router.post("/", (req, res, next) => {
  console.log(req.body);
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name,
    occupation,
    catchPhrase,
  })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(() => {
      res.render("new");
    });
});
router.get('/view/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndDelete({_id:req.params.id})
        .then(() => {
            res.redirect('/celebrities')
        })
        .catch(err => {
            next(err)
        })
})
router.get('/view/:id/edit', (req, res, next) => {
    console.log('51')
    Celebrity.findById({_id: req.params.id})
        .then(data => {
            console.log(data)
            res.render('celebrities/edit', data)
        })
        .catch(err => {
            next(err)
        })
})
router.post('/view/:id', (req, res, next) => {
    console.log('62')
    const {name, occupation, catchPhrase} = req.body
    console.log(req.body)
    
    Celebrity.findByIdAndUpdate({_id: req.params.id}, {$set: {name, occupation, catchPhrase}}, {new : true})
        .then(() => { 
            res.redirect('/celebrities')
        })
        .catch(err => {
            next(err)
        })

})

module.exports = router;
