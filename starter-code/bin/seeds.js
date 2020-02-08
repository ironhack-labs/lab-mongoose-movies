const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity-model');
mongoose.connect(`mongodb://localhost/celebrities`, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true
});
const celebrities = [
    {
        name: "Elon Musk",
        occupation: "Tesla and SpaceX Founder",
        catchPhrase: "If life is a video game, the graphics are great, but the plot is confusing & the tutorial is way too long"
    },
    {
        name: "Hayao Miyazaki",
        occupation: "Anime Filmmaker",
        catchPhrase: "Anime was a mistake"
    },
    {
        name: "Neil deGrasse Tyson",
        occupation: "Astrophyicist",
        catchPhrase: "With automatic spell checkers running unleashed over what we compose, our era is that of correctly spelled typos."
    }
]
Celebrity.insertMany(celebrities)
.then(inserted => {
  console.log('success', inserted);
  mongoose.disconnect();
})
.catch(err => console.log(err));