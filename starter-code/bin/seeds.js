require('dotenv').config();
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = `${process.env.DATABASE}`;

mongoose
  .connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


const celebrities = [
  {name: "Kiko Rivera",
  occupation: "vivant",
  catchPhrase: "Yo he salido mucho... lo que no hacía era entrar"},
  {name: "Jesulín de Ubrique",
  occupation: "bullfighter",
  catchPhrase: "En dos palabras: im-presionante"},
  {name: "Julio Iglesias",
  occupation: "singer",
  catchPhrase: "Entonces era como un conejito, ‘chaca, chaca, chaca’... y me iba a cantar."}
];


Celebrity.create(celebrities)
.then(celebritiesInserted => {
  console.log(`Created ${celebritiesInserted.length} celebrities`);
  mongoose.connection.close();
})
.catch(err => {
  console.log(err)
}) 