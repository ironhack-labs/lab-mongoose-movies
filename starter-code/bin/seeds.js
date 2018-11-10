const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const dbName = 'Movies-project';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true });

const movies = [
  {
    title: 'The Book Club',
    plot: "A group of recent college graduates form a book club in an effort to add some variety to their mundane lives.  However, a lethal turn of events forces them to reconsider their love for literature when the events of one particular book begin to unfold in their actual lives as they are reading the book. The kicker? The book is awesome, they can't bring themselves to stop reading... until there are no survivors left...",
    genre: 'Psychological Thriller'
  },
  {
    title: 'Best Frenemies',
    plot: 'Marie and Deanna have been best friends since elementary school.  Marie has always been the lucky one.  Grades, popularity, extra-curriculars, and beauty have always fallen into place for her, whereas life has always been a bit more of a struggle for Deanna.  However, one day, Deanna makes a shocking discovery that suggests none of this may be an accident.  Could Marie be stealing her luck?',
    genre: 'Coming of age/ Drama'
  },
  {
    title: 'The Fork',
    plot: "Rob Schneider is an ordinary Wall-Street executive.  He's got the car, the girlfriend, the money; he's got the life!  But he's about to find what it's like to be... a fork! Rob Scheider is... The Fork!",
    genre: 'Comedy'
  }
];


const Celebritys = [
  {
    name: 'Mulher Melao',
    catchPhrase: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    occupation: 'Entreterimentos',
    rating: 10
  },
  {
    name: 'Harry Potter',
    catchPhrase: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    occupation: 'Actor',
    rating: 9
  },
  {
    name: 'MC Gui',
    catchPhrase: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    occupation: 'Bandidão',
    rating: 8
  },
  {
    name: 'Pride and Prejudice ',
    catchPhrase: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    occupation: 'Inemsei',
    rating: 9
  }];

Celebrity.create(Celebritys, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${Celebritys.length} celebrities`);

  Movie.create(movies, (err) => {
    if (err) { throw (err); }
    console.log(`Created ${movies.length} movies`);
    mongoose.connection.close();
  });
});
