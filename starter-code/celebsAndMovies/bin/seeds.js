
// in the example code the line below is not commented but I dont think it is needed because it is called in app.js
// it was needed because app.js is not related to this seeds.js file, we run it independently with node bin/seeds.js
const mongoose = require('mongoose');
const Celeb = require('../models/Celeb');

// in the example code the line below is not commented but I dont think it is needed because it is called in app.js
// it was needed because app.js is not related to this seeds.js file, we run it independently with node bin/seeds.js
const dbName = 'celebsandmovies'
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebs = [
  {
    name: "Andrey",
    occupation: "father",
    catchPhrase: "wheres my food",
  },
  {
    name: "Giulli",
    occupation: "mother",
    catchPhrase: "wheres felipe",
  },
  {
    name: "Felipe",
    occupation: "son",
    catchPhrase: "agua",
  }
]

Celeb.create(celebs)
.then((result)=>{
    console.log(`created ${result.length} Celebs`);
    mongoose.disconnect();
})
.catch((err)=>{
    console.log(err)
})