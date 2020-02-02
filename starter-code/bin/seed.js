const mongoose = require ("mongoose")
const celebrity = require("../model/Celebrity")


const datos = [{
    name: 'Tom Cruise',
    occupation: 'actor',
    catchPhrase: 'the movies its a reflec of the life',
},
{
  name: 'Ed Sheran',
  occupation: 'singer' ,
  catchPhrase: 'the love is part of the life this was good or will be bad' ,
},
{
   name: 'Daffy Duck',
   occupation: 'comediant',
   catchPhrase: 'the comedy is the best cure in the world',
}
]

mongoose
  .connect('mongodb://localhost/mongoose-movies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    Celebrity.create(data).then(res => console.log('Data in DB'))
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });