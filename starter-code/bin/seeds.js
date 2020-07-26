
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const dbtitle = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });
Celebrity.collection.drop();
Movie.collection.drop();

const firstCelebrities = [
    {
        name: "Adrian Monk",
        occupation: "Detective",
        catchPhrase: "It's a gift and a curse"
    },
    {
        name: "Carrie Bradshaw",
        occupation: "Journalist",
        catchPhrase: "I can't help but wonder..."
    },
    {
        name: "Michael Scott",
        occupation: "Salesman",
        catchPhrase: "That's what she said"
    }
];

Celebrity.create(firstCelebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${firstCelebrities.length} celebrities!`)
    mongoose.connection.close();
});

const myMovies = [
    {
        title: "Threat Level Midnight",
        genre: "Action",
        plot: "Best plot ever, got to see!"
    },
    {
        title: "Sex and the City",
        genre: "Romantic comedy",
        plot: "Mature women looking for relationships, mostly end up in one night stands and criticize men"
    },
    {
        title: "Modern Sherlock Holmes",
        genre: "Detective",
        plot: "Modern version of the World's most famous detective"
    }
];

Movie.create(myMovies, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${myMovies.length} movies!`)
    mongoose.connection.close();
});