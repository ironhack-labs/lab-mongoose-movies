const express = require('express');
const celebrityRouter = express.Router();
const Celebrity = require('./../models/Celebrity');

celebrityRouter.get("/", (req, res, next) => {    
    Celebrity.find()                          
    .then(allCelebrities => {
        const data = {celebrities: allCelebrities}
        res.render("celebrities", data);
        //console.log(allCelebrities[0])         
    })                                  
    .catch(err => console.log(err))    
});


// Add new celebrities
celebrityRouter.get('/new', (req, res) => {
    res.render('./../views/celebrities/new');
})

celebrityRouter.post("/new", (req, res) => {
    //deconstruct body that is sent through POST method
    const {name, occupation, catchPhrase} = req.body

    Celebrity.create( {name, occupation, catchPhrase})
    .then((celebrity) => {
        res.redirect('/celebrities');
    })
    .catch(err => console.log(err))
});

// GET for editing
celebrityRouter.get('/edit', (req, res) => { 
    const {_id } = req.query;
    console.log(req.query)
        Celebrity.findOne( {_id: _id})
        .then (oneCelebrity => {
            const data = {
                celebrity: oneCelebrity
            }
            res.render('./../views/celebrities/edit', oneCelebrity);
        })
        .catch(err => console.log(err));
});

// POST for editing
celebrityRouter.post('/edit', (req, res) => {
    const {name, occupation, catchPhrase} = req.body  //DESTRUCTURING

    Celebrity.updateOne( {_id}, {name, occupation, catchPhrase})
    .then( (data) => {
        res.redirect('/celebrities');
    })
    .catch( (err) => console.log(err));
})

celebrityRouter.get("/delete/:id", (req, res) => {
//with the GET request it is enough to use an <a> tag in the index.hbs file: you don't need a separate form
    Celebrity.findByIdAndRemove(req.params.id)
    .then((celebrityToDelete) => {
        res.redirect('/celebrities');
    })
    .catch(err => console.log(err))
});

// GET /index/celebrityId
celebrityRouter.get('/:id', (req, res) => {     // With : it is a parameter
    Celebrity.findById(req.params.id)
    .then( oneCelebrity => {
        const data = {
            oneCelebrity: oneCelebrity
        }
        res.render("celebrities/show", data)
    })
    .catch( (err) => console.log(err))
})    


module.exports = celebrityRouter;
