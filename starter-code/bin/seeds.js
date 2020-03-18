const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'Celebrity-project';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true,useUnifiedTopology: true} );

Celebrity.collection.drop()

const celebrities = [{
    name        : "JavAkura",
    occupation   : "dma",
    catchPhrase : "bblabla"
}, {
    name        : "Akeltaram",
    occupation   : "cyninc",
    catchPhrase : "bblabla hoho"
}, {
    name        : "havaAlimura",
    occupation   : "estoic",
    catchPhrase : "shufu bblabla!"
}]

Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
  });