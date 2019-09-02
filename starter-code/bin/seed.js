const celebritiesModel = require("./../models/celebrities.js");
const moviesModel = require("./../models/movies.js")
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/lab-mongoose-movies", { useNewUrlParser: true })
.then (() => console.log("connected to mongo"))
.catch(err => console.log('error connecting to mongo, err'));

const celebrities = [
  {
    name: "Keanu Reeves",
    occupation: "actor",
    catchPhrase : "You have no idea what's coming !"
  },
  {
    name: "Snoop Dogg",
    occupation: "singer",
    catchPhrase : "Add -izzle to pretty much any word, and ta-da! It's been Snoop-ified."
  },
  {
    name: "Arnold Schwarzenegger",
    occupation: "actor",
    catchPhrase : "Hasta la vista, baby"
  },
]; 

function insertCelebrities() {
  celebritiesModel.insertMany(celebrities)
  .then (dbRes => console.log(dbRes))
  .catch(dbErr => console.log(dbErr));
}

insertCelebrities();

const movies = [
  {
    title:"Toy Story 4",
    genre:"comedy",
    plot:"Woody (Tom Hanks), Buzz Lightyear (Tim Allen) and the rest of Pixar’s animated toys are back in Toy Story 4, and though their return engagement may not be wholly necessary – considering 2011’s ideal franchise-capping Toy Story 3."
  },
  {
    title:"The Dead Don’t Die",
    genre:"thriller",
    plot:"Jim Jarmusch crafts an undeadpan comedy of apocalyptic proportions with The Dead Don’t Die, a Night of the Living Dead riff played for bleak satire. In the “nice” town of Centerville, chief Cliff (Bill Murray) and officer Ronnie (Adam Driver) are forced to contend with a zombie outbreak."
  },
  {
    title:"Avengers: Endgame",
    genre:"action",
    plot:"This entry is the culmination of its decade-plus run of interconnected films, which offered not only surprising twists and electric superhero spectacle, but also routine chances for its illustrious cast to actually act. Helmed by Joe and Anthony Russo with the same juggling-multiple-strands craftsmanship they brought to their prior franchise installments, this latest saga finds Earth’s Mightiest Heroes trying to undo big bad Thanos’ (Josh Brolin) population-halving “Snapture."
  }
]

function insertMovies() {
  moviesModel.insertMany(movies)
  .then (dbRes => console.log(dbRes))
  .catch(dbErr => console.log(dbErr));
}

insertMovies();