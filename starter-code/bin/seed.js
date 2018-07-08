const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

const dbName = "deViernes";
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
    {
    name: "Audrey Hepburn",
    occupation: "Actress",
    catchPhrase: "People, even more than things, have to be restored, renewed, revived, reclaimed, and redeemed; never throw out anyone.",
    },
    {
    name: "Walter Riso",
    occupation: "Psychologist",
    catchPhrase: "No debes cometer el mismo error dos veces, la segunda vez que lo haces, ya no es tu error, es tu opción.",
    },
    {
    name: "Laura Pausini",
    occupation: "Singer",
    catchPhrase: "Y nadie ha dicho que me faltes siempre.",
    }
];

Celebrity.create(celebrities)
  .then(celebrities =>{
    mongoose.connection.close();
    console.log(`Created ${celebrities.length} celebrities`);
    })
  .catch(e=>{throw (e)});