require("dotenv").config();
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');







mongoose
  .connect('mongodb://localhost/starter-code', {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


const celebrities = [{
    name: "William Shakespeare",
    occupation: "Novelistpoet, playwright and actor",
    catchPhrase: "To be, or not to be, — that is the question. — (Hamlet)"

    

  },
  {
    name: "Emma Watson",
    occupation: "Actress",
    catchPhrase: "The less you reveal, the more people can wonder."

  },
  {
    name: "Freddie Mercury",
    occupation: "singer",
    catchPhrase: "When I’m dead, I want to be remembered as a musician of some worth and substance."

  }
];

Celebrity.create(celebrities, (err) => {

  if (err) {
    throw (err)
  }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
 });






