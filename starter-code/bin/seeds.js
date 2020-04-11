const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/movie")

const celebrities = [
    {
        name: "Rodolfo Langostino",
        occupation: "TV prawn",
        catchPhrase: "Pibe, lleváme a casa"
    },
    {
        name: "Quentin Tarantino",
        occupation: "Movie director",
        catchPhrase: "Violence is one of the most fun things to watch"
    },
    {
        name: "Leo Messi",
        occupation: "Football GOAT",
        catchPhrase: "I miss Luís Suárez a lot"
    }
];

const movies = [
    {
      title: "Olsen",
      genre: "Shaw",
      plot: "VORATAK"
    },
    {
      title: "Hansen",
      genre: "Cohen",
      plot: "TALKALOT"
    },
    {
      title: "Alvarez",
      genre: "Alicia",
      plot: "NIMON"
    },
    {
      title: "Estes",
      genre: "Jefferson",
      plot: "CAPSCREEN"
    },
]

const dbName = "celebrities";

// const collection = "Celebrity";
const collection = "Movie";

// SEED SEQUENCE

mongoose
  .connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  // .then(() => Celebrity.create(celebrities))
  .then(() => {
    // const collection = "Celebrity";

    const Model = collection === "Movie" ? Movie : Celebrity;
    const data = collection === "Movie" ? movies : celebrities;

    return Model.create(data);
  })
  .then(createdDocuments =>
    console.log(
      `Created ${createdDocuments.length} documents for ${collection}`
    )
  )
  .then(() => mongoose.connection.close())
  .then(() => console.log("Connection closed!"))
  .catch(err => console.log(err));
