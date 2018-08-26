const express = require("express");
const router = express.Router();

const Book = require("../models/book.js");

/* GET home page */
router.get("/", (req, res, next) => {
  Book.find({})
    .then(books => {
      res.render("books", { books });
    })
    .catch(console.error);
});

router.get("/:id", (req, res) => {
  Book.findById(req.params.id)
    .then(book => {
      res.render("bookDetails", { book });
    })
    .catch(console.error);
});

router.get("/delete/:id", (req, res) => {
  Book.findByIdAndRemove(req.params.id)
    .then(result => {
      res.redirect("/books/");
    })
    .catch(console.error);
});

router.get("/edit/:id", (req, res, next) => {
  const { id } = req.params;
  Book.findById(id).then(book => {
    res.render("editBook", { book });
  });
});

router.post("/edit/:id", (req, res, next) => {
  const { id } = req.params;
  const { title, author, description, rating } = req.body;

  Book.findByIdAndUpdate(
    id,
    {
      title,
      author,
      rating,
      description
    },
    { new: true }
  ).then(book => {
    res.render("bookDetails", { book, updated: true });
  });
});

router.get("/create", (req, res, next) => {
  res.render("createBook");
});

router.post("/create", (req, res, next) => {
  const { title, author, description, rating } = req.body;
  const book = new Book({ title, author, description, rating });
  book
    .save()
    .then(() => {
      res.redirect("/books/");
    })

    .catch(console.error);
});

module.exports = router;
