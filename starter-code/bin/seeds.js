const mongoose = require("mongoose");
//const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");
mongoose.connect("mongodb://localhost/starter-code");

const movies = [
  { title: "Titanic",
    genre: "Drama", 
    plot: "Poor man falls in love with rich lady on a boat. Boat sinks, men dies, woman survives"
  },
  {title: "Han Solo",
  genre: "Sci-Fi", 
  plot: "Movie about space fighter jet legend Han Solo and hos background story, as part of the Star Wars epos"
},
  {
  title: "Dunkirk",
  genre: "Drama",
  plot: "War movie portraying the battle of Dunkirk during the first worldwar, where the british were locked in"
  }
]

/*
const celebrities = [
  {
  name: "Conan Christopher OBrien",
  occupation: "Comedian",
  catchphrase: "One’s dream is constantly evolving, rising and falling, changing course.",
  image: "https://www.bostonherald.com/wp-content/uploads/migration/2017/07/25/conan.1.jpg?w=810"
  },
  {
    name: "Bruno Ganz",
    occupation: "Actor",
    catchphrase: "Isn't life under the sun just a dream?",
    image: "http://br.web.img3.acsta.net/pictures/16/01/12/15/32/231308.jpg"
    },
    {
      name: "Jan Böhmermann",
      occupation: "Comedian",
      catchphrase: "5G Highspeed Internet, oder wie man im Rest von Europa sagt: Internet.",
      image: "https://www.welt.de/img/debatte/kommentare/mobile154171274/9532500577-ci102l-w1024/Jan-Boehmermann-Recep-Tayyip-Erdogan.jpg"
      }
]

Celebrity.deleteMany().then(() => {
  Celebrity.create(celebrities)
    .then(celebrities => {
      console.log(celebrities.length + " celebrities have been created");
      mongoose.connection.close();
    })
    .catch(err => {
      console.log("An error happened:", err);
    });
});
*/

Movie.deleteMany().then(() => {
  Movie.create(movies)
    .then(movies => {
      console.log(movies.length + " movies have been created");
      mongoose.connection.close();
    })
    .catch(err => {
      console.log("An error happened:", err);
    });
});
