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

        })

});

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