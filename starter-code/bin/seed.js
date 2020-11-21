const Movie = require('../models/movie.model')
const mongoose = require('mongoose')

const movies = [
    
  {
    title: "eiusmod duis incididunt magna",
    genre: "SciFi",
    plot: "incididunt anim adipisicing laboris nostrud dolore exercitation do minim voluptate labore incididunt laboris laborum irure veniam enim aute non anim"
  },
  {
    title: "dolore aute aute aliquip",
    genre: "Period",
    plot: "veniam amet reprehenderit esse eiusmod adipisicing qui consequat esse dolore anim amet eiusmod duis eu pariatur sunt ipsum labore sint"
  },
  {
    title: "nisi consequat veniam mollit",
    genre: "RomCom",
    plot: "est laborum dolore eu in irure officia cupidatat sint pariatur ut minim irure enim minim tempor occaecat adipisicing cillum irure"
  }
]


mongoose
  .connect('mongodb://localhost/express-celebs-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>{
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    Movie.create(movies).then((results) => {
        console.log(results.length)
        mongoose.connection.close()
    }).catch(err=>console.log(err))
  })
  .catch(err => console.error('Error connecting to mongo', err));
  