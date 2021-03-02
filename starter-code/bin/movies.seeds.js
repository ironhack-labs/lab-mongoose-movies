require("./../config/mongo");
const MovieModel = require("./../models/Movie");

const movies = [
  {
    title: "Toy Story",
    genre: "Kids",
    plot: "To infinitA cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
    cast: ["603e609c932ea462a7b87e4f"]
  },
  {
    title: "What's new, Scooby-Doo?",
    genre: "Kids",
    plot: "Scooby-Doo and the Mystery, Inc. gang are launched into the 21st century, with new mysteries to solve.",
    cast: ["603e609d932ea462a7b87e50"]
  },
  {
    title: "Sherlock Holmes",
    genre: "Mystery",
    plot: "Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England.",
    cast: ["603e609d932ea462a7b87e51", "603e609d932ea462a7b87e50"]
  }
];

MovieModel.insertMany(movies)
.then(console.log("Successfully added to the DB!"))
.catch(error => console.log(err));