const mongoose = require('mongoose');
const Celeb = require('../models/celebrity');

const dbtitle = 'movies';
mongoose.connect(`mongodb://localhost/${dbtitle}`);

const initialCelebs = [{
    name: 'leo Mesi',
    occupation: 'football player',
    catchPhrase: 'la concha de tu madre'
  },
  {
    name: 'Cristiano Ronaldo',
    occupation: 'swimer',
    catchPhrase: 'Suuuuuuu!!!!'
  },
  {
    name: 'Carles Puyol',
    occupation: 'Pagès',
    catchPhrase: 'Cagun Deu'
  }
]

Celeb.create(initialCelebs,(error)=>{
  if (err) { throw (err) }
  mongoose.connection.close()
})