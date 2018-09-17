const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const celebrities = [
  {
   name: "Sheldon Cooper",
   occupation: "scientist",
   catchPhrase: "Bazinga!"
  },
  {
    name: "Steve Urkel",
    occupation: "inventor",
    catchPhrase: "Did I do that?"
  },
  {
    name: "Joey Tribbiani",
    occupation: "actor",
    catchPhrase: "How you doin'?"
  }
]

const movies = [
  {
    title: "A Nice Fake Movie",
    genre: "Fake",
    plot: "Nisi magna ut deserunt elit deserunt labore nostrud aliquip irure excepteur. Aliquip duis magna cupidatat reprehenderit sit aliqua mollit. Irure quis qui dolor sit incididunt. Consequat amet deserunt aute voluptate in aliquip magna."
   },
   {
    title: "A Better Fake Movie",
    genre: "Fake",
    plot: "Nisi magna ut deserunt elit deserunt labore nostrud aliquip irure excepteur. Aliquip duis magna cupidatat reprehenderit sit aliqua mollit. Irure quis qui dolor sit incididunt. Consequat amet deserunt aute voluptate in aliquip magna."
   },
   {
    title: "The Definitive Fake Movie",
    genre: "Fake",
    plot: "Nisi magna ut deserunt elit deserunt labore nostrud aliquip irure excepteur. Aliquip duis magna cupidatat reprehenderit sit aliqua mollit. Irure quis qui dolor sit incididunt. Consequat amet deserunt aute voluptate in aliquip magna."
   }
]

Celebrity.collection.drop();
Movie.collection.drop();


Celebrity.create(celebrities)
.then (() => {
  console.log("Celebrities created")
})
.catch (err => {
  console.log(err)
});

Movie.create(movies)
.then (() => {
  console.log("Movies created")
})
.then (() => {
  mongoose.disconnect()
})
.catch (err => {
  console.log(err)
});
