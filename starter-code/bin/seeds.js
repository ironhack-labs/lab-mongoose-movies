const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie-model');

const dbName = 'Movies-app'
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebsArray = [
  {
    name: "Lebron James",
    occupation: "Basketball Player",
    catchPhrase: "Strive for Greatness",
    
  },
  {
    name: "Micheal Scott",
    occupation: "Regional Manager: Dunder Miflin",
    catchPhrase: "That's what she said!",

  },
  {
    name: "Dwight Schrute",
    occupation: "Assistant to the Regional Manager",
    catchPhrase: "Bears, Beets, Battlestar Galactica!",

  },
]

Celebrity.create(celebsArray)
.then(celebrities => {
    celebrities.forEach(oneCeleb => {
        console.log('In DB: ', oneCeleb.name);
    });
    // cut off DB connection
    mongoose.disconnect();
})
.catch( err => console.log('Error while creating seeds: ', err));




const moviesArray = [
  {
    title: "Avengers: Infinity War",
    genre: "Action",
    plot: "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment."
    
  },
  {
    title: "Step-Brothers",
    genre: "Comedy",
    plot: "Brennan Huff (Will Ferrell) and Dale Doback (John C. Reilly) have one thing in common: they are both lazy, unemployed leeches who still live with their parents. When Brennan's mother and Dale's father marry and move in together, it turns the overgrown boys' world upside down. Their insane rivalry and narcissism pull the new family apart, forcing them to work together to reunite their parents."

  },
  {
    title: "Super Bad",
    genre: "Comedy",
    plot: "Two inseparable best friends navigate the last weeks of high school and are invited to a gigantic house party. Together with their nerdy friend, they spend a long day trying to score enough alcohol to supply the party and inebriate two girls in order to kick-start their sex lives before they go off to college. Their quest is complicated after one of them falls in with two inept cops who are determined to show him a good time."

  },
]

// use .create() mongoose method to create entries in DB
Movie.create(moviesArray)
.then(movies => {
    movies.forEach(oneMovie => {
        console.log('In DB: ', oneMovie.title);
    });
    // cut off DB connection
    mongoose.disconnect();
})
.catch( err => console.log('Error while creating seeds: ', err));
