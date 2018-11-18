const mongoose = require("mongoose")
const Celebrity = require("../models/Celebrity")
const Movie = require("../models/Movie")

const celebrities = [
  {
    name: "Lebron James",
    occupation: "Athlete",
    catchPhrase: "Lorem ipsum dolor sit amet consectetur adipisicing eli"
  },
  {
    name: "Edward Norton",
    occupation: "Actor",
    catchPhrase: "Dolor, fugit corporis a eum nesciunt est ipsa"
  },
  {
    name: "Will Smith",
    occupation: "Actor",
    catchPhrase: "Voluptas provident incidunt facere distinctio"
  }, {
    name: "Michael Jordan",
    occupation: "Athlete",
    catchPhrase: "Eaque, culpa vero voluptatibus voluptates voluptate perspiciatis sed esse earum omnis, ipsam sequi?"
  }
]
const movie = [
  {
    title: "Eternal Sunshine of the Spotless Mind",
    genre: "Sci-fi, Drama, Comedy",
    plot: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aspernatur nostrum voluptatibus minus? Nemo consectetur et expedita vel laborum, optio velit ab culpa, accusantium eos placeat id dolorem saepe inventore?"
  },
  {
    title: "Contratiempo",
    genre: "Crime, Mystery, Thriller",
    plot: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae nesciunt vero sit ex nostrum, blanditiis pariatur praesentium est saepe optio quos. Laudantium deserunt vero quidem impedit voluptatum, nulla perferendis. Sapiente."
  },
  {
    title: "El secreto de sus ojos",
    genre: "Crime, Mystery, Thriller, Drama",
    plot: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt sed, minima suscipit numquam ea nam quis rem, porro magni eum minus amet non, pariatur hic quaerat temporibus delectus consequatur repellat."
  }
]
mongoose
  .connect('mongodb://localhost/starter-code', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    return Movie.collection.drop();
    // return Celebrity.collection.drop();
  })
  .then(() => {
    return Movie.insertMany(movie)
    // return Celebrity.insertMany(celebrities)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });