const mongoose = require('mongoose');
const Celebrity= require('../models/Celebrity')
const Movie = require('../models/Movie')

mongoose.connect(`mongodb://localhost/week45-celebrities`, {
  useNewUrlParser: true
});

/* const celebrities = [
  {
  name: 'George Clooney',
  occupation:'Actor' ,
  catchPhrase: "I'm kind of comfortable with getting older because it's better than the other option, which is being dead. So I'll take getting older. If people see me having dinner with a beautiful woman, they immediately believe that I'm having a love affair with her."
}, 
  {
  name: 'Nick Jona',
  occupation:'Singer' ,
  catchPhrase: "Find things you're passionate about, and find others who are as passionate as you are and will focus on giving you an opportunity to shine and to have your moment where you can be in front of others to show what you can do."
}, 
  {
  name: 'Tiger Woods',
  occupation:'Golf player' ,
  catchPhrase: "Patience was the key today. I played a couple of bad shots but made key putts, didn't drop any shots and kept the momentum going."
}, 
]

Celebrity.create(celebrities)
  .then(celebrities => {
      console.log(`Created ${celebrities.length} celebrities`)
      mongoose.connection.close()
    })
    .catch(err => console.log(err)) */

   const movies = [{
       title: 'Interstellar',
       genre: 'Drama',
       plot: "Great"
     },
     {
       title: 'Hannibal',
       genre: 'Scary',
       plot: "Great"
     },
     {
       title: 'Silence of the lamb',
       genre: 'Thriller',
       plot: "Great"
     }
   ]

    Movie.create(movies)
      .then(movies => {
        console.log(`Created ${movies.length} movies`)
        mongoose.connection.close()
      })
      .catch(err => console.log(err))