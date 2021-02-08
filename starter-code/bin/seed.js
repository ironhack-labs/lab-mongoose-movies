const mongoose = require("mongoose");
const Movie = require("./../models/movies");
require("dotenv").config();

const data = [
  {
    title: "Pirates of the Caribbean",
    genre: "adventure",
    plot: "Finds a treasure",
  },
  {
    title: "Apocalipsis",
    genre: "disaster movie",
    plot: "Everybody dies",
  },
  {
    title: "Life of a football star",
    genre: "biopic",
    plot: "Rise and fall of a sports star",
  },
];

mongoose.connect("");

mongoose
  .connect(`mongodb://localhost/moviesDb`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    // step 1.1 drop the DB
    console.log("Connected to the DB");
    const pr = x.connection.dropDatabase;
    return pr;
  })
  .then(() => {
    // INSERT THE DATA TO DB (RUN THE SEED)
    //2. Create the book documents

    const pr = Movie.create(data);
    return pr;
  })
  .then((movies) => {
    console.log(`Create ${movies.length} movies`);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("Error connection to db", err);
  });

/*const mongoose = require("mongoose");
const Celebrity = require("./../models/celebrities");
require("dotenv").config();

const data = [
  {
    name: "Johnny Depp",
    occupation: "actor",
    catchPhrase: "I am pirate",
  },
  {
    name: "Donald Trump",
    occupation: "clown",
    catchPhrase: "MAGA",
  },
  {
    name: "Iniesta",
    occupation: "Football",
    catchPhrase: "I am the best midfielder",
  },
];

mongoose.connect("");

mongoose
  .connect(`mongodb://localhost/celebrityDb`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    // step 1.1 drop the DB
    console.log("Connected to the DB");
    const pr = x.connection.dropDatabase;
    return pr;
  })
  .then(() => {
    // INSERT THE DATA TO DB (RUN THE SEED)
    //2. Create the book documents
    console.log("Uploading celebrities");

    const pr = Celebrity.create(data);
    return pr;
  })
  .then((celebs) => {
    console.log(`Create ${celebs.length} celebrities`);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("Error connection to db", err);
  });*/


