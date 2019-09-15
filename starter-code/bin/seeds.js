const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

mongoose
  .connect('mongodb://localhost/mongoose-movies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


const celebrities = [
  {
    name: 'Jim Carrey',
    occupation: 'Actor',
    catchPhrase: "And that's the way the cookie crumbles"
  },
  {
    name: 'Kurt Cobain',
    occupation: 'Death',
    catchPhrase: "I'd rather be hated for who I am, than loved for who I am not."
  },
  {
    name: 'Chiquito de la Calzada',
    occupation: 'Humorist',
    catchPhrase: 'Quietorr'
  }
];

const movies = [
  {
    title: 'Red Sparrow',
    genre: 'Thriller',
    plot: "Ballerina Dominika Egorova is recruited to 'Sparrow School,' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations."
  },
  {
    title: 'Black Panther',
    genre: 'Superheroes',
    plot: "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake."
  },
  {
    title: 'Gringo',
    genre: 'Comedy',
    plot: "GRINGO, a dark comedy mixed with white-knuckle action and dramatic intrigue, explores the battle of survival for businessman Harold Soyinka (David Oyelowo) when he finds himself crossing the line from law-abiding citizen to wanted criminal."
  }
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});

Movie.create(movies, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close();
});