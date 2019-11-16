const mongoose = require("mongoose");
const Celebrities = require("../models/celebrity");

mongoose
  .connect('mongodb://localhost/movies', {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const celebArr = [{
    name: `Viggo Mortensen`,
    ocupation: `Actor`,
    catchPhrase: `Kentucky Fried Chicken! In Kentucky! When's that ever gonna happen!`
  },
  {
    name: `Bruce Willis`,
    ocupation: `Actor`,
    catchPhrase: `Yippee-ki-yay, motherfucker`
  },
  {
    name: `Floor Jansen`,
    ocupation: `Singer`,
    catchPhrase: `It's good to reflect on life and take a step back and sit and relax and do something else`
  }
];


Celebrities
  .insertMany(celebArr)
  .then(() => console.log(`SUCCESS loading celebrity seed`))
  .catch(() => console.log(`ERROR loading celebrity seed`));