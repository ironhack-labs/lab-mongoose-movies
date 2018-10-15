const mongoose = require('mongoose');
const Celebrity= require('../models/Movie.js')

mongoose.connect('mongodb://localhost/Celebrities',{
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
});

const feed= [
  {
    title: "13 monitos",
    genre: "action",
    plot: "no idea",
  },
  {
    title: "er jobi",
    genre: "epic",
    plot: "no idea",
  },
  {
    title: "matriZ reloaded",
    genre: "action",
    plot: "no idea",
  }
]

Celebrity.insertMany(feed)
.then((result) =>{
  console.log(result);
  mongoose.connection.close();
})
.catch((error) =>{
  console.log(error);
})

