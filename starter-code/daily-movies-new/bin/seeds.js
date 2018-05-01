
const mongoose = require ('mongoose');
const Celebrity = require ('../models/Celebrity.js')

const dbName = 'daily-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebrities = [{
  name: "Emma Watson",
  occupation: ["Actress", "Activist", "Model"],
  catchPhrase: "My idea of sexy is that less is more. The less you reveal the more people can wonder."
},
{
  name: "Amy Schummer",
  occupation:["Actress", "Comedian"],
  catchPhrase: "The moments that make life worth living are when things are at their worst and you find a way to laugh"
},
{
  name: "Adele",
  occupation:["Singer", "Song-writer"],
  catchPhrase: "I love a bit of .drama That's a bad thing, I can flip really quickly"
}];



Celebrity.create (celebrities, (err) => {
  if (err) {throw(err)}
  
  console.log (`created ${celebrities.length} books`)
  mongoose.connection.close()
});