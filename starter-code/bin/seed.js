const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'celebrities';

mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true });


const celebrities = [{name: "Keanu Reeves",occupation: "actor", catchPhrase: "The simple act of paying attention can take you a long way" },
{name:"Marlon Brando",occupation:"actor",catchPhrase:"I could have been a contender, I could have been somebody"},
{name:"Lupita Nyong'o",occupation:"actress",catchPhrase:"no matter where you are from your dreams are valid"}]

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});
