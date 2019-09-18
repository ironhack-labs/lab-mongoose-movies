const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/celebrity", (req, res, next) => {
  Celebrity.find({})
    .then(celebs => {
      const hbsObj = {
        celebs
      };
      res.render("celebrities", hbsObj);
    })
    .catch(err => console.log(err));
});

// router.get("/celebrity/:id", (req, res, next) => {
//   // console.log(req.params.id)
//   const celebName = req.params.id;
//   Celebrity.findOne({ name: celebName })
//     .then(celeb => {
//       const hbsObj = {
//         celeb
//       };
//       // console.log(hbsObj)
//       res.render("celebrities/details", hbsObj);
//     })
//     .catch(err => console.log(err));
// });

router.get("/celebrity/views/:id", (req, res, next) => {
  // console.log(req.params.id)
  const celebName = req.params.id;
  Celebrity.findOne({ name: celebName })
    .then(celeb => {
      const hbsObj = {
        celeb
      };
      // console.log(hbsObj)
      res.render("celebrities/details", hbsObj);
    })
    .catch(err => console.log(err));
});

router.get("/celebrity/new", (req,res,next ) => {
// console.log(req,"++++++++++++++++++++++++++++++++++++++++++++")
res.render("celebrities/createceleb")
})

router.post("/createceleb",(req,res,next) => {
  const newceleb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }
  console.log('435543345435454343532',newceleb)
  Celebrity.create(newceleb)
  .then(createcelebs => {
    console.log("WE DID IT")
    res.redirect("/celebrity")
})
})

router.post("/celebrity/delete/:id",(req,res,next) => {
  let id = req.params.id
  console.log(id)
  
  Celebrity.findByIdAndRemove(id)
  .then(result => {
    console.log("WE DID IT")
    res.redirect("/celebrity")
}).catch((err) => {
  next(err)
})
})


module.exports = router;
