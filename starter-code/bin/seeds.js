/* // bin/seeds.js

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbtitle = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true, useUnifiedTopology: true });
//Celebrity.collection.drop();

const celebrities = [
    {
        name: "Audrey Hepburn",
        occupation: ["Actress", "philanthropist", "model", "dancer"],
        catchPhrase: "Nothing is impossible, the word itself says 'I'm possible'!"
    },
    {
        name: "Marilyn Monroe",
        occupation: ["Actress", "producer", "model", "singer"],
        catchPhrase: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring."
    },
    {
        name: "Christian Bale",
        occupation: ["Actor", "producer"],
        catchPhrase: "Whatever you do, do it completely. Don’t do it half-arsed. Do it more than anybody else would"
    }
]

Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
  }); */


const mongoose = require('mongoose');
const Movie = require('../models/movie');

const dbtitle = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true, useUnifiedTopology: true });
//Celebrity.collection.drop();

const movies = [
    {
        title: "Breakfast at Tiffany's",
        genre: "Comedy",
        plot: "Early one morning, a taxi pulls up in front of Tiffany & Co. and from it emerges elegantly dressed Holly Golightly, carrying a paper bag containing her breakfast. After looking into its windows, she strolls to her apartment and has to fend off her date from the night before. Once inside, Holly cannot find her keys so she buzzes her landlord, Mr. Yunioshi, to let her in. "
    },
    {
        title: "The Seven Year Itch",
        genre: "Comedy",
        plot: "Richard Sherman (Tom Ewell) is a nerdy, faithful, middle-aged publishing executive with an overactive imagination and a mid-life crisis, whose wife, Helen (Evelyn Keyes), and son, Ricky (Butch Bernard), are spending the summer in Maine. When he returns home with the kayak paddle Ricky accidentally left behind, he meets a woman (Marilyn Monroe), who is a commercial actress and former model who rents the apartment upstairs while in town to make television spots for a brand of toothpaste."
    },
    {
        title: "The Big Short",
        genre: "Biographical comedy-drama",
        plot: "The film consists of three separate but concurrent stories, loosely connected by their actions in the years leading up to the 2007 housing market crash."
    }
]

Movie.create(movies, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close();
  });