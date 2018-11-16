require('dotenv').config();

const mongoose =  require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');



mongoose.connect(process.env.DBURL, {useNewUrlParser: true})
  .then(() => console.log("Connected!"));

const celebs = [
  {
    imgUrl:"https://m.media-amazon.com/images/M/MV5BNTc4MTkxNTk1M15BMl5BanBnXkFtZTgwNzQwMjQ1MDI@._V1_.jpg",
    name:"Gillian Anderson",
    occupation:"Actress",
    catchPhrase:"Just remember, you can do anything you set your mind to, but it takes action, perseverance, and facing your fears."
  },
  {
    imgUrl:"https://m.media-amazon.com/images/M/MV5BMTU4Mjk5MDExOF5BMl5BanBnXkFtZTcwOTU1MTMyMw@@._V1_.jpg",
    name:"Meryl Streep",
    occupation:"Actress",
    catchPhrase:"The interesting thing about being a mother is that everyone wants pets, but no one but me cleans the kitty litter."
  },
  {
    imgUrl:"https://m.media-amazon.com/images/M/MV5BMTM5NDI1MjE2Ml5BMl5BanBnXkFtZTgwNDE0Nzk0MDE@._V1_.jpg",
    name:"Julianne Moore",
    occupation:"Actress",
    catchPhrase:"People think that the directors direct actors. No. Really, what the director's doing is directing the audience's eye through the film."
  }
];

const movies = [
  {
    imgUrl:"https://pics.filmaffinity.com/crooked_house-701735283-large.jpg",
    title:"Crooked House",
    genre:"Crime",
    plot:"In Agatha Christie's most twisted tale, a spy-turned-private-detective is lured by his former lover to catch her grandfather's murderer before Scotland Yard exposes dark family secrets."
  },
  {
    imgUrl:"https://pics.filmaffinity.com/the_post-171811926-large.jpg",
    title:"The Post",
    genre:"Biography",
    plot:"A cover-up that spanned four U.S. Presidents pushed the country's first female newspaper publisher and a hard-driving editor to join an unprecedented battle between the press and the government."
  },
  {
    imgUrl:"https://pics.filmaffinity.com/the_hours-352714282-large.jpg",
    title:"The Hours",
    genre:"Drama",
    plot:'The story of how the novel "Mrs. Dalloway" affects three generations of women, all of whom, in one way or another, have had to deal with suicide in their lives.'
  }
];


Celebrity.collection.drop();
Movie.collection.drop();

Celebrity.create(celebs)
  .then(celebs => {
    console.log(`Created ${celebs.length} celebs!`);
  }).then(() => {mongoose.disconnect()});

Movie.create(movies)
  .then(movies => {
    console.log(`Created ${movies.length} movies!`);
  }).then(() => {mongoose.disconnect()});
