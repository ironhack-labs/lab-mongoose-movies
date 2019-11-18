const express = require('express');
const router  = express.Router();


const {
  /*celebridades*/
  celebritiesList,
  celebritiesDetail,
  newCelebrityForm,
  newCelebrityPost,
  celebrityDelete,
  celebrityEdit,
  celebrityEditPost,
  /*movies*/
  moviesList,
  moviesDetail,
  newMovieForm,
  newMoviePost,
  movieDelete,
  movieEdit,
  movieEditPost


} = require("../controllers/index.controller");


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/*inicia celebridades*/
/*lista*/
router.get("/celebrities", celebritiesList)
/*detalle*/
router.get("/celebrities/:id", celebritiesDetail);
/*agregar*/
router.get("/newcelebrity", newCelebrityForm);
router.post("/newcelebrity", newCelebrityPost);
/*eliminar */
router.get("/celebrities/:id/delete", celebrityDelete);
/*actualizar*/
router.get("/celebrities/:id/edit", celebrityEdit);
router.post("/celebrities/:id/edit", celebrityEditPost);
/*fin celebridades*/

/*inicia movies*/
/*lista*/
router.get("/movies", moviesList);
/*detalle*/
router.get("/movies/:id", moviesDetail);
/*add*/
router.get("/newmovie", newMovieForm);
router.post("/newmovie", newMoviePost);
/*eliminar */
router.get("/movies/:id/delete", movieDelete);
/*actualizar*/
router.get("/movies/:id/edit", movieEdit);
router.post("/movies/:id/edit", movieEditPost);
/*fin movies */




module.exports = router;
