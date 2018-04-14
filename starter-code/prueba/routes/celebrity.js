const express = require("express");
const router = express.Router();
//const debug = require("../log")(__filename);

const Celebrity = require("../models/Celebrity");

/* CRUD -> Retrieve ALL */
router.get("/", (req, res) => {
  Celebrity.find().then(celebrities => {
    console.log(celebrities)
    res.render("celebrity_list", { celebrities });
  })
  .catch(error => {
    console.log(error)
  })

});

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    console.log(celebrity);
      res.render("show", { celebrity });
    })
  });
module.exports = router;


/* CRUD -> Create FORUMULARIO form */
router.get("/new", (req, res) => {
  res.render("new");
});

/* CRUD -> Acquire form params and create the celebrity object in DB */
router.post("/new", (req, res) => {
  const { name, occupation, catchPhrase,} = req.body;

  const celebrity = new Celebrity({ name, occupation, catchPhrase });
  celebrity.save().then(celebrity => {
    console.log(celebrity);
    res.redirect("celebrity_list");
  });
});






//const Author = require("../models/Author");






/* CRUD -> Retrieve Detail */
//router.get("/:id", (req, res, next) => {
  // Book.findById(req.params.id).then(book => {
  //   console.log(book);
  //   Author.findById(book.author).then(author => {
  //     console.log(author);
  //     res.render("book_detail", { book, author });
  //   })
  // });

/*   Book.findById(req.params.id)
  .populate('author')
  .then(book => {
    console.log(book)
    res.render("book_detail", { book});
  });
}); */

/* CRUD -> Udpate, show book update form */
/* router.get("/:id/edit", (req, res) => {
  Book.findById(req.params.id).then(book => {
    res.render("book_edit", { book });
  });
});
 */
/* CRUD -> Udpate, update the book in DB */
/* router.post("/:id/edit", (req, res) => {
  const { title, description, author, rating } = req.body;
  const updates = { title, description, author, rating };
  Book.findByIdAndUpdate(req.params.id, updates).then(() => {
    res.redirect("/book");
  });
}); */

/* CRUD -> Delete the book in DB */
/* router.get("/:id/delete", (req, res) => {
  Book.findByIdAndRemove(req.params.id).then(() => {
    res.redirect("/book");
  });
});
 */
