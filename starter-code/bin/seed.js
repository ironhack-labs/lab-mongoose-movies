const mongoose = require('mongoose');
const Celeb = require('../models/celebrity');
const Movie = require('../models/movie');

const dbTitle = 'celebs-movies';

const celebs = [{
    name: 'leo Mesi',
    occupation: 'football player',
    catchPhrase: 'la concha de tu madre'
  },
  {
    name: 'Cristiano Ronaldo',
    occupation: 'swimer',
    catchPhrase: 'Suuuuuuu!!!!'
  },
  {
    name: 'Carles Puyol',
    occupation: 'Pagès',
    catchPhrase: 'Cagun Deu'
  }
]

const movies = [{
    title: "A Wrinkle in Time",
    genre: "Scy-Fy",
    plot: "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil."
  },
  {
    title: "The Strangers: Prey at Night",
    genre: "Travels",
    plot: "A family's road trip takes a dangerous turn when they arrive at a secluded mobile home park to stay with some relatives and find it mysteriously deserted. Under the cover of darkness, three masked psychopaths pay them a visit to test the family's every limit as they struggle to survive."
  },
  {
    title: "The Hurricane Heist",
    genre: "Thieves",
    plot: "Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities."
  },
  {
    title: "Thoroughbreds",
    genre: "Alternative",
    plot: "Two upper-class teenage girls in suburban Connecticut rekindle their unlikely friendship after years of growing apart. Together, they hatch a plan to solve both of their problems-no matter what the cost."
  },
  {
    title: "The Leisure Seeker",
    genre: "Travels",
    plot: "A runaway couple goes on an unforgettable journey in the faithful old RV they call The Leisure Seeker, traveling from Boston to The Ernest Hemingway Home in Key West. They recapture their passion for life and their love for each other on a road trip that provides revelation and surprise right up to the very end."
  },
  {
    title: "Black Panther",
    genre: "Superheros",
    plot: "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
  },
  {
    title: "Red Sparrow",
    genre: "Spies",
    plot: "Ballerina Dominika Egorova is recruited to 'Sparrow School,' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations.",
  },
];

mongoose.connect(`mongodb://localhost:27017/${dbTitle}`, {useNewUrlParser: true})
  .then(() => {
    console.log(`localhost@${dbTitle} connected`)
    Movie.collection.drop()
    Celeb.collection.drop()

    Celeb.create(celebs)
      .then(() => {
        console.log(`${celebs.length} celebs created`)
      }).catch((error) => {
        next(error)
      })

    Movie.create(movies)
      .then((movie) => {
        console.log(`${movies.length} movies created`);
        mongoose.connection.close().then(() => {
          console.log('closed database')
        }).catch(error => {
          next(error)
        })
      }).catch((error) => {
        next(error)
      })
  })
  .catch((error) => {
    console.log(`localhost@${dbTitle} not reachable`)
    next(error)
  })