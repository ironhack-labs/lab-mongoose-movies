const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity');

//
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then((data) => {
      console.log('All my celebrities:' + data + "========> data");
      res.render('celebrities/index', { celebrities: data });
    })
    .catch((error) => {
      console.log('Error while getting the celebrities from the DB: ', error);
    });
});

//ADD NEW CELEBRITY
router.get('/new', (req,res,next) => {
    res.render('celebrities/new')
})

//POST
router.post('/', (req,res, next) => {
    console.log("req.body", req.body)

    let celebrity = new Celebrity ({ name: req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catchPhrase })

    celebrity.save().then(() => {
        res.redirect('/celebrities')
      })

      .catch((error) => {
        console.log('Error while getting the celebrities from the DB: ', error);
    }
    )
})


  


router.get('/:id', (req, res, next) => {
Celebrity.findById (req.params.id).then((data) =>  {

    res.render('celebrities/show', data);
})
.catch((error) => {
    console.log('Error while getting the celebrities from the DB: ', error);
}
)

}
)


//DELETE
router.post('/:id/delete', (req, res) => {

    console.log(req.params.id)
  
    Celebrity.findByIdAndDelete(req.params.id).then(() => {
      res.redirect('/celebrities')
    })
  
  })


  //EDIT

  router.get('/:id/edit', (req,res, next) => {

    Celebrity.findById(req.params.id)
  .then((celebrity) => {
    res.render('celebrities/edit', {celebrity});
  })
  .catch(error =>{
    console.log('Error while deleting the celebrity from the DB: ', error);
  })
});


router.post('/:id/edit', (req,res,next) => {

    console.log("req.body", req.body)


    Celebrity.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase,
      }).then(() => {
        res.redirect('/celebrities')
      })
    
    })




//   router.get('/celebrities/:id/edit', (req,res) => {

//     Celebrity.findById(req.params.id).then((data) => {
// res.render('/edit', {data})
//     })

//     .catch((error) => {
//         console.log('Error while getting the celebrities from the DB: ', error);
//     })


//   }
  
  
//   )

// router.post ('/new', (req,res,next) => {
//     res.render('celebrities/new')
// }



// )

module.exports = router;
