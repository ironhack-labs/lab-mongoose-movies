// const Celeb = require("../models/celebrity");
// const mongoose = require('mongoose');


// const dbName = 'mongoose-movies';
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {
//     name: "Tony Stark",
//     occupation: "Genius, Billionaire, Playboy Philanthropist",
//     catchphrase: "I am Ironman"
//   },
//   {
//     name: "Steve Rogers",
//     occupation: "Veteran",
//     catchphrase: "Courage, Honor, Loyalty, Sacrifice. You're braver than you think."
//   },
//   {
//     name: "Thor Odinson",
//     occupation: "Lord of Thunder",
//     catchphrase: "Loki, no!"
//   },
// ]

// Celeb.create(celebrities, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrities.length} celebrities`)
//   mongoose.connection.close()
// });

const Movie = require("../models/movie");
const mongoose = require('mongoose');


const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
  {
    title: "Mad Max - Fury Road",
    genre: "Action",
    plot: `An apocalyptic story set in the furthest reaches
    of our planet, in a stark desert landscape where humanity is
    broken, and almost everyone is crazed fighting for the necessities
    of life. Within this world exist two rebels on the run who just
    might be able to restore order. There's Max, a man of action and
    a man of few words, who seeks peace of mind following the loss of
    his wife and child in the aftermath of the chaos. And Furiosa, a
    woman of action and a woman who believes her path to survival may
    be achieved if she can make it across the desert back to her
    childhood homeland.`
  },
  {
    title: "Die Hard",
    genre: "Action",
    plot: `NYPD cop John McClane goes on a Christmas vacation to visit
    his wife Holly in Los Angeles where she works for the Nakatomi
    Corporation. While they are at the Nakatomi headquarters for a
    Christmas party, a group of robbers led by Hans Gruber take control
    of the building and hold everyone hostage, with the exception of John,
    while they plan to perform a lucrative heist. Unable to escape and
    with no immediate police response, John is forced to take matters
    into his own hands.`
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    plot: `Earth's future has been riddled by disasters, famines,
    and droughts. There is only one way to ensure mankind's survival:
    Interstellar travel. A newly discovered wormhole in the far reaches
    of our solar system allows a team of astronauts to go where no man
    has gone before, a planet that may have the right environment to
    sustain human life.`
  },
]

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} celebrities`)
  mongoose.connection.close()
});