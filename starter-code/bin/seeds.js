const mongoose = require("mongoose");
const Celebrity = require("./../models/celebrity");
const Movie = require("./../models/movie");
require("dotenv").config();

// const celebrities = [
//   {
//     name: "Beyonce",
//     occupation: "Singer",
//     catchPhrase: "Hey there Beehive",
//   },
//   {
//     name: "Jeff Bezos",
//     occupation: "Ex Amazon CEO",
//     catchPhrase: "Add to cart",
//   },
//   {
//     name: "Boris Johnson",
//     occupation: "Prime Minister",
//     catchPhrase: "Supine protoplasmic invertebrate jellies",
//   },
// ];

const movies = [
  {
    title: "Soul",
    genre: "Animation",
    plot:
      "After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife.",
  },
  {
    title: "WIld Tales",
    genre: "Comedy/Drama",
    plot:
      "Six short stories that explore the extremities of human behavior involving people in distress.",
  },
  {
    title: "Dirty Dancing",
    genre: "Drama",
    plot:
      "Spending the summer at a Catskills resort with her family, Frances BABY Houseman falls in love with the camp's dance instructor, Johnny Castle.",
  },
];

// MONGOOSE CONNECTION
mongoose
  .connect(`mongodb://localhost:27017/3000`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log("Connected to the DB");
    const pr = x.connection.dropDatabase();
    return pr;
  })
  .then(() => {
    const pr = Celebrity.create(celebrities);
    return pr;
  })
  .then((createdCelebrities) => {
    console.log(`Created ${createdCelebrities.length} celebrities.`);
  })
  .then(() => {
    const pr = Movie.create(movies);
    return pr;
  })
  .then((createdMovie) => {
    console.log(`Created ${createdMovie.length} movies.`);
    mongoose.connection.close();
  })
  .catch((err) => console.log("Error connection to the DB", err));
