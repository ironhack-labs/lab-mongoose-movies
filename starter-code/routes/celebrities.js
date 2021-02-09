const express = require("express");
// require the celebs model here


const Celebrity = require("../models/celebrity.js");
const router = express.Router();


// ITERATION 4.

router.get("/celebrities/new",(req,res,next)=>{
    res.render("celebrities/new")
})

router.post("/celebrities/new",(req,res,next)=>{
    const {name, occupation, catchPhrase} =req.body

    Celebrity.create({name, occupation, catchPhrase})
    .then((newCeleb)=>{
        console.log(newCeleb)
        res.redirect("/celebrities")
    }).catch((error)=>{
        next(error)
    })

})
// ITERATION 2. Listing our celebrities

router.get("/celebrities", async(req, res, next) => {

   try {
    const celebrityDB = await Celebrity.find();
    console.log(celebrityDB);
    res.render("celebrities/index",{celebrities:celebrityDB});
  } catch (e) {
    next(e);
  } 
});

// ITERATION 3. 

router.get("/celebrities/:idCeleb", (req,res,next)=>{
    const id = req.params.idCeleb

    Celebrity.findById(id).then((celebFound)=>{
        res.render("celebrities/show",celebFound)
    }).catch((error)=>{
        next(error)
    })
})

// ITERATION 5

router.post("/celebrities/:celebId/delete",(req,res,next)=>{
    const id = req.params.celebId

    Celebrity.findByIdAndDelete(id).then((celebDeleted)=>{
        console.log(celebDeleted)
        res.redirect("/celebrities")
    }).catch((error)=>{
        next(error)
    })

})

// ITERATION 6 -BONUS

router.get("/celebrities/:idCeleb/edit",(req,res,next)=>{

    const id = req.params.idCeleb

    Celebrity.findById(id).then((celebFound)=>{
        console.log(celebFound)
        res.render("celebrities/edit",celebFound)
    })
})

router.post("/celebrities/:idCeleb/edit",(req,res,next)=>{
    const id = req.params.idCeleb

    const {name, occupation, catchPhrase} =req.body

    Celebrity.findByIdAndUpdate(id,{name, occupation, catchPhrase},{new:true})
    .then((celebUpdated)=>{
        console.log(celebUpdated)
        res.redirect("/celebrities")
    }).catch((error)=>{
        next(error)
    })

})

module.exports = router;