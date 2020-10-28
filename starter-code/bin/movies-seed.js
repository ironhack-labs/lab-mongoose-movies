const mongoose = require('mongoose');

const Movie = require('../models/Movie');

let movies = [
    {
        title: 'The Godfather',
        genre: 'Crime',
        plot: 'During a backyard wedding reception for his daughter, Connie, and his new son-in-law, Carlo Rizzi, Don Vito Corleone, a Mafia boss known as the Godfather, conducts business in his office. With him are his oldest son, Sonny, and his adopted son and family lawyer, Tom Hagen'
    },
    {
        title: 'Titanic',
        genre: 'Drama',
        plot: 'Titanic tells the fictional story of two class-crossed lovers who meet aboard the disaster-bound ship, fall in love, and then struggle to survive the grizzly sinking all within the context of a true-to-detail retelling of the actual disaster.'
    },
    {
        title: 'Die hard',
        genre: 'Action',
        plot: 'Summaries. An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles. NYPD cop John McClane goes on a Christmas vacation to visit his wife Holly in Los Angeles where she works for the Nakatomi Corporation.'
    }];

(async()=>{
    await mongoose.connect(`mongodb://localhost/movies-project`, { useNewUrlParser: true, useUnifiedTopology: true } );
    console.log('DB Connection Established');
    await Movie.create(movies, (err) => {
        if (err) { throw(err) }
        console.log(`# Created ${movies.length} movies`);
        mongoose.connection.close();
      });
})();