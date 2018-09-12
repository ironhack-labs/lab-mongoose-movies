const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Tom Cruise",
    occupation: "Crazy Guy Movie Star",
    catchphrase: "I'm crazy!",
    image: "https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_UY317_CR14,0,214,317_AL_.jpg",
  },
  {
    name: "Angelina Jolie",
    occupation: "I used to work",
    catchphrase: "I don't know what I do anymore",
    image: "https://www.hollywoodreporter.com/sites/default/files/2011/08/jolie_a.jpg",
  },
  {
    name: "Issa Rae",
    occupation: "Actual Actor",
    catchphrase: "Catch me on HBO, as the lead actor on my show: Insecure.",
    image: "http://thinkpynk.com/wp-content/uploads/2018/06/C0E9E0B4-C542-4873-A21E-DFE5DDD2B752.jpeg",
  }
]

const movies = [
  {
    title: "The Spy Who Dumped Me",
    genre: "Romantic Comedy",
    plot: "2 funny chicks don't know how to be spies.",
    image: "https://upload.wikimedia.org/wikipedia/en/2/25/The_Spy_Who_Dumped_Me.png"
  },
  {
    title: "The Nun",
    genre: "Psychological Thriller",
    plot: "A nun psychologically thrills an audience of scared people.",
    image: "https://www.dvdsreleasedates.com/posters/800/T/The-Nun-2018-movie-poster.jpg",
  },
  {
    title: "The Wife",
    genre: "Drama",
    plot: "Glenn Close plays a wife. It's intense.",
    image: "http://www.gstatic.com/tv/thumb/movieposters/15244710/p15244710_p_v8_aa.jpg",
  }
]

Movie.create(movies)
  .then((movies) => {
    console.log(`Created ${movies.length} movies`)
  })

  .catch((err) => {
    console.log(err)
  })


Celebrity.create(celebrities)
  .then((celebrities) => {
    console.log(`Created ${celebrities.length} celebrities`)
  })

  .catch((err) => {
    console.log(err)
  })