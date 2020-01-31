const express = require("express");
const router = new express.Router();
const celebrityModel = require("../models/Celebrity");

// const handleReadCelebritys = id => celebrityModel.find(id ? { _id: id } : {});

router.get("/create-celebrity", (req, res) => {
  res.render("form-celebrity");
});

router.post("/create-celebrity", (req, res) => {
  const { name, occupation , catchPhrase } = req.body;
  // if some tests must be performed, do so before database query
  celebrityModel
    .create({
      name,
      occupation,
      catchPhrase,
    })
    .then(dbRes => res.redirect("/all-celebrities"))
    .catch(dbErr => {
      console.log(dbErr);
      res.send("OH NO, an error occured while creating new celebrity !");
    });
});

router.get("/all-celebrities", (req, res) => {
    celebrityModel.find() // retreive all the documents in the celebritys collection
    .then(dbResults => {
        console.log("OH yes database", dbResults);
        res.render("list-celebrity", {
            celebrities: dbResults
        });
    })
    .catch(dbErr => {
      console.log("OH NO ! Database error", dbErr);
    });
});

// :id is a request param... a variable
router.get("/celebrity/:id", (req, res) => {
  // console.log(req.params.id);
  celebrityModel
    .findById(req.params.id)
    .then(celebrity => {
      res.render("page-celebrity", { celebrity });
    })
    .catch(dbErr => console.error("OH no, db err :", dbErr));
});

router.get("/admin/celebrities", (req, res) => {   
  celebrityModel
    .find() // retreive all the documents in the celebritys collection
    .then(dbResults => {
      console.log(dbResults);
      res.render("admin-celebrities", {
        celebrities: dbResults
      });
    })
    .catch(dbErr => {
      console.log("OH NO ! Database error", dbErr);
    });
});

router.get("/admin/celebrity/update/:id", (req, res) => {
  celebrityModel
    .findById(req.params.id)
    .then(dbRes => {
      res.render("form-celebrity-update", { celebrity: dbRes });
    })
    .catch(dbErr => console.error(dbErr));
});

router.post("/admin/celebrity/update/:id", (req, res) => {
  // console.log(req.params.id); // access vars declared in the route
  // console.log(req.body); // access the posted data
  const {  name, occupation , catchPhrase } = req.body;

  celebrityModel.findByIdAndUpdate(req.params.id, {
      name,
      occupation,
      catchPhrase,
  })
  .then(dbRes => {
    res.redirect("/admin/celebrities");
  })
  .catch(dbErr => {
    console.error(dbErr)
  });
});

router.get("/admin/celebrity/delete/:id", (req, res) => {
  celebrityModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.redirect("/admin/celebrities");
    })
    .catch(dbErr => {
      console.error(dbErr);
    });
});

module.exports = router;
