require('dotenv').config();

const mongoose = require('mongoose');
const Celebritie = require('../models/Celebritie');
const Movie = require('../models/Movie');

const dbName = process.env.DBURL;
mongoose.connect(dbName);

const Celebrities = [
  {
    name: 'David Broncano',
    occupation: 'Late Night Showman',
    catchPhrase: `PERO Q'APACHAOOOO?!?`
  },
  {
    name: 'Ignatius Farray',
    occupation: 'StandUp Comedy Artist',
    catchPhrase: `All Right!`
  },
  {
    name: 'Quequé',
    occupation: 'StandUp Comedy Artist',
    catchPhrase: `Soy tu futuro`
  }
]

const Movies = [
  {
    title: 'Pulp Fiction',
    genre: 'Film Noir',
    plot: `“Ezekiel 25:17. "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of the darkness. For he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy my brothers. And you will know I am the Lord when I lay my vengeance upon you."`
  },
  {
    title: 'Reservoir Dogs',
    genre: 'Crime Movie',
    plot: `"Like a Virgin" is all about a girl who digs a guy with a big dick. The whole song is a metaphor for big dicks`
  },
  {
    title: 'Django Unchained',
    genre: 'Western',
    plot: `Now, all you black folks, I suggest you get away from all these white folks! Not you, Stephen. You're right where you belong.`
  }
]

Celebritie.collection.drop();
Movie.collection.drop();

Movie.create(Movies)
  .then((data)=>{
    console.log(`Created ${data.length} Movies`)
    Celebritie.create(Celebrities)
      .then((data)=>{
        console.log(`Created ${data.length} Celebrities`)
        mongoose.disconnect();
      })
  })
  .catch((err) =>{
    console.log(err)
  });