const express = require("express");
const router = express.Router();

const Celebrity = require("../models/Celebrity");

router.get("/", (req, res, next) => {
    Celebrity.find({})
        .then(celebrities => {
            console.log(celebrities)
            res.render("celebrities/index", { celebrities });
        })
});

router.get("/celebrities/new", (req, res, next) => {
    res.render("celebrities/new");
});

router.post('/celebrities/new', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    new Celebrity({ name, occupation, catchPhrase })
        .save().then(celebrity => {
            console.log("Celebrity sucessfully created!");
            res.redirect('/celebrities');
        });
});

router.get('/celebrities/edit/:id', (req, res) => {
    Celebrity.findById(req.params.id).then(celebrity => {
        res.render('celebrities/edit', { celebrity });;
    });
});

router.post('/celebrities/edit/:id', (req,res) => {
      const {name,occupation,catchPhrase} = req.body;
      Celebrity.findByIdAndUpdate(req.params.id,{name,occupation,catchPhrase})
          .then( celebrity => {
            res.redirect('/celebrities')
          });
    });

router.get('/celebrities/delete/:id', (req, res) => {
    Celebrity.findByIdAndRemove(req.params.id, () => res.redirect('/celebrities'));
});

router.get("/celebrities/:id", (req, res, next) => {
    Celebrity.findById(req.params.id).then(celebrity => {
        res.render("celebrities/show", { celebrity });
    });
});

















module.exports = router;


    /* CR(U)D: Update the book, show update form  
router.get('/books/edit/:id', (req,res) => {
  Book.findById(req.params.id).then(book => {
    res.render('book/edit',{book});;
  })
})

 CR(U)D: Update the book in DB 
router.post('/books/edit/:id', (req,res) => {
  const { title, author, description, rating} = req.body;
  Book.findByIdAndUpdate(req.params.id,{ title, author, description, rating })
      .then( book => {
        res.redirect('/books')
      })
})

 CRU(D): Update the book in DB 
router.get('/books/delete/:id',(req,res) => {
  Book.findByIdAndRemove(req.params.id, () => res.redirect('/books'));
})


 /* C(R)UD: Retrieve -> Get a book 
router.get('/books/:id', (req, res, next) => {
  Book.findById(req.params.id).then( book => {
    Comment.find({book: book._id}).then(comments => {

      console.log(book);
      console.log(comments);

      res.render('book/detail', {book, comments});
    })
  })
});


 C(R)UD: Retrieve -> Get a book 
router.get('/comments', (req, res, next) => {
  Comment.find({}).populate('book').then(comments  => {
    console.log(comments);
    res.render('comments/list',{comments});
  })
}); */



