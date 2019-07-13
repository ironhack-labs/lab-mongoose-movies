const express = require('express');
const router  = express.Router();
const Post = require('../models/posts');

/* GET celebs page */
router.get('/posts', (req, res, next) => {
    Post.find()
    .then((data)=>{
      res.render('posts', {posts: data});
      console.log("The received data from the DB: ", data);
    })
    .catch((err)=>{
      next(err);
    });
});

module.exports = router;