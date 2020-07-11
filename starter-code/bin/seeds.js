require('../configs/db.config')
const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie')


const celebrities = [
  {
    name:'Kylie Jenner',
    occupation:'Business woman',
    catchPhrase:'Rise and shine'
  },
  {
    name:'Kendall Jenner',
    occupation:'Model',
    catchPhrase:'Someone who wants to be with you, WILL be with you. End of story.'
  },
  {
    name:'Travis Scott',
    occupation:'Rap singer',
    catchPhrase:'There\'s a lot of us out here that are birds, man. We all need to just fly.'
  }
]

const movies = [
  {
    title:'Inception',
    genre:'Action',
    plot:'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O'
  },
  {
    title:'The Shining',
    genre:'Horror',
    plot:'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.'
  },
  {
    title:'The Devil Wears Prada',
    genre:'Comedy',
    plot:'A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine.'
  },
  {
    title:'Confessions of a Shopaholic',
    genre:'Comedy',
    plot:'A college grad lands a job as a financial journalist in New York City to support where she nurtures her shopping addiction and falls for a wealthy entrepreneur.'
  },
  {
    title:'The Greatest Showman',
    genre:'Drama',
    plot:'Celebrates the birth of show business and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.'
  },

]

Celebrity.deleteMany()
.then(() => {
  Celebrity.create(celebrities)
  .then(() => console.log('Celebrities added successfully'))
  .catch( error => console.log('Some error happened', error))
})

Movie.deleteMany()
.then(() => {
  Movie.create(movies)
  .then(() => console.log('Movies added successfully'))
  .catch( error => console.log('Some error happened', error))
})