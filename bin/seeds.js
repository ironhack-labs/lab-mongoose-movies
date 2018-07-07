const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
//const Author = require('../models/author');

const dbName = 'celebrity-model';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrityseeds = [
  {
    name: "Tomas Cruz",
    occupation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    catchPhrase: "Siempre sone con ver el cielo vainilla"
  },
  {
    name: "tio willies",
    occupation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    catchPhrase: "yepe kai yei motherfuckers"
  },
  {
    name: "silvestre es-talon",
    occupation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    catchPhrase: "Mariannnneeeeeeee"
  }
  
]


Celebrity.create(celebrityseeds, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrityseeds.length} celebrity`)
  mongoose.connection.close()
});
