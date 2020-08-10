const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity");

/**
 * To render and list  all the celebrities
 */
router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then((celebritiesFromDB) => {
      // console.log("List of Celebrs from DB", celebritiesFromDB);
      // const { name, occupation, catchPhrase } = celebritiesFromDB;
      res.render("celebrities/index", { celebrities: celebritiesFromDB });
    })
    .catch((err) => console.log(`Err while displaying celebrities : ${err}`));
});

//
router.get("/new-celebrity", (req, res) => {
  res.render("celebrities/new");
});

/**
POST from create new form 
 */
router.post("/celebrities/new", (req, res) => {
  const { name, occupation, cPhrase } = req.body;
  console.log({ name, occupation, cPhrase });
  newCelebrity = new Celebrity({ name, occupation, cPhrase });
  newCelebrity
    .save()
    .then((dataFromDB) => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      res.render("celebrities/new");
      console.log(`Error while adding a new  Celebrity : ${err}`);
    });
});

/**
 * To render and list  all the celebrities
 */
router.get("/celebrities/:celb_Id", (req, res) => {
  const { celb_Id } = req.params;

  Celebrity.findById(celb_Id)
    .then((celbDetails) => {
      //   console.log("celeb details from DB", celbDetails);
      res.render("celebrities/show", { celebrityInfo: celbDetails });
    })
    .catch((err) =>
      console.log(`Err while displaying post input page: ${err}`)
    );
});

/**
 *  Delete Celebrity
 */
router.post("/celebrities/:celb_Id/delete", (req, res) => {
  const { celb_Id } = req.params;
  // console.log(" delete entered ", celb_Id);
  Celebrity.findByIdAndRemove(celb_Id)
    .then(() => res.redirect("/celebrities"))
    .catch((error) => console.log(`Error while deleting Celebrity: ${error}`));
});

/**
Edit celebrity
 */
router.get("/edit-celebrities/:celbId", (req, res) => {
  const { celbId } = req.params;
  // console.log(" edit entered ", celbId);
  Celebrity.findOne({ _id: celbId })
    .then((celebrityRecord) => {
      // console.log(celebrityRecord);
      res.render("celebrities/edit", celebrityRecord);
    })
    .catch((error) =>
      console.log(`Error while getting Celebrity details from DB: ${error}`)
    );
  // res.render("celebrities/edit");
});

router.post("/celebrities/:celbId/edit", (req, res) => {
  const { celbId } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  console.log(" edit  entered ", { name, occupation, catchPhrase });

  Celebrity.findByIdAndUpdate(
    celbId,
    { name, occupation, catchPhrase },
    { new: true }
  )
    .then(() => res.redirect("/celebrities"))
    .catch((error) => console.log(`Error while editing Celebrity: ${error}`));
});

// export
module.exports = router;
