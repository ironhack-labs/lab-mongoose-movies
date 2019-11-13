const celebrities = [
  {
    name: "Mathew Mcconaughey",
    occupation: "Actor",
    catchPhrase: "Alright, alright, alright"
  },
  {
    name: "Roberto Benigni",
    occupation: "Actor",
    catchPhrase: "La vita è bella"
  },
  {
    name: "Angela Merkel",
    occupation: "Politician",
    catchPhrase: "Wir haben so vieles geschafft - wir schaffen das."
  }
];

const movies = [
  {
    title: "Blade Runner",
    genre: "Science fiction",
    plot:
      "Deckard, whose job as a 'blade runner' was to track down bioengineered beings known as replicants and 'retire' (kill) them, is informed that four are on Earth illegally."
  },
  {
    title: "Inception",
    genre: "Sci-Fi Action",
    plot:
      "Dom Cobb (Leonardo DiCaprio) is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb’s rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible–inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming."
  },
  {
    title: "Pulp Fiction",
    genre: "Crime",
    plot:
      "Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace (Ving Rhames) ; his actress wife, Mia (Uma Thurman) ; struggling boxer Butch Coolidge (Bruce Willis) ; master fixer Winston Wolfe (Harvey Keitel) and a nervous pair of armed robbers, 'Pumpkin' (Tim Roth) and 'Honey Bunny' (Amanda Plummer)."
  }
];

const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

mongoose.connect("mongodb://localhost/starter-code");

Celebrity.insertMany(celebrities)
  .then(cel => {
    console.log(cel.length + " celebrities were added");
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });

Movie.insertMany(movies)
  .then(cel => {
    console.log(cel.length + " movies were added");
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
