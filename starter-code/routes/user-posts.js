const express = require('express');
const router = express.Router();
const Post = require('../models/posts');

router.post('/user-posts', (req, res, next)=>{
  
  console.log(req.body);

  Post.create(req.body)
  .then(()=>{
    res.redirect('/posts');
  })
  .catch((error)=>{
    console.log(error);
  });

});


module.exports = router;