const mongoose = require("mongoose");
// const moviesdata = require("../data/moviesdata");
const CelebrityModel = require("../models/CelebrityModel");
const MovieModel = require("../models/MovieModel");

//Step 1 = Connect to DB using mongoose

mongoose.Promise = Promise;
mongoose
  .connect(
    "mongodb://localhost/mongoose-movies-daily-exercise",
    { useMongoClient: true }
  )
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

//   function capitalizeFirstLetter(string) {
// 	return string.charAt(0).toUpperCase() + string.slice(1);
// }

//Step 2 = actually create the model i.e. use Model.create()

///VERSION A : The Celeb Model;
let celebrityArray = [
  {
    name: "Britney Spears",
    occupation: "Musician",
    catchphrase: "It's Britney, bitch!"
  },
  {
    name: "Beyoncé",
    occupation: "Musician",
    catchphrase: "OK Ladies, now let's get in formation"
  },
  {
    name: "Mir",
    occupation: "TA",
    catchphrase: "I hate books also"
  }
];

CelebrityModel.deleteMany().then(_ => {
  CelebrityModel.create(celebrityArray)
    .then(theCelebData => {
      console.log(
        theCelebData,
        theCelebData.length,
        "celebrities were created"
      );
    })
    .catch(err => console.log("Sorry, could not create"));
});

///VERSION B : The Movie Model;

let moviesArray = [
  {
    title: "Searching",
    genre: "Mystery & Suspense",
    plot:
      "David Kim (John Cho)'s 16-year-old daughter goes missing, a local investigation is opened and a detective is assigned to the case. "
  },
  {
    title: "Crazy Rich Asians",
    genre: "Comedy",
    plot:
      "Crazy Rich Asians follows native New Yorker Rachel Chu as she accompanies her longtime boyfriend, Nick Young, to his best friend's wedding in Singapore."
  },
  {
    title: "Alpha",
    genre: "Action & Adventure",
    plot:
      "A fascinating, visually stunning story that shines a light on the origins of man's best friend."
  }
];

MovieModel.deleteMany().then(_ => {
  MovieModel.create(moviesArray)
    .then(theMovieData => {
      console.log(theMovieData, theMovieData.length, "movies were created");
      mongoose.connection.close();
    })
    .catch(err => console.log("Sorry, could not create"));
});
