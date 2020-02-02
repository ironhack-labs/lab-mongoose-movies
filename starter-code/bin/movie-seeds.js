const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');

require('../config/db.config');
// Movie.collection.drop();

const fakeMovies = [
  {
    title: 'The Shawshank Redemption',
    genre: 'Crime',
    plot:
      "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
  },
  {
    title: 'The Godfather',
    genre: 'Drama',
    plot:
      "A family's road trip takes a dangerous turn when they arrive at a secluded mobile home park to stay with some relatives and find it mysteriously deserted. Under the cover of darkness, three masked psychopaths pay them a visit to test the family's every limit as they struggle to survive.",
  },
  {
    title: 'The Godfather: Part II',
    genre: 'Drama',
    plot:
      'Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities.',
  },
  {
    title: 'The Dark Knight',
    genre: 'Action',
    plot:
      'GRINGO, a dark comedy mixed with white-knuckle action and dramatic intrigue, explores the battle of survival for businessman Harold Soyinka (David Oyelowo) when he finds himself crossing the line from law-abiding citizen to wanted criminal.',
  },
  {
    title: '12 Angry Men',
    genre: 'Thriller',
    plot:
      'A runaway couple goes on an unforgettable journey in the faithful old RV they call The Leisure Seeker, traveling from Boston to The Ernest Hemingway Home in Key West. They recapture their passion for life and their love for each other on a road trip that provides revelation and surprise right up to the very end.',
  },
];

Movie.create(fakeMovies)
  .then(savedMoviesDB => {
    console.log(savedMoviesDB);
  })
  .catch(err => console.log('Error happened while trying to save: ', err));
