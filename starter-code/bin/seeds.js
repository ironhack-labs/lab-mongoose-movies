const mongoose     = require('mongoose');
const celebrities         = require('../models/celebrities')

mongoose
  .connect('mongodb://localhost/celebrity', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


const celebArray = [
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "First catchy catch phrase"
  },
  {
    name: "Beyonce",
    occupation: "Singer",
    catchPhrase: "Wild new catch phrase"
  },
  {
    name: "Daffy Duck",
    occupation: "Characted",
    catchPhrase: "Third amazing catch phrase"
  }
]


celebrities.create(celebArray)
.then(()=> {

  console.log(`Yey, movies added to DB`);
}
)
.catch(()=> {

  console.log(`Nay, movies were NOT added to DB`);
})