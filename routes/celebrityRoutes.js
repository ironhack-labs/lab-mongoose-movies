const express       = require('express');
const router        = express.Router();
const Celebrity     = require('../models/celebrity');

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then((theCelebrity)=>{
        res.render('celebrities', {theCelebrity});
    })
    .catch((err)=>{
        next("error"); 
     })
  });

router.get('/celebrities/:id', (req, res, next) => {
    let id = req.params.id;
    Celebrity.findOne({'_id': id})
      .then(celebrity => {
        res.render("celebrityDetails", {celebrity})
      })
      .catch(error => {
        console.log(error)
      })
  }); 

router.get('/celebrities/:id/edit', (req, res, next)=>{
    let id = req.params.id;
    Celebrity.findById(req.params.id)
    .then((celebrity)=>{
        res.render('editCelebrity', {celebrity})
    })
    .catch((err)=>{
        next(err);
    })
})

router.post('/celebrities/:id/edit', (req, res, next)=>{
    Book.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      show: req.body.show,
      phrase: req.body.phrase,
    })
    .then((theCelebrity)=>{
        res.redirect('/'+theCelebrity._id)
    })
    .catch((err)=>{
        next(err);
    })  
})

module.exports = router;

// router.get('/celebrities', (req, res, next) => {
//     Celebrity.find()
//     .then((theCelebrity)=>{
//         res.render('celebrities', {theCelebrity});
//     })
//     .catch((err)=>{
//         next("error"); 
//      })
//   });

// router.get('/celebrity/:id', (req, res, next) => {
//     Celebrity.find(id)
//     .then((theCelebrity)=>{
//         console.log("success");
//         res.render('celebrityDetails');
//     })
//     .catch((err)=>{
//         next("error"); 
//      })
//   });



// router.get('/new', (req, res, next) =>{
//     Celebrity.find()
//     .then((theCelebrity)=>{
//         res.render('newCelebrity', {Celebrity});
//     })
//     .catch((err)=>{
//         next(err); 
//      })
// });


// router.post('/create', (req, res, next)=>{
//    const theCelebrity = new Celebrity({
//     name: req.body.name,
//     show: req.body.show,
//     phrase: req.body.phrase,
//    })

//    theCelebrity.save()
//    .then((response)=>{
//        res.redirect('/')
//    })
//    .catch((err)=>{
//        next(err);
//    }) 
// })

// router.get('/:id/edit', (req, res, next)=>{
//    Celebrity.findById(req.params.id)
//    .then((theCelebrity)=>{
//        res.render('editCelebrity', {theCelebrity})
//    })
//    .catch((err)=>{
//        next(err);
//    })
// })

// router.post('/:id/update', (req, res, next)=>{
//     Book.findByIdAndUpdate(req.params.id, {
//       name: req.body.name,
//       show: req.body.show,
//       phrase: req.body.phrase,
//     })
//     .then((theCelebrity)=>{
//         res.redirect('/'+theCelebrity._id)
//     })
//     .catch((err)=>{
//         next(err);
//     })  
// })

// router.post('/:id/delete', (req, res, next)=>{
//     Celebrity.findByIdAndRemove(req.params.id)
//     .then((reponse)=>{
//         res.redirect('/');
//     })
//     .catch((err)=>{
//         next(err);
//     })
// })


// router.get('/celebrityDetails/:id', (req, res, next) => {
//     const id = req.params.id;
//     Celebrity.findById(id)
//     .then((theCelebrity)=>{
//         console.log("details");    
//         res.render('/celebrityDetails',  theCelebrity);
//     })
//     .catch((err)=>{
//        next(err); 
//     })
// });

