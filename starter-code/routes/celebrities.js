const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');
const mongoose = require('mongoose');


router.get('/', (req, res, next) => {
  Celebrity.find()
                    .then(data => {
                      console.log(data);
                      res.render('celebrities/index', {data});
                    })
                    .catch( err => {
                      throw new Error(err);
                  });
  
});

router.post('/', async (req, res, next) => {

  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  console.log(newCelebrity);

  Celebrity.create(newCelebrity)
      .then(() => {
        res.redirect('/celebrities');
      })
      .catch( err => {
        res.render('celebrities/new');
        throw new Error(err);
        
    });
    
         
});

router.get('/:id/edit', (req, res, next) => {
  const {id} = req.params;
  console.log(id);
    Celebrity.findOne({_id: id})
                      .then(data => {
                        console.log(data);
                        res.render('celebrities/edit', data);
                      })
                      .catch( err => {
                        throw new Error(err);
                    });
    
  });

router.post('/:id/edit', async (req, res, next) => {
  const {id} = req.params;
  console.log(id)
  console.log(req.body)
  const editCelebrity = {...req.body};
  console.log(editCelebrity);

  try {
    await Celebrity.findOneAndUpdate({_id: id},{ $set: editCelebrity});
    res.redirect('/celebrities');
  } catch (error) {
    const data = await Celebrity.find();
    console.log(error);
    res.render('celebtiries', {data});
  }

    
         
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
     
   });

router.get('/:id', (req, res, next) => {
  const {id} = req.params;
  console.log(id);
  Celebrity.findOne({_id: id})
                    .then(data => {
                      console.log(data);
                      res.render('celebrities/show', data);
                    })
                    .catch( err => {
                      throw new Error(err);
                  });
    
  });



  router.post('/:id/delete', (req, res, next) => {
    const {id} = req.params;
    console.log(id);
      Celebrity.findByIdAndRemove({_id: id})
                        .then(data => {
                          console.log(data);
                          res.redirect('/celebrities');
                        })
                        .catch( err => {
                          throw new Error(err);
                      });
      
    });


  module.exports = router;
