const mongoose = require('mongoose')
require('../app.js')

// const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie.js');

// const celebrities = [
//     {
//       name: 'Michael Fassbender',
//       occupation: 'Actor',
//       catchPhrase: 'Big things have small beginnings',
//     },
//     {
//       name: 'Tom Hanks',
//       occupation: 'Actor',
//       catchPhrase: `If it wasn't hard, everyone would do it. It's the hard that makes it great`,
//     },
//     {
//       name: 'Ricky Gervais',
//       occupation: 'Comedian',
//       catchPhrase: 'Be happy. It really annoys negative people',
//     }
//   ];

  const movies = [
      {
          title: 'Seven', 
          genre: 'Thriller',
          plot: 'Set in a perpetually gloomy unnamed city, the film follows Somerset (Morgan Freeman), a retiring police detective, as he experiences his final week on the job, reluctantly working with assertive newcomer Mills (Brad Pitt). When an obese man is found brutally murdered in his home, the seasoned Somerset realizes this is no ordinary killing--someone tortured him because of his appetite. Slayings that reflect the sins of greed and sloth soon follow, leading Somerset and Mills on a desperate search to find the mysterious John Doe, who is responsible for these methodical murders. As the case builds to a startling conclusion, both Somerset and Mills become more involved than they ever could have imagined.'
      },
      {
          title: 'Silence of the lambs', 
          genre: 'Thriller',
          plot: 'Clarice Starling (Jodie Foster), a young and ambitious FBI agent, enlists the aid of criminally insane ex-psychiatrist Dr. Hannibal Lecter (Anthony Hopkins) to help track down a vicious serial killer named "Buffalo Bill" who skins his victims and who has kidnapped a girl, the only daughter of a republican senator.'
      },
      {
          title: 'Vertigo', 
          genre: 'Mistery',
          plot: "San Francisco police detective Scottie Fergusson (James Stewart) develops a fear of heights and is forced to retire when a colleague falls to his death during a chase. An old college friend hires Scottie to watch his wife Madeleine (Kim Novak) who has reportedly become possessed by her ancestor's spirit named Carlotta. Scottie follows her around San Francisco and is drawn to Madeleine and her obsession with death. He unwittingly becomes a figure in a complex plot, and is determined to discover the truth behind it all."
      }
    ];
  
//   Celebrity.deleteMany({})
//   .then (() => Celebrity.create(celebrities))
//   .then(celebrities => console.log(`${celebrities.length} added to the database`, celebrities))
//   .catch(e => console.log('Error: ', e))

  Movie.deleteMany({})
  .then(() => Movie.create(movies))
  .then(movies => console.log(`${movies.length} added to the database`, movies))
  .catch(e => console.log('Error: ', e))
