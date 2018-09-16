const Celebrity = require('../models/celebrity.js');
const Movie = require('../models/movie')
 const mongoose = require('mongoose');
/*const data = [
  {
    name: "Bruce Dickinson",
    occupation: "Singer",
    catchPhrase: "Scream for me"
  },
  {
    name: "Kermit The Frog",
    occupation: "Being a Muppet",
    catchPhrase: "Hi-Ho"
  },
  {
    name: "Abbadon The Despoiler",
    occupation: "Traitor",
    catchPhrase: "Death to the false emperor"
  }
];

mongoose.connect('mongodb://localhost/movies-project', { UseNewUrlParser: true })
  .then(data => {
    console.log("Connected to mongoDB: " + data.connections[0].name)
    //Celebrity.collection.drop()
  })
  .then(() => Celebrity.insertMany(data2))
  .catch(e => console.log(e))
*/

const data2 = [
  {
    title: 'Dr Who',
    genre: 'Sci-fi',
    plot: 'An alien travels the universe through space and time because he is bored'
  },
  {
    title: 'Spider-man',
    genre: 'Action',
    plot: 'Teenager ends jumping between buildings after being bit by a spider'
  },
  {
    title: 'Robocop',
    genre: 'Action',
    plot: 'A cop gets transform into a tin and it turns out he is mad about it'
  }
]

mongoose.connect('mongodb://localhost/movies-project', { UseNewUrlParser: true })
  .then(data => {
    console.log("Connected to mongoDB: " + data.connections[0].name)
    //Movie.collection.drop()
  })
  .then(() => Movie.insertMany(data2))
  .catch(e => console.log(e))