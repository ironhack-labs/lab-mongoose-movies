const mongoose = require("mongoose");
/*
const Celebrity = require("../models/celebrity");
mongoose.connect(`mongodb://localhost/celebritiesandmovies`);
Celebrity.collection.drop();

const celebrities = [
  {
    name: "Steven Patrick Morrissey",
    occupation: "Singer",
    catchPhrase: "I have forgiven Jesus"
  },
  {
    name: "Gustavo Adrián Cerati Clark",
    occupation: "Singer",
    catchPhrase: "You deserve what you dream"
  },
  {
    name: "Mahatma Gandhi",
    occupation: "Activist",
    catchPhrase: "Be the change that you want to see in the world"
  }
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});*/

 const Movies = require('../models/movies');

 mongoose.connect(`mongodb://localhost/celebritiesandmovies`);
 Movies.collection.drop();

 const movies = [{
     title: 'Trainspotting',
     genre: 'Black Comedy',
     plot: 'Heroin addict Mark Renton (Ewan McGregor) stumbles through bad ideas and sobriety attempts with his unreliable friends -- Sick Boy (Jonny Lee Miller), Begbie (Robert Carlyle), Spud (Ewen Bremner) and Tommy (Kevin McKidd). He also has an underage girlfriend, Diane (Kelly Macdonald), along for the ride. After cleaning up and moving from Edinburgh to London, Mark finds he can\'t escape the life he left behind when Begbie shows up at his front door on the lam, and a scheming Sick Boy follows',
   },
   {
     title: 'Grave of fireflies',
     genre: 'Anime, Drama',
     plot: 'A devastating meditation on the human cost of war, this animated tale follows Seita (Tsutomu Tatsumi), a teenager charged with the care of his younger sister, Setsuko (Ayano Shiraishi), after an American firebombing during World War II separates the two children from their parents. Their tale of survival is as heartbreaking as it is true to life. The siblings rely completely on each other and struggle against all odds to stay together and stay alive.'
   },
   {
     title: 'My Neighbor Totoro',
     genre: 'Anime',
     plot: 'This acclaimed animated tale by director Hayao Miyazaki follows schoolgirl Satsuke and her younger sister, Mei, as they settle into an old country house with their father and wait for their mother to recover from an illness in an area hospital. As the sisters explore their new home, they encounter and befriend playful spirits in their house and the nearby forest, most notably the massive cuddly creature known as Totoro.',
   },
 ];

 Movies.create(movies, (err) => {
   if (err) {
     throw (err)
   }
   console.log(`Created ${movies.length} movies`)
   mongoose.connection.close();
 });
