const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity')

mongoose.connect(`mongodb://localhost/celebrity-project`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebritys=[{
    name : "Baba",
    occupation : "Professional dancer",
    catchPhrase: "Let the games play"
},
{
    name : "Francesco",
    occupation : "Actor",
    catchPhrase: "If you know you know, if you don't know you don't know"
},
{
    name : "Pia",
    occupation : "Doing nothing",
    catchPhrase: "What the fuck is this?"
}
]

Celebrity.create(celebritys).then(() => {
    console.log(`Created ${celebritys.length} books`);
    mongoose.connection.close();
  });