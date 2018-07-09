require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');


const celebSeed = [
  {
    name: 'Bill Murray',
    occupation: ['actor','comedian','writer'],
    catchPhrase: 'Movie acting suits me because I only need to be good for ninety seconds at a time.'
   },
   {
    name: 'Andie MacDowell',
    occupation: ['acress','producer'],
    catchPhrase: 'Movie acting suits me because I only need to be good for ninety seconds at a time.'
   },
   {
    name: 'Chris Elliot',
    occupation: ['actor','writer','producer'],
    catchPhrase: 'Somehow, by just continually pestering the general public by appearing on television, they accepted me and wanted more.'
   }
]

const moviesSeed=[
  {
    title: 'Grounhog Day',
    genre: 'Comedy',
    plot: 'A weather man is reluctantly sent to cover a story about a weather forecasting rat (as he calls it). This is his fourth year on the story, and he makes no effort to hide his frustration. On awaking the following day he discovers that its Groundhog Day again, and again, and again. First he uses this to his advantage, then comes the realisation that he is doomed to spend the rest of eternity in the same place, seeing the same people do the same thing EVERY day.'
  },
  {
    title: 'Lost in Translation',
    genre: 'Drama',
    plot: 'Middle-aged American movie star Bob Harris is in Tokyo to film a personal endorsement Suntory whiskey ad solely for the Japanese market. He is past his movie star prime, but his name and image still have enough cachet for him to have gotten this lucrative $2 million job. He has an unsatisfying home life where his wife Lydia follows him wherever he goes - in the form of messages and faxes - for him to deal with the minutiae of their everyday lives, while she stays at home to look after their kids. Staying at the same upscale hotel is fellow American, twenty-something recent Yale Philosophy graduate Charlotte, her husband John, an entertainment still photographer, who is on assignment in Japan. As such, she is largely left to her own devices in the city, especially when his job takes him out of Tokyo. Both Bob and Charlotte are feeling lost by their current situations, which are not helped by the cultural barriers they feel in Tokyo, those cultural barriers extending far beyond just not knowing the language. After a few chance encounters in the hotel, they end up spending much of their time hanging out together, each helping the other deal with their feelings of loss in their current lives. The friendship that develops between the two, which is not always a bumpy-free one, may be just for this specific place and time, but it may also have long lasting implications.'
  },
  {
    title: 'Four weddings and a funeral',
    genre: 'Comedy', 
    plot: 'The film follows the fortunes of Charles and his friends as they wonder if they will ever find true love and marry. Charles thinks hes found Miss Right in Carrie, an American. This British subtle comedy revolves around Charlie, his friends and the four weddings and one funeral which they attend.'
  }
]

const dbName = process.env.DBURL;
mongoose.connect(dbName);

Celebrity.collection.drop();
Movie.collection.drop();

Celebrity.create(celebSeed, (err, data) => {
  if (err) { throw(err) }
  
  console.log(`Created ${celebSeed.length} celebrities`);

  Movie.create(moviesSeed)
    .then( () => {
      console.log(`Created ${moviesSeed.length} movies`);
      mongoose.disconnect();
    });
  
});
