const mongoose = require('mongoose');
const Movies = require('../models/movies');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);

const arr=[
    { title:"a", genre:"narrador", plot:"rrrrrrrrrrrrrronaldo"},
    {title:"b", genre:"apresentador", plot:"ta pegando fogo,bixo!"},
    {title:"c", genre:"politico", plot:"Gloria a Deuxxxx"}

]
Movies.create(arr, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${arr.length} movies`)
    mongoose.connection.close();
  });