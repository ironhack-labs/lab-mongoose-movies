
const mongoose = require('mongoose');
const Celeb = require('../models/celebrity');
const Movie = require('../models/movie')

const dbName = 'celebrity-application';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrity = [
{
  name: 'Fozzy Bear',
  occupation: 'Being a bear and teaching kids about bear things',
  catchphrase: 'Wakka Wakka',
},
{
  name:'Cookie Monster',
  occupation:'Eating cookies',
  catchphrase:'MMMMMM! Cookie Cookie Cookie!',
},
{
  name:'Kermit the Frog',
  occupation:'Being Kermit the Frog',
  catchphrase:'I am Kermit the Frog',
}
]

const movie = [
  {
    title:'Deadpool',
    genre:'Action',
    plot:'The origin of Deadpool'
  },
  {
    title:'The Muppets in Vegas',
    genre:'Comedy',
    plot:'The muppets go to Vegas'
  },
  {
    title:'The Babadook',
    genre:'Horror',
    plot:'The Babadook scares people'
  }
]

Movie.create(movie)
.then((movie)=>{
  console.log(`Created ${movie.length} movies`)
})
.catch((err)=>{
  console.log(err)
})

Celeb.create(celebrity)
.then((celebrity)=>{
  console.log(`Created ${celebrity.length} celebrities`)
})
.catch((err)=>{
  console.log(err)
})