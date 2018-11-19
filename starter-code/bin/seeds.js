const mongoose = require('mongoose');
const Celebrity = require("../models/Celebrity.js")
 const datacelebrities = [
  {
    name: "Jason Statham",
    occupation: "Actor",
    catchPhrase: "If you're going to do something, do it with style!"
  },
  {
    name: "C.Tanagana",
    occupation: "Singer",
    catchPhrase: "El arte de los negocios es la mejor de la artes"
  },
  {
    name: "Arnold",
    occupation: "Actor",
    catchPhrase: "Hasta la vista, baby."
  }
 ];

 mongoose.connect("mongodb://localhost/starter-code",{ useNewUrlParser: true })
   .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
.then(() => {
Celebrity.create(dataCelebrities, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${dataCelebrities.length} celebrities`);
})
.then(() => {
  mongoose.disconnect();
})
.catch(err => {
  console.error("Error connecting to mongo", err);
  })
});