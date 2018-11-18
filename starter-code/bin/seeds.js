const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = "CelebDB";

mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [

  {
    name: "Vivien Leigh",
    ocupation: "Actress",
    catchPhrase: "Tara! Home. I'll go home.And I'll think of some way to get him back. After all... tomorrow is another day."
  },
  {
    name: "Ingrid Bergman",
    ocupation: "Actress",
    catchPhrase: "Play it once, Sam. For old times' sake."
  },
  {
    name: "Marilyn Monroe",
    ocupation: "Actress",
    catchPhrase: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring."
  }

];

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrities.length} movies`)
  mongoose.connection.close()
});
