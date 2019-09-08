const express = require('express');
const router  = express.Router();

const Celebrity = require('./../models/celebrity');

router.get('/celebrities', (req, res, next)=>{
    Celebrity.find()
        .then(cel =>{
            console.log('Celebrities name');
            const data = {
                celebrityList: cel
            };
            res.render('celebrities/index', data);
        })    
        .catch(error =>{
            next(error);
        })

});

//------Get add celebrity form -----
router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new');
   
});

router.get('/celebrities/:id', (req, res, next) => {
    const celId = req.params.id;
    Celebrity.findById(celId)
        .then(cel => {
            console.log("Celebrity's indivisual page");
            const data = {
                oneCelebrity : cel
            }
            res.render('celebrities/show', data);
        })
        .catch(error => {
            next(error);
        })
});

router.post('/celebrities', (req, res, next)=> {
    const name = req.body.name;
    const occupation = req.body.occupation;
    const catchPhrase = req.body.catchPhrase;

    Celebrity.create({name, occupation, catchPhrase})
    // Celebrity.save()
        .then(() => {
            console.log('New celebrity has been added');
            res.redirect('/celebrities');
        })
        .catch(error =>{
            console.log("celebrity not added, please try again!")
            // res.render("celebrities");
        })      
});

router.post('/celebrities/:id/delete', (req, res, next) => {
    const celId = req.params.id;
    Celebrity.findByIdAndRemove(celId)
        .then(() => {
            console.log('Celebrity deleted');
            res.redirect('/celebrities');
        })
        .catch(error =>{
            next(error);
            console.log("celebrity not deleted");
        }) 
});

router.get('/celebrities/:id/edit', (req, res, next) => {
    const celId = req.params.id;
    Celebrity.findById(celId)
        .then(cel => {
            const data = {
                celToEdit : cel
            };
            res.render('celebrities/edit', data);
        })
        .catch(error => {
            next(error);
        })
})

router.post('/celebrities/:id', (req, res, next)=> {
    const celId = req.params.id;
    const name = req.body.name;
    const occupation = req.body.occupation;
    const catchPhrase = req.body.catchPhrase;

    Celebrity.findByIdAndUpdate(celId, {name, occupation, catchPhrase})
        .then(() => {
            console.log('Celebrity Updated');
            res.redirect('/celebrities');
            // res.redirect("/celebrities/"+celId);
        })
        .catch(error =>{
            console.log("Celebrity not pdated")
            next(error);
        })      
});


module.exports = router;