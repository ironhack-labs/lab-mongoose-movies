var express = require("express");
var celebritiesRouter = express.Router();

const Celebrity = require("./../models/celebrity")  

celebritiesRouter.get("/new", (req, res) => {
    res.render("celebrities/new")
})

celebritiesRouter.post("/new", (req, res) => {
    
    const { name, occupation, catchPhrase } = req.body;
    
    Celebrity.create({ name, occupation, catchPhrase })
    .then(celebrity => {
        res.redirect("/celebrities");
    })
    .catch(err => console.log(err))
})

celebritiesRouter.post("/delete/:celebrityId", (req, res) => {
    Celebrity.findByIdAndRemove(req.params.celebrityId)
    .then(() => res.redirect("/celebrities"))
    .catch(err => console.log(err))
});

celebritiesRouter.get("/edit/:celebrityId", (req, res) => {
    Celebrity.findById(req.params.celebrityId)
    .then(oneCelebrity => {
        const data = {
            celebrity: oneCelebrity
        };
        res.render("celebrities/edit", data)
    })
    .catch(err => console.log(err))
})

celebritiesRouter.post("/edit/:celebrityId", (req, res) => {
    const celebrityId = req.params.celebrityId;
    const { name, occupation, catchPhrase } = req.body;
    
    Celebrity.updateOne({ celebrityId }, { name, occupation, catchPhrase })
    .then(data => {
        res.redirect("/celebrities")
    })
    .catch(err => console.log(err))
})

celebritiesRouter.get("/:celebrityId", (req, res) => {
    Celebrity.findById(req.params.celebrityId)
    .then(oneCelebrity => {
        const data = {
            celebrity: oneCelebrity
        };
        
        res.render("celebrities/show", data);
    })
    .catch(err => console.log(err))
})

celebritiesRouter.get("/", (req, res) => {
    Celebrity.find()
    .then(allCelebrities => {
        const data ={
            celebrities: allCelebrities
        };

        res.render("celebrities/index", data)
    })
    .catch(err => console.log(err))
})

module.exports = celebritiesRouter