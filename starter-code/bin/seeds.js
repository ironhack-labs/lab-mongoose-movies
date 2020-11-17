const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');
const Book = require('../models/Book.model');

const dataCeleb = [
  {
    name: 'Jane Austen',
    occupation: 'Author',
    catchPhrase: 'The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.'
  },
    {
    name: 'Maya Angelou',
    occupation: 'Author',
    catchPhrase: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
  },
    {
    name: 'Virginia Woolf',
    occupation: 'Author',
    catchPhrase: 'A woman must have money and a room of her own if she is to write fiction.'
  }
]

const dataBooks = [
  {
    title: 'Pride and Prejudice',
    genre: 'Romance',
    plot: 'The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.'
  },
  {
    title: 'I Know Why the Caged Bird Sings',
    genre: 'Autobiography',
    plot: 'The book describes the early years of American writer and poet Maya Angelou. The first in a seven-volume series, it is a coming-of-age story that illustrates how strength of character and a love of literature can help overcome racism and trauma.'
  },
  {
    title: "A Room of One's Own",
    genre: 'Essay',
    plot: 'An important feminist text, the essay argues for both a literal and figurative space for women writers within a literary tradition dominated by men.'
  }
]

mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .then(() => {
    // return Celebrity.insertMany(dataCeleb);
    return Book.insertMany(dataBooks); 
  })
  .then(data => console.log(`Data added to database: ${data}`))
  .catch(err => console.error('Error connecting to mongo', err)); 