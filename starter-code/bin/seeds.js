// bin/seeds.js


const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');


 mongoose.connect(`mongodb://localhost/celebrities-code`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
/*
const celebrities = [{
        name: 'Chuck Norris',
        occupation: 'Martial Artist',
        catchPhrase: "When the boogie man goes to sleep he checks his closet for me"
    },
    {
        name: 'The Rock',
        occupation: 'Wrestler',
        catchPhrase: 'Do you smell what the rock is cooking?!'
    },
    {
        name: 'Ricky Gervais',
        occupation: 'Comedian',
        catchPhrase: "Mondays are fine. It's your life that sucks."
    },

];

Celebrity.create(celebrities).then(() => {
    console.log(`Created ${celebrities.length} celebrities`);
    mongoose.connection.close();
}); */



const movies = [{
        title: 'The Exordinary',
        genre: 'Mystery, Action',
        plot: "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing."
    },
    {
        title: 'Game of Tartes',
        genre: 'Fantasy, Action',
        plot: "Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor..."
    },
    {
        title: 'Z 13tausend',
        genre: 'Horro, Action',
        plot: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium."
    },

];

Movie.create(movies).then(() => {
    console.log(`Created ${movies.length} movies`);
    mongoose.connection.close();
});