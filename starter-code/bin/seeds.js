require("dotenv").config();

const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbtitle = "Celebrities";
mongoose.connect(`mongodb://localhost/${dbtitle}`);
Celebrity.collection.drop();

const celebrities = [
    {
        name: "Groucho Marx",
        occupation: "Humorista",
        catchPhrase: "Estos son mis principios, pero si no le gustan tengo otros"
    },

    {
        name: "Antonio Resines",
        occupation: "Actor",
        catchPhrase: "Tengo doce millones en el banco"
    },

    {
        name: "Francisco Umbral",
        occupation: "Escritor",
        catchPhrase: "He venido a hablar de mi libro"
    },

]

Celebrity.create(celebrities)
  .then(celebrities => {
    console.log(`Created ${celebrities.length} celebrity`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err)
  }) 