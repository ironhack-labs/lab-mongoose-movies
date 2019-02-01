const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity'); // With upper

const dbtitle = 'lab-movies';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true });

const celebrities = [
  {
    name: "Kim Kardashian",
    occupation: "Nothing remarkable",
    catchPhrase: "I miss the old Kanye"
  },
  {
    name: "Maxence Bouret",
    occupation: "Teacher",
    catchPhrase: "Chartreuse"
  },
  {
    name: "Axel Dahlin",
    occupation: "Web Developer",
    catchPhrase: "Google it"
  }
]


Celebrity.deleteMany()
  .then(() => Celebrity.create(celebrities))
  .then(celebritiesDocs => {
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close()
  })
  .catch(err => console.log("Error:", err))