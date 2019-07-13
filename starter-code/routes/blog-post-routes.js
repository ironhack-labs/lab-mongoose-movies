const express = require('express');
const router = express.Router();

const Post = require('../models/Post');




router.get('/posts', (req, res, next) => {

  Post.find().populate('author')
    .then((allThePosts) => {

      if (req.user) {

        allThePosts.forEach((eachPost) => {
          console.log('its a post')

          if (eachPost.author._id.equals(req.user._id)) {
            eachPost.owned = true;
          }

        })
      }

      res.render('post-views/all-the-posts', {
        posts: allThePosts
      })
    })
    .catch((err) => {
      next(err)
    })
})


router.get('/posts/add-new', (req, res, next) => {

  if (!req.user) {
    req.flash('error', 'must be logged in to make posts')
    res.redirect('/login')
  }

  res.render('post-views/add-post')

})



router.post('/posts/create-new', (req, res, next) => {

  let newTitle = req.body.theTitle;
  let newContent = req.body.theContent;
  let newAuthor = req.user._id;

  Post.create({
      title: newTitle,
      content: newContent,
      author: newAuthor
    })
    .then(() => {
      req.flash('error', 'post successfully created')
      res.redirect('/posts')

    })
    .catch((err) => {
      next(err)
    })
})


router.post('/posts/delete/:idOfPost', (req, res, next) => {
  Post.findByIdAndRemove(req.params.idOfPost)
    .then(() => {
      req.flash('error', 'POST SUCCESSFULLY DELETED!')
      res.redirect('/posts')
    })
    .catch((err) => {
      next(err)
    })

})

module.exports = router;