// To insert in "bin/seeds.js"
const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')

const celebrities = [
  {
    name: 'Meryl Streep',
    occupation: 'Actress',
    catchPhrase:
      "I'm curious about other people. That's the essence of my acting. I'm interested in what it would be like to be you.",
    image:
      'https://m.media-amazon.com/images/M/MV5BMTU4Mjk5MDExOF5BMl5BanBnXkFtZTcwOTU1MTMyMw@@._V1_.jpg'
  },
  {
    name: 'Tom Hanks',
    occupation: 'Actor',
    catchPhrase:
      'May you live as long as you want and not want as long as you live.',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_SY1000_CR0,0,691,1000_AL_.jpg'
  },
  {
    name: 'Christopher Nolan',
    occupation: 'Director',
    catchPhrase:
      "I never considered myself a lucky person. I'm the most extraordinary pessimist, I truly am. I think I'm not so much a fan of science fiction as I am a fan of cinema that creates worlds, that creates an entire alternate universe that you could escape into for a couple of hours.",
    image:
      'https://m.media-amazon.com/images/M/MV5BODIwMTM5MDM4N15BMl5BanBnXkFtZTgwNzIzMTI1MzI@._V1_SY1000_CR0,0,704,1000_AL_.jpg'
  },
  {
    name: 'Philip Seymour Hoffman',
    occupation: 'Actor',
    catchPhrase:
      'Being unemployed is not good for any actor, no matter how successful you are. You always remember what it feels like to go to the unemployment office, what it feels like to be fired from all those restaurants.',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTQ0NTA1NTg3Ml5BMl5BanBnXkFtZTcwNzkxNzgxNw@@._V1_SY1000_CR0,0,724,1000_AL_.jpg'
  },
  {
    name: 'Amy Adams',
    occupation: 'Actress',
    catchPhrase:
      "I have worked with some of the meanest people in the world. You can't do anything to intimidate me.",
    image:
      'https://m.media-amazon.com/images/M/MV5BMTg2NTk2MTgxMV5BMl5BanBnXkFtZTgwNjcxMjAzMTI@._V1_SY1000_CR0,0,654,1000_AL_.jpg'
  },
  {
    name: 'Julia Roberts',
    occupation: 'Actress',
    catchPhrase: "I'm just an ordinary person who has an extraordinary job.",
    image:
      'https://m.media-amazon.com/images/M/MV5BMjA3NTY0ODYwOV5BMl5BanBnXkFtZTcwMDI4MjUzMw@@._V1_SY1000_CR0,0,663,1000_AL_.jpg'
  }
]

const movies = [
  {
    name: 'Doubt',
    genre: 'Drama',
    plot:
      "A Catholic school principal questions a priest's ambiguous relationship with a troubled young student.",
    image:
      'https://m.media-amazon.com/images/M/MV5BYWFjZmE2NGYtNGIzYi00Nzc2LTlhZWMtMTNkOTBkOTQ0MTJmXkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_SY1000_SX700_AL_.jpg',
    stars: ['Meryl Streep', 'Philip Seymour Hoffman', 'Amy Adams']
  },
  {
    name: 'The Devil Wears Prada',
    genre: 'Comedy',
    plot:
      'A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine.',
    image:
      'https://m.media-amazon.com/images/M/MV5BZjQ3ZTIzOTItMGNjNC00MWRmLWJlMGEtMjJmMDM5ZDIzZGM3XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_SY1000_CR0,0,677,1000_AL_.jpg',
    stars: ['Anne Hathaway', 'Meryl Streep', 'Adrian Grenier']
  },
  {
    name: 'Memento',
    genre: 'Thriller ',
    plot:
      "A man with short-term memory loss attempts to track down his wife's murderer.",
    image:
      'https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,681,1000_AL_.jpg',
    stars: [
      'Guy Pearce',
      'Carrie-Anne Moss',
      'Joe Pantoliano',
      'Christopher Nolan'
    ]
  },
  {
    name: 'Greyhound',
    genre: 'Action',
    plot:
      'Early in World War II, an inexperienced U.S. Navy captain must lead an Allied convoy being stalked by Nazi U-boat wolfpacks.',
    image:
      'https://m.media-amazon.com/images/M/MV5BZTFkZjYxNWItZmE2MC00MGE4LWIxYTgtZmIzOWM1YmI2YWEzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SY1000_CR0,0,668,1000_AL_.jpg',
    stars: ['Tom Hanks', 'Stephen Graham', 'Elisabeth Shue']
  },
  {
    name: "Charlie Wilson's War",
    genre: 'Biography',
    plot:
      'Early in World War II, an inexperienced U.S. Navy captain must lead an Allied convoy being stalked by Nazi U-boat wolfpacks.',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_.jpg',
    stars: ['Tom Hanks', 'Julia Roberts', 'Philip Seymour Hoffman', 'Amy Adams']
  },
  {
    name: 'August: Osage County',
    genre: 'Drama',
    plot:
      'A look at the lives of the strong-willed women of the Weston family, whose paths have diverged until a family crisis brings them back to the Oklahoma house they grew up in, and to the dysfunctional woman who raised them.',
    image:
      'https://m.media-amazon.com/images/M/MV5BNzQ5ODE4NTcxNV5BMl5BanBnXkFtZTgwNjkyNDQ0MDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    stars: ['Meryl Streep', 'Dermot Mulroney', 'Julia Roberts']
  }
]

Celebrity.deleteMany({})
  .then(() => Celebrity.insertMany(celebrities))
  .then(() => console.log('Celebrities added successfully.'))
  .catch((error) => console.log(error))

Movie.deleteMany({})
  .then(() => Movie.insertMany(movies))
  .then(() => console.log('Movies added successfully.'))
  .catch((error) => console.log(error))
