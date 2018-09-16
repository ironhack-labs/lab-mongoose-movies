const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
// const Movie = require('../models/Movie');

const dbName = 'celebs';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "BlisS",
    occupation: "Teacher",
    catchPhrase: "BlisS"
  },
  {
    name: "Diego",
    occupation: "TA",
    catchPhrase: "JS no te espera!"
  },
  {
    name: "Julian",
    occupation: "Entrepreneur",
    catchPhrase: "tecnología"
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
})
// const movies = [
//   {
//     title: "Guardians of the Galaxy",
//     genre: "Superhero Film",
//     plot: "In 1988, following his mother's death, a young Peter Quill is abducted from Earth by the Ravagers, a group of space pirates led by Yondu Udonta. Twenty-six years later on the planet Morag, Quill steals an orb but is attacked by Korath, a subordinate to the fanatical Kree, Ronan. Although Quill escapes with the orb, Yondu discovers his theft and issues a bounty for his capture, while Ronan sends the assassin Gamora after the orb."
//   },
//   {
//     title: "Doctor Strange",
//     genre: "Superhero Film",
//     plot: "In Kathmandu, the sorcerer Kaecilius and his zealots enter the secret compound Kamar-Taj and behead its librarian. They steal a few pages from an ancient, mystical text belonging to the Ancient One, a long-lived sorcerer who has taught every student at Kamar-Taj, including Kaecilius, in the mystic arts. The Ancient One pursues the traitors, but Kaecilius and his followers escape."
//   },
//   {
//     title: "Iron Man",
//     genre: "Superhero Film",
//     plot: "Genius, billionaire, playboy and philanthropist Tony Stark, who has inherited the defense contractor Stark Industries from his father, is in war-torn Afghanistan with his friend and military liaison Lieutenant Colonel James Rhodes to demonstrate the new Jericho missile. After the demonstration, the convoy is ambushed and Stark is critically wounded by one of his own company's rocket-propelled grenades, used by the attackers."
//   }
// ]

// Movie.create(movies, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${movies.length} movies`)
//   mongoose.connection.close()
// })