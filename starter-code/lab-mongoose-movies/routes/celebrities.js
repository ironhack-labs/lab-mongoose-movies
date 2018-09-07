const express = require('express');
const router  = express.Router();
const Celebrity   = require('../models/Celebrity')





/* GET celebrities page */
router.get('/celebrities', (req, res, next) => {

    Celebrity.find()
    .then((celebrityData)=>{
        //console.log(theStuffWeGetBack);
        res.render('celebrities/celebrities', {celebrityData: celebrityData})
    })
    .catch((err)=>{
        next(err);
    })

});

router.get('/celebrities/new', (req, res, next)=>{
    res.render('celebrities/new');
})

/*   Creating new celeb page */
router.post('/celebrities/new', (req, res, next)=>{

    //     name : "Cris Rock",
    //     occupation: "Actor",
    //     catchPhrase: "every celebrity needs a good catch phrase",
    //     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
   
       const theName = req.body.celebName;
       const theOccupation = req.body.occupation;
       const theCatchPhrase = req.body.ctchPhrase;
       const theImageSrc= req.body.image;
    
         Celebrity.create({
            name: theName,
            occupation: theOccupation,
            catchPhrase: theCatchPhrase,
            image: theImageSrc
        })
        .then((response)=>{
            res.redirect('/celebrities')
        })
        .catch((err)=>{
           next(err);
        })
    })


/* GET /celebrityInfo page */
router.get('/celebrities/:celebrityID', (req, res, next) => {

    Celebrity.findById(req.params.celebrityID)
    .then((oneCelebrity)=>{
        console.log(oneCelebrity);
        res.render('celebrities/show', {oneCelebrity: oneCelebrity})
    })
    .catch((err)=>{
        next(err);
    })
});

router.post('/celebrities/delete/:id', (req, res, next)=>{
    Celebrity.findByIdAndRemove(req.params.id)
    .then((response)=>{
        res.redirect('/celebrities')
    })
    .catch((err)=>{
       next(err);
    })

})

router.post('/celebrities/edit/:id', (req, res, next)=>{
    Celebrity.findById(req.params.id)
    .then((theCeleb)=>{
        res.render('celebrities/edit', {celeb: theCeleb});
    })
    .catch((err)=>{
        next(err);
    })
})

// router.post('/books/update/:id', (req, res, next)=>{
//    const theTitle = req.body.bookTitle;
//    const theDescription = req.body.description;
//    const theAuthor = req.body.theAuthor;
//    const theRating = req.body.rating;



//     Book.findByIdAndUpdate(req.params.id, {
//         name: theTitle,
//         description: theDescription,
//         author: theAuthor,
//         rating: theRating
//     })
//     .then((response)=>{
//         res.redirect('/books/'+req.params.id)
//     })
//     .catch((err)=>{
//        next(err);
//     })

//     console.log('body:', req.body)

// })


/*   Editing A celeb page */
router.post('/celebrities/update/:id', (req, res, next)=>{

    //     name : "Cris Rock",
    //     occupation: "Actor",
    //     catchPhrase: "every celebrity needs a good catch phrase",
    //     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
   
       const theName = req.body.celebName;
       const theOccupation = req.body.occupation;
       const theCatchPhrase = req.body.ctchPhrase;
       const theImageSrc= req.body.image;
    
         Celebrity.findByIdAndUpdate(req.params.id, {
            name: theName,
            occupation: theOccupation,
            catchPhrase: theCatchPhrase,
            image: theImageSrc
        })
        .then((response)=>{
            res.redirect('/celebrities/'+req.params.id)
        })
        .catch((err)=>{
           next(err);
        })
    })

module.exports = router;