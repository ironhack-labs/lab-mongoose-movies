const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.post("/:id", (req,res)=>{
    Celebrity.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(()=>{
        res.redirect('/celebrities')
    })
    .catch(e=>{
        next();
        throw e;
    })
})

router.get("/:id/edit", (req,res, next)=>{
    Celebrity.findById(req.params.id)
    .then(celebrity=>{
        res.render('./celebreties/edit', {celebrity})
    })
    .catch(e=>{
        next();
        throw e;
    })
})

router.post("/:id/delete", (req,res,next)=>{
    Celebrity.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.redirect("/celebrities")
    })
    .catch(e=>{
        next();
        throw e;
    })
})

router.post("/",(req,res)=>{
    Celebrity.create(req.body)
    .then(()=>{
        res.redirect("/celebrities")
    })
    .catch(e=>{
        res.render('./celebreties/new')
        throw e;
    })
})

router.get("/new", (req,res)=>{
    res.render('./celebreties/new')
})

router.get("/:id", (req,res)=>{
    Celebrity.findById(req.params.id)
    .then(celebrity =>{
        console.log(celebrity);
        res.render('./celebreties/show', {celebrity})
    })
    .catch(e=>{
        next();
        throw e;
    })
});

router.get('/', (req,res,next)=>{
    Celebrity.find()
    .then(celebrities =>{
        console.log(celebrities);
        res.render('./celebreties/index', {celebrities});
    })
    .catch(e=>{
        next();
        throw e;
    })
});


module.exports = router;
