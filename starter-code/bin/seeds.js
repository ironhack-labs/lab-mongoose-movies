// const celebrities = [
//     {name : "Tom Cruise", occupation : "Actor" , catchPhrase : "Give me the money!" },
//     {name : "Arnold Schwarzenegger", occupation : "Actor and Politician" , catchPhrase : "Hasta la vista, baby"},
//     {name : "Joey Tribianni", occupation : "Actor" , catchPhrase : "How U Doin'?" }
// ]

const movies = [
    {title : "Casablanca", genre : "Drama, Romance, War" , plot : "Rick Blaine, who owns a nightclub in Casablanca, Morocco, discovers his old flame Ilsa is in town with her husband, Victor Laszlo. Laszlo is a resistance leader from Czechoslovakia, and with Germans on his tail, Ilsa knows Rick can help them get out of the country - but will he?" },
    {title : "12 Angry Men ", genre : "Drama" , plot : "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other. "},
    {title : "Nuovo Cinema Paradiso", genre : "Italian drama" , plot : "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist." }
]

const mongoose     = require('mongoose');

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
  
// const Celebrity = require('../models/Celebrity.js');
const Movie = require('../models/Movie.js');


// Celebrity.deleteMany()
// .then(()=> 
// console.log('All the previous celebrities are deleted'))


// Celebrity.create(celebrities)
// .then(createdCelebrities => { 
//     console.log(`Iteration 1 -- The ${createdCelebrities.length} celebrities are saved on MongoDB`);
//     mongoose.disconnect()})
// .catch(err => { console.log('An error happened:', err) });

Movie.deleteMany()
.then(()=> 
console.log('All the previous movies are deleted'))


Movie.create(movies)
.then(createdMovies => { 
    console.log(`Iteration 1 -- The ${createdMovies.length} movies are saved on MongoDB`);
    mongoose.disconnect()})
.catch(err => { console.log('An error happened:', err) });