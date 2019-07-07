const mongoose = require('mongoose');
const Celebrity = require('./models/celebrity');
const Movies = require('./models/movies');

const dbtitle = 'mongoose-project';
mongoose.connect(`mongodb://localhost/${dbtitle}`);
Movies.collection.drop();
Celebrity.collection.drop();

const movies = [
  {
    poster: 'https://images-na.ssl-images-amazon.com/images/I/51jNgDex5IL.jpg',
    title: 'Anchorman',
    genre: 'Drama',
    plot: 'Burgundy and the news team in a suit shopping spree',
  },
  {
    poster: 'https://images-na.ssl-images-amazon.com/images/I/A1LD%2BpL0nuL._SY679_.jpg',
    title: 'Star Wars V',
    genre: 'Documentary',
    plot: 'A group of rebel scum try to disturb the peace in the empire',
  },
  {
    poster: 'https://i.pinimg.com/originals/a2/8d/c8/a28dc8d6697d4397dfce7659cbfb5ea7.jpg',
    title: 'Barney',
    genre: 'Drama',
    plot: 'A day in the life of Barney Stinson',
  },
];


const celebrity = [
  {
    name: "Ron Burgundy",
    occupation: "Anchorman",
    catchPhrase: "Stay classy San Diego",
    image: "https://www.thewrap.com/wp-content/uploads/2018/12/WillFerrellRonBurgundy.jpg"
  },
  {
    name: "Sheev Palpatine",
    occupation: "Emperor of the Galaxy",
    catchPhrase: "You don't know the power of the dark side",
    image: "https://i.pinimg.com/originals/f5/8f/09/f58f09cab0a9e88acd821f7e985e8587.jpg"
  },
  {
    name: "Jules Winnfield",
    occupation: "Bad motherfucker",
    catchPhrase: "I DARE YOU, I DOUBLE DARE YOU! U MOTHERFUCKER",
    image: "http://www.femalefirst.co.uk/image-library/square/500/p/pulp-fiction-moustache.jpg"
  },
  {
    name: "Michael Scott",
    occupation: "World best boss",
    catchPhrase: "That's what she said",
    image: "https://pbs.twimg.com/profile_images/2269790547/MichaelScottQts.jpg"
  },
  {
    name: "Barney Stinson",
    occupation: "Barney Stinson",
    catchPhrase: "Challenge Accepted",
    image: "https://pbs.twimg.com/profile_images/2791763282/c69b80386cbd22cc9dc838587ed51d2d.jpeg"
  },
  {
    name: "Rick Sanchez",
    occupation: "Genius",
    catchPhrase: "Wabba Lubba Dub Dub",
    image: "https://memegenerator.net/img/images/15137811.jpg"
  },
];

Movies.create(movies, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${movies.length} entries`);
  mongoose.connection.close();
});


Celebrity.create(celebrity, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrity.length} entries`);
  mongoose.connection.close();
});
