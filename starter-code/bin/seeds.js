const celebrities = [
{
    name: "Fernando Escobar",
    occupation: "dancer",
    catchPhrase: "YODO"
},
{
    name: "André The Other One",
    occupation: "fashionista",
    catchPhrase: "GesundHeit!!"
},
{
    name: "Patric 'The Pat'",
    occupation: "Opera Singer",
    catchPhrase: "In vino veritas!!"
}
];

const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

mongoose.connect("mongodb://localhost/celebrity-ironhack");

Celebrity.create(celebrities)
  .then(documents => {
    console.log(`Success" ${documents.length} celebrities were added`);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));

