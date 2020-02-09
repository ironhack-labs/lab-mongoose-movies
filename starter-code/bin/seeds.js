require('dotenv').config();
const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");


const celebrity = [{
    name: "Ana Obregón",
    occupation: "Actriz, bióloga, guionista...",
    catchPhrase: "“Le dije a Robert De Niro, de broma, que viniera a mi 22 cumpleaños y se pasó. Después fui a su casa y vi que tenía un Oscar encima del váter”."
  },
  {
    name: "Notorious Big",
    occupation: "Proffesional street ni**a",
    catchPhrase: "“Super Nintendo Sega Genesis, when I was dead broke, man I couldn’t picture this.”"
  },
  {
    name: "Sara Montiel",
    occupation: "actress",
    catchPhrase: "Pero qué invento es este?"
  }
]
mongoose
  .connect('mongodb://localhost/celebrities', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    Celebrity.deleteMany()
      .then(() => {
        return Celebrity.create(celebrity);
      })
      .then(() => {
        console.log("succesfully added all the data");
        mongoose.connection.close();
        process.exit(0);
      });
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });