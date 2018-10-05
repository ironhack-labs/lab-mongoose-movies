const
  mongoose = require(`mongoose`),
  Movie = require(`../models/Movie`)
;
mongoose.connect(`mongodb://localhost/ironhack`, {useNewUrlParser: true});

const
  movies = [
    {
      title: `The Big LeMaowski`,
      genre: `Comedy`,
      plot: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ducimus quisquam dolorum impedit iste atque ea natus illo voluptates ex, dolore magni voluptatibus numquam magnam, sequi deserunt earum maxime nemo.`
    },
    {
      title: `Mao's List`,
      genre: `Drama`,
      plot: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ducimus quisquam dolorum impedit iste atque ea natus illo voluptates ex, dolore magni voluptatibus numquam magnam, sequi deserunt earum maxime nemo.`
    },
    {
      title: `The Mao Witch Project`,
      genre: `Horror`,
      plot: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ducimus quisquam dolorum impedit iste atque ea natus illo voluptates ex, dolore magni voluptatibus numquam magnam, sequi deserunt earum maxime nemo.`
    }
  ]
;

Movie.create(movies, err => {
  if (err) throw err;
  console.log(`${movies.length} created`);
  mongoose.connection.close();
});