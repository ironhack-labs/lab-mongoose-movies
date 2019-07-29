const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model');

//const dbtitle = 'celebrity-project';
const dbtitle = 'movie-project'
mongoose.connect(`mongodb://localhost/${dbtitle}`);
Celebrity.collection.drop();
Movie.collection.drop()

/*
const celebrities = [
  {
    name: "Will Smith",
    occupation: "Actor",
    catchPhrase: "Aw hell no!"   
  },
  {
    name: "Meryl Streep",
    occupation: "Actress",
    catchPhrase: "The minute you start caring about what other people think, is the minute you stop being yourself." 
  },
  {
    name: "Rachel McAdams",
    occupation: "Actress",
    catchPhrase: "You know when you find a great dress, you've gotta hold on to it." 
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});
*/
const movies = [
  {
    title: "The pursuit of happiness",
    genre: "Drama",
    plot: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",  
    cast: {
      "name": "Will Smith",
      "occupation": "Actor",
      "catchPhrase": "Aw hell no!"   
    }
  },
  {
    title: "It's complicated",
    genre: "Comedy",
    plot: "When attending their son's college graduation, a couple reignite the spark in their relationship. But the complicated fact is they're divorced and he's remarried.",
    cast: {
      "name": "Meryl Streep",
      "occupation": "Actress",
      "catchPhrase": "The minute you start caring about what other people think, is the minute you stop being yourself." 
    }
  },
  {
    title: "The notebook",
    genre: "Romance",
    plot: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
    cast:{
      "name": "Rachel McAdams",
      "occupation": "Actress",
      "catchPhrase": "You know when you find a great dress, you've gotta hold on to it." 

    } 
  }
]


const createCelebrities = movies.map(movie => {
  const newCelebrity = new Celebrity(movie.cast)
  return newCelebrity.save()
    .then(celebrity => {
      return celebrity.name;
    })
    .catch(error => {
      throw new Error(`Impossible to add the celebrity. ${error}`)
    })
})


let findCelebrities = Promise.all(createCelebrities)
  .then(celebrities => {
    return movies.map(movie => {
      return Celebrity.findOne({ name: movie.cast.name, occupation: movie.cast.occupation, catchPhrase: movie.cast.catchPhrase })
        .then(celebrity => {
          if (!celebrity) {
            throw new Error(`unknown celebrity ${movie.author.name}`);
          }
          return Object.assign({}, movie, { cast: celebrity._id });
        })
    });
  })
  .catch(error => {
    throw new Error(error)
  })

const saveMovies = findCelebrities.then(findCelebrities => {
  return Promise.all(findCelebrities)
    .then(movies => {
      return movies.map(movie => {
        const newMovie = new Movie(movie);
        return newMovie.save();
      })
    })
}).then(savedMovies => {
  Promise.all(savedMovies)
    .then(movies => movies.forEach(movie => console.log(`created ${movie.title}`)))
    .then(() => mongoose.connection.close())
    .catch(err => console.log("Error while saving the book: ", err))
})

/*
Movie.create(movies, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close();
});
*/