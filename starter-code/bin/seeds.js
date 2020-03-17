const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbtitle = 'Celebrity-db';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true, useUnifiedTopology: true });
Celebrity.collection.drop();

let arrayCelebrity = [
    {
        name: "paris hilton",
        occupation: "rich",
        catchPhrase: "aaaaaa",
    },
    {
        name: "Gemma Arterton",
        occupation: "actor",
        catchPhrase: "bbbbbbb",
    },
    {
        name: "Rowan Atkinson",
        occupation: "actor",
        catchPhrase: "asdfasdfasdf",
    },

]
Celebrity.create(arrayCelebrity)
    .then(data => console.log("registros grabados", data))
    .then(() => mongoose.disconnect())
    .catch(err => console.log("Error while creating the celebrity's: ", err))
