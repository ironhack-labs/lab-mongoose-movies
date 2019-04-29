// const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity');

// const dbName = 'starter-code';//should be changed to the actual name of the database from app.js
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [

// {
//   name: "Anne Hathaway",
//   occupation: "actress",
//   catchPhrase: "Whatever you are made of, be the best of that."
// },
// {
//   name: "Tom Hardy",
//   occupation: "actor",
//   catchPhrase: "Ju jitsu is very Buddhist. All that we fear we hold close to ourselves to survive. So if you're drowning and you see a corpse floating by, hang on to it because it will rescue you."
// },
// {
//   name: "Robert de Niro",
//   occupation: "actor",
//   catchPhrase: "I'm not that type of guy, besides if I hit you, I'm afraid you'd like it."
// },
// ]

// Celebrity.create(celebrities, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrities.length} celebrities`)
//   mongoose.connection.close();
// });

const mongoose = require('mongoose');
const Movie = require('../models/movie');

const dbName = 'starter-code';//should be changed to the actual name of the database from app.js
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [

{
  title: "Les Miserables",
  genre: "Drama/Romance",
  plot: "After 19 years as a prisoner, Jean Valjean (Hugh Jackman) is freed by Javert (Russell Crowe), the officer in charge of the prison workforce. Valjean promptly breaks parole but later uses money from stolen silver to reinvent himself as a mayor and factory owner. Javert vows to bring Valjean back to prison. Eight years later, Valjean becomes the guardian of a child named Cosette after her mother's (Anne Hathaway) death, but Javert's relentless pursuit means that peace will be a long time coming."
},
{
  title: "Inception",
  genre: "Sci-fi/Thriller",
  plot: "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move."
},
{
  title: "Once Upon a Time in America",
  genre: "Drama/Crime",
  plot: "In 1968, the elderly David Noodles Aaronson (Robert De Niro) returns to New York, where he had a career in the criminal underground in the '20s and '30s. Most of his old friends, like longtime partner Max (James Woods), are long gone, yet he feels his past is unresolved. Told in flashbacks, the film follows Noodles from a tough kid in a Jewish slum in New York's Lower East Side, through his rise to bootlegger and then Mafia boss -- a journey marked by violence, betrayal and remorse."
},
]

Movie.create(movies, (err) => {
  if (err) {throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close();
});