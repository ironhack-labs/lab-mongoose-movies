const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celeb-app');
const Celebrity = require('../model/celebrity.js');
const Movie = require('../model/movie.js');

const movies = [
  {
    title: "The Dark Knight",
    genre: "Fiction",
    plot: "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism."
  },
  {
    title: "Dumb and Dumber 2",
    genre: "Comedy",
    plot: "Imbecilic best friends Lloyd Christmas (Jim Carrey) and Harry Dunne (Jeff Daniels) stumble across a suitcase full of money left behind in Harry's car by Mary Swanson (Lauren Holly), who was on her way to the airport. The pair decide to go to Aspen, Colo., to return the money, unaware that it is connected to a kidnapping. As Harry and Lloyd -- who has fallen in love with Mary -- are pursued across the country by hired killers and police, they find both their friendship and their brains tested."
  },
  {
    title: "Finding Dory",
    genre: "Adventure Film",
    plot: "Dory, a Regal blue tang, gets separated from her parents as a child. As she grows up, Dory attempts to search for them, but gradually forgets them due to her short-term memory loss disability. After accidentally running into Marlin, a clownfish who is looking for his missing son, Nemo, she joins him on his journey."
  }
];

Movie.create(movies,(err, docs) => {
  if (err) {
    next(err);
  }

  docs.forEach((oneMovie) =>{
    console.log(`${oneMovie.title}
      ${oneMovie._id}
      ${oneMovie.genre}`);
  });

  mongoose.disconnect();
});

// const celebs = [{
//   name: 'Arnold Schwarzenegger',
//   occupation: 'Proffesional Bodybuilder',
//   catchPhrase: 'NOW GET TO THE CHOPAAAA!! GET DOWN GET DOWN!!'
// },
// {
//   name: 'Eddie Murphy',
//   occupation: 'Comedian & Actor',
//   catchPhrase: 'I will moonwalk all up and down your ass mothaf***er!'
// },
// {
//   name: 'Will Smith',
//   occupation: 'Comedian & Actor',
//   catchPhrase: 'If you dont want a sarcastic answer. Then dont ask stupid questions!'
// }
// ];
//
// Celebrity.create(celebs,(err, docs) => {
//   if (err) {
//     next(err);
//   }
//
//   docs.forEach((oneCeleb) =>{
//     console.log(`${oneCeleb.name}
//       ${oneCeleb._id}`);
//   });
//
//   mongoose.disconnect();
// });
