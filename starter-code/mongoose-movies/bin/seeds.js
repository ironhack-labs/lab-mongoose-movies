const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "John Krasinski",
    occupation: "Actor",
    catchPhrase: "stares at camera"
  },
  {
    name: "Arnold Schwarzenegger",
    occupation: "Former Governor",
    catchPhrase: "Hasta La Vista Baby"
  },
  {
    name: "Tony Hawk",
    occupation: "Skateboarder",
    catchPhrase: "Look at me im on a skateboard"
  }

];
Celebrity.create(celebrities)
.then((result)=>{
  console.log(`created ${result.length} celebrities`);
})
.catch((err)=>{
  console.log(err);
});
