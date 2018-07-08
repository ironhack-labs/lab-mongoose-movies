const express       = require('express');
const router        = express.Router();
const Celebrity     = require('../models/celebrity');

// GET ROUTE FOR LIST OF ALL CELEBRITIES

router.get('/celebrities', (req, res, next) => {

    Celebrity.find()
        .then((celebsArray)=>{
            console.log(celebsArray);
            res.render('celebrities/index',{celebsArray:celebsArray});
        })
        .catch((err)=>{

            next(err);

        });
  
});

// GET ROUTE FOR CREATE NEW CELEBRITY PAGE -- GOES BEFORE THE :ID ROUTE

router.get('/celebrities/new', (req,res,next)=>{

    res.render('celebrities/new');

});

// POST ROUTE FOR CREATE NEW CELEBRITY PAGE

router.post('/celebrities/create', (req,res,next)=>{

    const newCeleb = new Celebrity(req.body);

    newCeleb.save()
        .then((response)=>{

            res.redirect('/celebrities');

        })
        .catch((err)=>{

            next(err);

        });

});

// GET ROUTE FOR EDITING A CELEB PAGE

router.get('/celebrities/:id/edit', (req, res, next) => {

    const theID = req.params.id;
    
    Celebrity.findById(theID)
        .then((theCeleb)=>{
            
            res.render('celebrities/edit',theCeleb);
        })
        .catch((err)=>{

            next(err);

        });
  
});

// POST ROUTE FOR UPDATING CELEBRITY INFO

router.post('/celebrities/:id/update', (req,res,next)=>{

    Celebrity.findByIdAndUpdate(req.params.id,req.body)
        .then((response)=>{

            res.redirect('/celebrities');

        })
        .catch((err)=>{

            next(err);

        });

});

// ROUTE FOR DELETE POST - USER IS NEVER ACTUALLY SHOWN THIS ROUTE, JUST USED BY THE FORM BUTTON

router.post('/celebrities/:id/delete', (req,res,next)=>{

    Celebrity.findByIdAndRemove(req.params.id)
        .then((response)=>{

            res.redirect('/celebrities');

        })
        .catch((err)=>{

            next(err);

        });

});

// GET ROUTE FOR ONE SPECIFIC CELEB

router.get('/celebrities/:id', (req, res, next) => {

    const theID = req.params.id;
    
    Celebrity.findById(theID)
        .then((theCeleb)=>{
            
            res.render('celebrities/show',theCeleb);
        })
        .catch((err)=>{

            next(err);

        });
  
});


module.exports = router;