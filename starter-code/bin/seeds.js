const mongoose = require("mongoose")
const Celeb = require("../models/celeb")
const Movie = require("../models/movie")


const celeb = [
    {
        name: "Danila Bagrov",
        occupation: "R.I.P. (was tbe actor)",
        catchPhrase: "V chem sila, brat?"
    },
    {
        name: "Aleksandr Emelyanenko",
        occupation: "MMA fighter",
        catchPhrase: "Nu zdraste, zdraste, lyudi dobriye"
    },
    {
        name: "Zemfira",
        occupation: "Rock singer",
        catchPhrase: "Hochesh ya ubiu sosedey, chto meshayut spaaat'"
    }
    ]

    const movies = [
      {
          title: "Lollipop love",
          genre: "Romantic comedy",
          plot: "Zak and Rachel have been neighbours for almost 10 years in a small city TigerWoods in West Virginia. Zak was in love with Rachel, but she never payed attention on him, she was engaged with Carl, who is an ex-Capitan of TigerWoods Football team. Everything changes one day, when a lollipop store opens across the street."
      },
      {
          title: "The doors are always closed",
          genre: "Drama",
          plot: "A young design college student Patrick Gugenhein has always dreamed about becoming a data scientist, but his family insisted on him to become a designer. There was no day in his life when he didn't dream about big data and machine learning, he even bought himself a python, and named it 'Pandas'. However, the doors of a famous bootcamp in his city were always closed when he arrive there after his college classes end.. "
      },
      {
          title: "The last Burger King",
          genre: "Action/adventure",
          plot: "'Money rules the World, and there is no such thing as too much money'. Thomas Winkelson has always been a pro of this statement, however his monthly income was not enough to pay off his electric bills and alimonies to his ex-wife. Being desparate he signed into a yearlly burger eating competition called by a local food retail chain and promoted to be the last one. Thomas did not expect to meet his old enemy there. Who will become the Last Burger King? "

      }
      ]

  mongoose.connect('mongodb://localhost/celebrities', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });  

  // Celeb.insertMany(celeb).then(dbresult => {
  //     console.log("the celebs have been inserted")})
  //     .catch(dbErr => console.log(dbErr)) 

  Movie.insertMany(movies).then(dbresult => {
      console.log("the movies have been inserted")})
      .catch(dbErr => console.log(dbErr))