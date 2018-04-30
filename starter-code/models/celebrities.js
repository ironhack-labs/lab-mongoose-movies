const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

mongoose.connect('mongodb://localhost/Celebrities');


const celebSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
})

const Celeb = mongoose.model('Celeb', celebSchema);

module.exports = Celeb;


// newCeleb = new Celeb({ 
//   name: 'Kanye West', 
//   occupation: 'Musician',
//   catchPhrase: "I'm a creative genius!" })
//   .then(celeb => { console.log('The user is saved and its value is: ', user) })
//   .catch(error => { console.log('An error BIH:', error) });

//   newCeleb.save()
//   .then(celeb => { console.log(celeb);})
//   .catch(theError => { console.log(theError) })

