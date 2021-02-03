const router = require("express").Router();
const celebritiesController = require("../controllers/celebrities.controller");
const moviesController = require("../controllers/movies.controller")
const miscController = require("../controllers/misc.controller");
const usersController = require("../controllers/users.controller")

// HOME PAGE
router.get("/", miscController.home);


// CELEBRITIES
// Read - Celebrity list
router.get('/celebrities', celebritiesController.list)

// Create - Celebrity
router.get('/celebrities/celebrityForm', celebritiesController.create)
router.post('/celebrities/celebrityForm', celebritiesController.doCreate)

// Read - Celebrity detail
router.get('/celebrities/:id', celebritiesController.detail)

// Remove - Celebrity
router.post('/celebrities/:id/delete', celebritiesController.delete)

// Update - Celebrity
router.get('/celebrities/:id/edit', celebritiesController.edit)
router.post('/celebrities/:id/edit', celebritiesController.doEdit)


// MOVIES
// Read - Movies list
router.get('/movies', moviesController.list);

// Create - Movie
router.get('/movies/movieForm', moviesController.create);
router.post('/movies/movieForm', moviesController.doCreate);

// Read - Movie detail
router.get('/movies/:id', moviesController.detail);

// Remove - Movie
router.post('/movies/:id/delete', moviesController.delete);

// Update - Movie
router.get('/movies/:id/edit', moviesController.edit);
router.post('/movies/:id/edit', moviesController.doEdit);

// USERS
// Read - Users list
router.get('/users', usersController.list)

// Create - User
router.get('/users/userForm', usersController.create);
router.post('/users/userForm', usersController.doCreate);

// Read - User detail
router.get("/users/:id", usersController.profile);

// Update - User
router.get('/users/:id/edit', usersController.edit);
router.post('/users/:id/edit', usersController.doEdit);

// Remove - User
router.post('users/:id/delete', usersController.delete);

module.exports = router;