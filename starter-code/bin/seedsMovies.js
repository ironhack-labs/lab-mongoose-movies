require('dotenv').config();

const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const dbName = process.env.DBURL;
mongoose.connect('mongodb://localhost/movies', {useMongoClient: true});

const movies = [
  {
    title: 'Simpsons',
    genre: 'Comedy',
    plot: `The combination of Homer (Dan Castellaneta), his new pet pig, and a leaky silo full of excrement triggers a disaster that threatens not just Springfield but the entire world. An angry mob descends on the Simpson home, splitting the family. With Earth's fate in the balance, Homer sets out on a quest for redemption in order to save the world and earn Marge's (Julie Kavner) forgiveness.`
  },
  {
    title: '12 Years a Slave',
    genre: 'Drama',
    plot: `In the years before the Civil War, Solomon Northup (Chiwetel Ejiofor), a free black man from upstate New York, is kidnapped and sold into slavery in the South. Subjected to the cruelty of one malevolent owner (Michael Fassbender), he also finds unexpected kindness from another, as he struggles continually to survive and maintain some of his dignity. Then in the 12th year of the disheartening ordeal, a chance meeting with an abolitionist from Canada changes Solomon's life forever.`
  },
  {
    title: 'It',
    genre: 'Horror',
    plot: `Seven young outcasts in Derry, Maine, are about to face their worst nightmare -- an ancient, shape-shifting evil that emerges from the sewer every 27 years to prey on the town's children. Banding together over the course of one horrifying summer, the friends must overcome their own personal fears to battle the murderous, bloodthirsty clown known as Pennywise.`
  },
  {
    title: 'The hunger games',
    genre: 'Fiction',
    plot: `In what was once North America, the Capitol of Panem maintains its hold on its 12 districts by forcing them each to select a boy and a girl, called Tributes, to compete in a nationally televised event called the Hunger Games. Every citizen must watch as the youths fight to the death until only one remains. District 12 Tribute Katniss Everdeen (Jennifer Lawrence) has little to rely on, other than her hunting skills and sharp instincts, in an arena where she must weigh survival against love.`
  },
  {
    title: 'Mamma Mia!',
    genre: 'Musical',
    plot: `Donna (Meryl Streep), an independent hotelier in the Greek islands, is preparing for her daughter's wedding with the help of two old friends. Meanwhile Sophie, the spirited bride, has a plan. She secretly invites three men from her mother's past in hope of meeting her real father and having him escort her down the aisle on her big day.`
  },
  {
    title: 'Spectre',
    genre: 'Action',
    plot: `A cryptic message from the past leads James Bond (Daniel Craig) to Mexico City and Rome, where he meets the beautiful widow (Monica Bellucci) of an infamous criminal. After infiltrating a secret meeting, 007 uncovers the existence of the sinister organization SPECTRE. Needing the help of the daughter of an old nemesis, he embarks on a mission to find her. As Bond ventures toward the heart of SPECTRE, he discovers a chilling connection between himself and the enemy (Christoph Waltz) he seeks.`
  }
]

Movie.create(movies, (err, data) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close()
});