const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");
const Movies = require("../models/movies")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/celebrity", (req, res, next) => {
  Celebrity.find({})
    .then(celebs => {
      const hbsObj = {
        celebs
      };
      res.render("celebrities", hbsObj);
    })
    .catch(err => console.log(err));
});

// router.get("/celebrity/:id", (req, res, next) => {
//   // console.log(req.params.id)
//   const celebName = req.params.id;
//   Celebrity.findOne({ name: celebName })
//     .then(celeb => {
//       const hbsObj = {
//         celeb
//       };
//       // console.log(hbsObj)
//       res.render("celebrities/details", hbsObj);
//     })
//     .catch(err => console.log(err));
// });

router.get("/celebrity/details/:id", (req, res, next) => {
  // console.log(req.params.id)
  const id = req.params.id;
  Celebrity.findById(id)
    .then(data => {
      // const celeb = {
      //   data
      // };
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-",data)
      res.render("celebrities/details", {data});
    })
    .catch(err => console.log(err));
});

router.get("/celebrity/new", (req,res,next ) => {
// console.log(req,"++++++++++++++++++++++++++++++++++++++++++++")
res.render("celebrities/createceleb")
})

router.post("/createceleb",(req,res,next) => {
  const newceleb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }
  console.log('435543345435454343532',newceleb)
  Celebrity.create(newceleb)
  .then(createcelebs => {
    console.log("WE DID IT")
    res.redirect("/celebrity")
})
})

router.post("/celebrity/delete/:id",(req,res,next) => {
  let id = req.params.id
  console.log(id)
  
  Celebrity.findByIdAndRemove(id)
  .then(result => {
    console.log("WE DID IT")
    res.redirect("/celebrity")
}).catch((err) => {
  next(err)
})
})


router.get("/celebrity/edit/:id", (req,res,next ) => {
// console.log(req,"++++++++++++++++++++++++++++++++++++++++++++")
res.render("celebrities/editceleb")
})


router.post("/celebrity/edit/:id",(req,res,next) => {
  console.log("HEHEHEHEHEHEHEHEHEHEHEHEHEH")
   let id = req.params.id
  Celebrity.findByIdAndUpdate(id, req.body)
  .then(result => {
    console.log("SUCCESS")
    res.redirect("/celebrity")
}).catch((err) => {
  next(err)
})
})

router.get("/movies", (req, res, next) => {
  Movies.find({})
    .then(movieget => {
      const hbsObj = {
        movieget
      };
      res.render("Movies", hbsObj);
      console.log(hbsObj)
    })
    .catch(err => console.log(err));
});

router.get("/movies/details/:id", (req, res, next) => {
  // console.log(req.params.id)
  const id = req.params.id;
  Movies.findById(id)
    .then(data => {
      // const celeb = {
      //   data
      // };
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-",data)
      res.render("movies/details", {data});
    })
    .catch(err => console.log(err));
});


router.get("/movies/new", (req,res,next ) => {
// console.log(req,"++++++++++++++++++++++++++++++++++++++++++++")
res.render("movies/createmovie")
})

router.post("/createmovie",(req,res,next) => {
  const newmovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }
  console.log('435543345435454343532',newmovie)
  Movies.create(newmovie)
  .then(createmovie => {
    console.log("WE DID IT")
    res.redirect("/movies")
})
})

router.post("/movies/delete/:id",(req,res,next) => {
  let id = req.params.id
  console.log(id)
  
  Movies.findByIdAndRemove(id)
  .then(result => {
    console.log("WE DID IT")
    res.redirect("/movies")
}).catch((err) => {
  next(err)
})
})

router.get("/movies/edit/:id", (req,res,next ) => {
// console.log(req,"++++++++++++++++++++++++++++++++++++++++++++")
res.render("movies/editmovie")
})


router.post("/movies/edit/:id",(req,res,next) => {
  console.log("HEHEHEHEHEHEHEHEHEHEHEHEHEH")
   let id = req.params.id
  Movies.findByIdAndUpdate(id, req.body)
  .then(result => {
    console.log("SUCCESS")
    res.redirect("/movies")
}).catch((err) => {
  next(err)
})
})


module.exports = router;
