require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = process.env.DBURL;
mongoose.connect('mongodb://localhost/movies', {useMongoClient: true});

const celebrities = [
  {
    name: 'Homer',
    occupation: 'Actor',
    catchPhrase: `Hi I'm Homer`,
    img: 'https://www.lifewire.com/thmb/Oyf1CbS_zWEFiDM16pGudIZc3XE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simpsons_09_Homer_V2F_hires1-56e1eccc5f9b5854a9f89a63.jpg'
  },
  {
    name: 'Chiwetel Ejiofor',
    occupation: 'Actor',
    catchPhrase: `Hi I'm Chiwetel`,
    img: 'https://m.media-amazon.com/images/M/MV5BNzA5MDEyMTY3Nl5BMl5BanBnXkFtZTgwODQ0MjcxMDE@._V1_UY317_CR6,0,214,317_AL_.jpg'
  },
  {
    name: 'Bill Skarsgård',
    occupation: 'Actor',
    catchPhrase: `Hi I'm Bill`,
    img: 'https://m.media-amazon.com/images/M/MV5BNjE5MzAzNzUwOV5BMl5BanBnXkFtZTgwNDM0OTg0ODE@._V1_UY317_CR17,0,214,317_AL_.jpg'
  },
  {
    name: 'Jennifer Lawrence',
    occupation: 'Actress',
    catchPhrase: `Hi I'm Jennifer`,
    img: 'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_SY1000_CR0,0,626,1000_AL_.jpg'
  },
  {
    name: 'Meryl Streep',
    occupation: 'Actress',
    catchPhrase: `Hi I'm Meryl`,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Meryl_Streep_at_the_Tokyo_International_Film_Festival_2016_%2832802149674%29_%28cropped%29.jpg/800px-Meryl_Streep_at_the_Tokyo_International_Film_Festival_2016_%2832802149674%29_%28cropped%29.jpg'
  },
  {
    name: 'Daniel Craig',
    occupation: 'Actor',
    catchPhrase: `Hi I'm Daniel`,
    img: 'https://m.media-amazon.com/images/M/MV5BMjEzMjk4NDU4MF5BMl5BanBnXkFtZTcwMDMyNjQzMg@@._V1_UX214_CR0,0,214,317_AL_.jpg'
  }
]

Celebrity.create(celebrities, (err, data) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close()
});