const express = require("express");
const router = express.Router();

const Celebrity = require("../models/Celebrity");

// Base URL

router.get("/", (req, res, next) => {
  res.redirect("/celebs");
});

// GET all celebrities

router.get("/celebs", (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      console.log("celebs fetched: ", celebrities);
      res.render("celebs", { celebs: celebrities });
    })
    .catch(err => {
      console.log("ERR: /celebs: ", err);
    });
});

// GET One Celeb to edit

router.get("/edit-celeb/:celebId", (req, res, next) => {
  let celebId = req.params.celebId;
  console.log("editing: ", celebId)
  Celebrity.findById(celebId)
    .then(celebrity => {
      console.log("celeb fetched to edit: ", celebrity);
      res.render("edit-celeb", { celeb: celebrity });
    })
    .catch(err => {
      console.log("ERR:  GET: /celeb-edit: ", err);
    });
});

// POST One Celeb to apply changes

router.post("/edit-celeb/:celebId", (req, res, next) => {
  console.log(req.body)
  let celebId = req.params.celebId;
  Celebrity.updateOne({_id: celebId}, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(celebrity => {
      console.log("POST /edit-celeb:", celebrity);
      res.redirect("/celebs");
    })
    .catch(err => {
      console.log("ERR:  POST: /celeb-edit: ", err);
    });
});

// POST Upvote one Celeb +1 Heart


router.post("/up-vote/:celebId", (req, res, next) => {
  console.log(req.body)
  let celebId = req.params.celebId;
  Celebrity.updateOne({_id: celebId}, {$inc: {upVotes:1}})
    .then(celebrity => {
      console.log("POST /up-vote:", celebrity);
      res.redirect("/celebs");
    })
    .catch(err => {
      console.log("ERR:  POST: /celeb-edit: ", err);
    });
});

// GET Add a Celeb Page

router.get("/add-celeb", (req, res, next) => {
  res.render("add-celeb");
  
});


// POST Create a new Celeb

router.post("/add-celeb", (req, res, next) => {
  console.log(req.body)
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(celebrity => {
      console.log("POST /add-celeb:", celebrity);
      res.redirect("/celebs");
    })
    .catch(err => {
      console.log("ERR:  POST: /add-edit: ", err);
    });
});


// GET Delete a Celeb Page


router.get("/delete-celeb/:celebId", (req, res, next) => {
  let celebId = req.params.celebId;
  console.log("editing: ", celebId)
  Celebrity.findById(celebId)
    .then(celebrity => {
      console.log("celeb fetched to delete: ", celebrity);
      res.render("delete-celeb", { celeb: celebrity });
    })
    .catch(err => {
      console.log("ERR:  GET: /celeb-edit: ", err);
    });
});

router.post("/delete-celeb/:celebId", (req, res, next) => {
  let celebId = req.params.celebId;
  console.log("editing: ", celebId)
  Celebrity.findByIdAndDelete(celebId)
    .then(celebrity => {
      console.log("celeb deleted: ", celebrity);
      res.redirect("/celebs");
    })
    .catch(err => {
      console.log("ERR:  GET: /celeb-edit: ", err);
    });
});



module.exports = router;
