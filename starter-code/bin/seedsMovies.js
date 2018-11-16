const mongoose = require("mongoose");
const Movies = require("../models/Movies");

mongoose
  .connect(
    "mongodb://localhost/mongoose-movies",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected!"));

const movies = [
  {
    title: "Widows",
    genre: "Drama",
    plot:
      "Set in contemporary Chicago, amid a time of turmoil, four women with nothing in common except a debt left behind by their dead husbands' criminal activities, take fate into their own hands, and conspire to forge a future on their own terms."
  },
  {
    title: "Green Book",
    genre: "Comedy",
    plot:
      "A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South."
  },
  {
    title: "Instant Family ",
    genre: "Comedy",
    plot:
      "A couple find themselves in over their heads when they adopt three children."
  }
];

Movies.collection.drop();

Movies.create(movies).then(movies => {
  console.log(`Created ${movies.length} movies!`);
  mongoose.disconnect();
});
