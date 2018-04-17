
const mongoose  = require('mongoose');
/*
const Celebrity = require("../models/celebrity-model");

const bdName = "celebrity";
mongoose.connect(`mongodb://localhost/${bdName}`, {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });
const celebrities = [
  {
  name : "Tom Cruise",
  occupation:  "Actor",
  catchPhrase: "Show me the money"
  },
  {
    name : "Beyonce",
    occupation: "Signer",
    catchPhrase: "God dammn!"
    },
  {
    name : "Daffy Duck",
    occupation:  "Animate character",
    catchPhrase: "Woo-hoo! You're dethpicable"
    }
  ];
  
  Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close()
  });

  Celebrity.create(celebrities)
  .then(() => {
    console.log(`Created ${celebrities.lenght} celebrities`);
  })
  .catch( () => {
    console.log("Creation ERROR", err);
  });

*/
const Movie = require("../models/movie-model");

const bdName = "movie";
mongoose.connect(`mongodb://localhost/${bdName}`, {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });
const movies = [
                        {
                        title: "Gringo",
                        genre:  "suspence",
                        plot: "hsdhhsdhdshf dsfjdksfej qsqfflme qefkefnv qdc ndsqpe"
                        },
                        {
                        title: "Mars",
                        genre:  "adventure",
                        plot: "hgfd dsfjdksfej qsqfflme iyutr qdc po"
                        },
                        {
                        title : "Top Gun",
                        genre:  "action",
                        plot: "azzert uiop qsqfflme qefkefnv qdc bnvc"
                        }
                    ] 
 Movie.create(movies)
  .then(() => {
    console.log(`Created ${movies.lenght} movies`);
  })
  .catch( () => {
    console.log("Creation ERROR", err);
  });            