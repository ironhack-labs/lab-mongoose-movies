const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model');
const Movies = require('../models/Movies.model');
const User = require('../models/User.model');
const bcryptjs = require('bcryptjs');
const saltRounds = 10 // SALTING;

/* GET home page */
router.get('/', (req, res, next) => {
  const user = req.session.currentUser;

  if (!user) {
    res.redirect("/login");
    return
  }

  res.render('index', {
        user: req.session.currentUser
});
});

/* 
*******************
login
*********************
*/
//login GET
router.get('/login', (req, res) => {
  res.render('auth/login');
})



//login post
router.post('/login', (req, res) => {

  const {
    username,
    password
  } = req.body;

  User.findOne({
      username
    })
    .then(usuario => {
      if (!usuario) {
        res.render('auth/login', {
          error: "el usuario no esta"
        })
        return
      } else if (bcryptjs.compareSync(password, usuario.passwordHash)) {

        req.session.currentUser = usuario
        res.redirect('/')
        return

      } else {
        res.render('index', {
          error: "pasword incorrecto"
        })
        return
      }



    }).catch(e => {
      next(e)
    })

})


/* 
*******************
Cierre login
*********************
*/

/* 
***************

registrar
**************

*/




//Signup GET
router.get('/signup', (req, res) => {
  res.render('auth/register');
})

//Signup Post
router.post('/signup', (req, res) => {
  const {
    username,
    password
  } = req.body


  bcryptjs.genSalt(saltRounds)
    .then(salt => bcryptjs.hash(password, salt))
    .then(hashed => {
      return User.create({
        username,
        passwordHash: hashed
      })
    }).then(user => {
      req.session.currentUser = user
      res.redirect('/')
    }).catch(e => {
      console.log(e);
    })



})





/* 
***************

caerrar registrar
**************

*/

/* 
*************************************
Celebridades
************************************
*/


router.get('/celebrities', (req, res, next) => {
  const user = req.session.currentUser;

  if (!user) {
    res.redirect("/login");
    return
  }

  Celebrity.find()
    .then(celebridades => {
      res.render('Celebrity/celebrity-list', {
        celebrity: celebridades
      });
    }).catch((e) => {
      next(e);
    })
});

router.post('/celebrities', (req, res, next) => {
  const {
    name,
    occupation,
    catchPhrase
  } = req.body;

  Celebrity.create({
    name,
    occupation,
    catchPhrase
  }).then(prueba => {

    res.redirect("/celebrities")

  }).catch((error) => {
    next(error)
  })


});
router.get('/celebrities/new', (req, res, next) => {
  const user = req.session.currentUser;

  if (!user) {
    res.redirect("/login");
    return
  }
  res.render("Celebrity/new");
});

router.get('/celebrities/:id', (req, res, next) => {

  const user = req.session.currentUser;

  if (!user) {
    res.redirect("/login");
    return
  }

  const {
    id
  } = req.params

  Celebrity.findById(id)
    .then(celebridades => {
      res.render('Celebrity/celebrity-details', celebridades);
    }).catch((e) => {
      next(e);
    })
});

router.post('/celebrities/:id', (req, res, next) => {
  const user = req.session.currentUser;

  if (!user) {
    res.redirect("/login");
    return
  }

  const {
    name,
    occupation,
    catchPhrase
  } = req.body;

  const {
    id
  } = req.params

  Celebrity.findByIdAndUpdate(id, {
      name,
      occupation,
      catchPhrase
    })
    .then(() => {
      res.redirect(`/celebrities/${id}`);

    }).catch((e) => {
      next(e);
    })
});

router.get('/celebrities/:id/delete', (req, res, next) => {

  const user = req.session.currentUser;

  if (!user) {
    res.redirect("/login");
    return
  }

  const {
    id
  } = req.params

  Celebrity.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(e => next(e))
});

router.get('/celebrities/:id/edit', (req, res, next) => {

  const {
    id
  } = req.params

  Celebrity.findById(id)
    .then((celebridadEdicion) => {
      console.log(celebridadEdicion);
      res.render("Celebrity/edit", {
        celebridad: celebridadEdicion
      });
    }).catch((e) => {
      next(e)
    })
});


/* 
*************************************
Cierre Celebridades
************************************
*/



/* 
*************************************
Movies
************************************
*/

router.get('/movies', (req, res, next) => {

  const user = req.session.currentUser;

  if (!user) {
    res.redirect("/login");
    return
  }

  Movies.find()
    .then(movies => {
      res.render('Movies/movies-list', {
        movies: movies
      });
    }).catch((e) => {
      next(e);
    })
});

router.get('/movies/new', (req, res, next) => {
  const user = req.session.currentUser;

  if (!user) {
    res.redirect("/login");
    return
  }
  res.render("Movies/new");
});

router.post('/movies/:id', (req, res, next) => {

  const user = req.session.currentUser;

  if (!user) {
    res.redirect("/login");
    return
  }

  const {
    title,
    genre,
    plot
  } = req.body;

  const {
    id
  } = req.params

  Movies.findByIdAndUpdate(id, {
      title,
      genre,
      plot
    })
    .then(() => {
      res.redirect(`/movies/${id}`);

    }).catch((e) => {
      next(e);
    })
});

router.get('/movies/:id', (req, res, next) => {

  const user = req.session.currentUser;

  if (!user) {
    res.redirect("/login");
    return
  }

  const {
    id
  } = req.params

  Movies.findById(id)
    .then(Movie => {
      res.render('Movies/movies-details', Movie);
    }).catch((e) => {
      next(e);
    })
});


router.post('/movies', (req, res, next) => {

  const user = req.session.currentUser;

  if (!user) {
    res.redirect("/login");
    return
  }

  const {
    title,
    genre,
    plot
  } = req.body;

  const {
    id
  } = req.params


  Movies.create({
    title,
    genre,
    plot
  }).then(prueba => {

    res.redirect("/movies")

  }).catch((error) => {
    next(error)
  })
});


router.get('/movies/:id/delete', (req, res, next) => {

  const user = req.session.currentUser;

  if (!user) {
    res.redirect("/login");
    return
  }

  const {
    id
  } = req.params

  Movies.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/movies')
    })
    .catch(e => next(e))
});

router.get('/movies/:id/edit', (req, res, next) => {

  const user = req.session.currentUser;

  if (!user) {
    res.redirect("/login");
    return
  }

  const {
    id
  } = req.params

  Movies.findById(id)
    .then((celebridadEdicion) => {
      console.log(celebridadEdicion);
      res.render("movies/edit", {
        movies: celebridadEdicion
      });
    }).catch((e) => {
      next(e)
    })
});



router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});


/* 
*************************************
Cierre de Movies
************************************
*/

module.exports = router;