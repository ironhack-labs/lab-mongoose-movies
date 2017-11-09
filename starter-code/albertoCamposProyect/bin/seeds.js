const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrities-dev', {useMongoClient: true});
 const celebrityModel = require('../models/celebrity.js');

 celebritiesInfo = [{ name: "Luis Aragones", occupation: "Football Coach", catchPhrase: "Y ganar y ganar y ganar y volver a ganar"},
                  { name: "Pedro Sanchez", occupation: "Politician", catchPhrase: "No es no"},
                  { name: "Ernesto Monsalve", occupation: "Student", catchPhrase: "Llamale Fresy"}];
celebrityModel.collection.drop();

 celebrityModel.create(celebritiesInfo, (err, e) => {
  if (err) {throw err;}

  e.forEach((person) => {
    console.log(person.name);
  });

  mongoose.connection.close();

 });
