const celebrityList = require("../bin/seeds.js")
const router = require("../routes/index")
const Celebrity = require('../models/celebrity')
const movieList = require("../bin/seeds.js")
const Movie = require("../models/movie")


router.get("/seed", (req, res, next) => {
  Movie.collection.insert(movieList)
    .then(newmovies => {
      console.log("created movies ......... ", newmovies);
    }).catch(err => next(err));
})

// router.get("/seed", (req, res, next) => {
//   Celebrity.collection.insert(celebrityList) 
//   .then(newCelebs => {
//     console.log("created celebs ......... ", newCelebs);
//    // res.send("created celebs", newCelebs)
//   }).catch(err => next(err));
// })


router.get("/", (req, res, next) =>{
  Celebrity.find().then(celeb=>{
    console.log("=============>>>>>>>", celeb)
    res.render("celebrities/index", {celeb: celeb})
  })

})

router.get("/celebrities/:id", (req, res, next) => {

  let id = req.params.id


  Celebrity.findById(id).then(foundCeleb => {
    console.log("==========>>>>>>>>>", foundCeleb)
    res.render("celebrities/celebrities", { fCeleb: foundCeleb })
  })
})



router.get("/new", (req, res, next)=>{
  console.log("========!!!!!!!! newer page")
    res.render("celebrities/new")
})

router.post("/new", (req, res, next)=>{
  const {cName, cOccupation, cCatchPhrase} = req.body;
  console.log("this is new info>>>>>>>>>>>>>>", req.body.cName)
  const newAddition = new Celebrity({name:cName, occupation:cOccupation, catchPhrase: cCatchPhrase})
  Celebrity.create(newAddition).then(()=>{
    res.redirect("/")
  }).catch((err)=>{
    next(err)
  }) 
})

router.post("/celebrities/:id/delete", (req, res, next)=>{
  let id= req.params.id
    Celebrity.findByIdAndRemove(id).then((found)=>{
      res.redirect("/")
    })
})

router.get("/celebrities/:id/edit", (req, res, next)=>{
  console.log("///////////////////////////////////, edittor??")
  res.render("celebrities/edit")
})

router.post("/celebrities/:id/edit", (req, res, next)=>{
    let id = req.params.id
    console.log("here", id)
    Celebrity.findByIdAndUpdate(id, {
      name: req.body.cName,
      occupation: req.body.cOccupation,
      catchPhrase: req.body.cCatchPhrase
    }).then((ab)=>{
      res.redirect("/celebrities/"+ id)
    })
})






module.exports = router;