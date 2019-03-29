const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

const dbName = 'library-project';
mongoose.connect("mongodb://localhost/lab-mongoose-movies");

const celebrities = [
  {
    name: "Lady Gaga",
    occupation: "singer",
    catchPhrase: "Trust is like a mirror, you can fix it if it's broken, but you can still see the crack in that mother fucker's reflection."
  },
  {
    name: "Morgan Freeman",
    occupation: "actor",
    catchPhrase: "If you live a life of make-believe, your life isn't worth anything until you do something that does challenge your reality. And to me, sailing the open ocean is a real challenge, because it's life or death."
  },
    {
    name: "Vincent Van Gogh",
    occupation: "painter",
    catchPhrase: "There is nothing more truly artistic than to love people.",
  }
]

const movies = [
 {
   title: "My name is Khan",
   genre: "drama",
   plot: "Rizwan Khan, a Muslim from the Borivali section of Mumbai, suffers from Asperger's syndrome, a form of high-functioning autism that complicates socialization. The adult Rizwan marries a Hindu single mother, Mandira, in San Francisco. After 9/11, Rizwan is detained by authorities at LAX who mistake his disability for suspicious behavior. Following his arrest, he meets Radha, a therapist who helps him deal with his situation and his affliction. Rizwan then begins a journey to meet US President Bush to clear his name."
 },
 {
   title: "Agora",
   genre: "historical drama",
   plot: "Alexandria, 391 AD: Hypatia teaches astronomy, mathematics, and philosophy. Her student Orestes is in love with her, as is Davus, her personal slave. As the city's Christians, led by Ammonius and Cyril, gain political power, the institutions of learning may crumble along with the governance of slavery. Jump ahead 20 years: Orestes, the city's prefect, has an uneasy peace with the Christians, led by Cyril. A group from the newly empowered Christians has now taken to enforce their cultural hegemony zealously; first they see the Jews as their obstacle, then nonbelievers. Hypatia has no interest in faith; she's concerned about the movement of celestial bodies and the brotherhood of all. Although her former slave doesn't see it that way."
 },
 {
   title: "The dark side of the heart",
   genre: "drama",
   plot: "Oliveiro is a young poet living in Buenos Aires where sometimes he has to sell his ideas to an advertising agency to make a living or exchange his poems for a steak. In Montevideo, he meets a prostitute, Ana, with whom he falls in love. Back in Buenos Aires, he accepts a contract with a publicity agency to get the money for three days of love with her. Will he get what he's searching for when his ideal of love's pleasure is literally going in levitation while making love?"
  } 
]

Celebrity.create(celebrities)
  .then(celebrities => {
    console.log(`Se crearon ${celebrities.length} celebridades`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });

Movie.create(movies)
  .then(movies => {
    console.log(`Se crearon ${movies.length} películas`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });