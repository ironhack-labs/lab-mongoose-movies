var express = require('express');
var router = express.Router();
var Celebrity = require("../models/celebrity");

/* GET users listing. */
router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if(err) {
     next(err);
    } else {
      // console.log(res);
     const data = {
      celebrities: celebrities,
     };  
     res.render("celebrities/index", data);
    }
  });
});
router.post("/", (req, res, next) => {
  console.log(req.body);
  const newCelebrity = Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  });

  Celebrity.create(newCelebrity, (err, docs) =>{
    if(err){
      console.log(err);
    } else {
      res.redirect("celebrities");
    }
  });
});

router.get('/new', (req, res, next) => {
  res.render("celebrities/new");
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id, (err, celebrity) => {
    if(err) {
      next(err);
     } else {
      const data = {
        celebrity: celebrity,
       };  
      res.render("celebrities/show", data);
     }
  });
});

router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findByIdAndRemove(id, (err, celebrity) => {
    if(err) {
      next(err);
     } else {
      res.redirect("/celebrities");
     }
  });
});

module.exports = router;
