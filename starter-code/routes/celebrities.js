var express = require("express");
var celebritiesRouter = express.Router();

const Celebrity = require("./../models/Celebrity");

celebritiesRouter.post('/celebrities/:id', (req, res)=>{
    const {name, occupation, catchphrase} = req.body;
    Celebrity.update(req.params.id)
        .then(celebrity => {
        res.redirect("/celebrities");
    })
        .catch( (err) => {
        console.log(err)
    });
})

celebritiesRouter.get('/:id/edit', (req, res) => {
    Celebrity.findById(req.params.id)
    .then(celebrity => {
        res.redirect("/celebrities/edit");
    })
    .catch( (err) => {
        console.log(err)
    });
})

celebritiesRouter.post('/:id/delete', (req, res) => {
    Celebrity.findByIdAndRemove(req.params.id)
        .then(celebrity => {
            res.redirect("/celebrities");
        })
        .catch( (err) => {
            console.log(err)
        });
});

celebritiesRouter.post('/new', (req, res) => {
    const {name, occupation, catchphrase} = req.body;

    Celebrity.create({name, occupation, catchphrase})
        .then(celebrity => {
            res.redirect("/celebrities");
        })
        .catch( (err) => {
            console.log(err)
        });
});

celebritiesRouter.get('/new', (req, res) => {
    res.render("../views/celebrities/new");
});

celebritiesRouter.get("/:id", (req, res) => {
    Celebrity.findById(req.params.id)
        .then( (oneCeleb) => {
            const data = {
                celebrity: oneCeleb
            }
            res.render("celebrities/show", data)
        })
        .catch( (err) => {
            console.log(err)
        });
})

celebritiesRouter.get("/", (req, res) => {
    Celebrity.find()
    .then( (allCelebs) => {
        const data = {
            celebrities: allCelebs
        };
        res.render("celebrities/index2", data)
    })
    .catch( (err) => {
        console.log(err)
        next();
    });
});

module.exports = celebritiesRouter;