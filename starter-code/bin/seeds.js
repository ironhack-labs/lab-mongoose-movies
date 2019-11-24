require("dotenv").config();
const mongoose = require('mongoose');
const Celebrity = require("../models/Celebrity");
// const Movie = require("../models/Movie");
const celebList = [{
    name: 'The Kooks',
    occupation: 'Singer',
    catchPhrase: 'Shes still out to get me'
  },
  {
    name: 'Ru Paul',
    occupation: 'Public Figure',
    catchPhrase: 'sashay away'
  },
  {
    name: 'Angelina Jolie',
    occupation: 'Actres',
    catchPhrase: 'Ive been reckless, but Im not a rebel without a cause.'
  }
]
mongoose.
connect(process.env.DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(async () => {
    const celebrities = await Celebrity.create(celebList);
    console.log(`${celebrities.length} celebrities created`);
    mongoose.connection.close();
  })
  .catch(err => console.log(err))