const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

mongoose
  .connect('mongodb://localhost/mongoose-movies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


const celebrities = [
  {
    name: 'Jim Carrey',
    occupation: 'Actor',
    catchPhrase: "And that's the way the cookie crumbles"
  },
  {
    name: 'Kurt Cobain',
    occupation: 'Death',
    catchPhrase: "I'd rather be hated for who I am, than loved for who I am not."
  },
  {
    name: 'Chiquito de la Calzada',
    occupation: 'Humorist',
    catchPhrase: 'Quietorr'
  }
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});