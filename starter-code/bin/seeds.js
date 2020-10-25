const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

mongoose.connect(`mongodb://localhost/starter-code`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Celebrity.collection.drop();

//Create an array of 3 objects,
// const celebrity = [
//   {
//     name: "James Bond",
//     occupation: "Actor",
//     catchPhrase: "The name is Bond, James Bond",
//   },
//   {
//     name: "Don Vito Corleone",
//     occupation: "Actor",
//     catchPhrase: "I'm going to make him an offer he can't refuse",
//   },
//   {
//     name: "Barney Stinson",
//     occupation: "Actor",
//     catchPhrase: "Legendary",
//   },
// ];


//Call the `Celebrity` model's `create` method with the array as argument
// Celebrity.create(celebrity, (err) => {
//     if (err) { throw(err) }
//     console.log(`Created ${celebrity.length} celebrity`)
//     mongoose.connection.close();
//   });

//Run the seed file with `node` to seed your database.
//Check the database with the `mongo` command to confirm that your data was saved.
//node bin/seeds.js



//Create an array of 3 fake movies,
const fakeMovies = [
  {
    title: "Blancanieves",
    genre: "Animación",
    plot: "Una mujer que espera a su príncipe",
  },
  {
    title: "Frozen",
    genre: "Animación",
    plot: "Una mujer que le gusta el hielo",
  },
  {
    title: "Los aristogatos",
    genre: "Animación",
    plot: "Muchos gatos",
  },
];


//Call the `Movie` model's `create` method with the array as argument
Movie.create(fakeMovies, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${fakeMovies.length} movie`)
    mongoose.connection.close();
  });