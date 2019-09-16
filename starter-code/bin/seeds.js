const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')


const celebrities = [
  {
    name: 'Monica Bellucci',
    occupation: 'actress',
    catchPhrase: `Beauty is a gift, just like good health or intelligence. The only thing is not to be proud of being beautiful. Because you didn't do anything - it was given to you.`
  },
  {
    name: 'Paul McCartney',
    occupation: 'musician',
    catchPhrase: `And, in the end. The love you take is equal to the love you make.`
  },
  {
    name: 'Gwyneth Paltrow',
    occupation: 'actress',
    catchPhrase: `I eat whatever I want. I like bread and cheese and wine, and that makes my life fun and enjoyable.`
  }]

mongoose.connect('mongodb://localhost/celebritiesDb', { useNewUrlParser: true })
  .then(async () => {
    const artistsdata = await Celebrity.create(celebrities)
    console.log(`${artistsdata.length} celebrities created`)
    mongoose.connection.close()
  })
  .catch((err) => {
    console.log(err)
  })