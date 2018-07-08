require("dotenv").config();
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');


const dbName = process.env.DBURL;
mongoose.connect(dbName);

mongoose.Promise = Promise;
mongoose
  .connect( dbUrl, { useMongoClient: true })
  .then(() => {
    console.log("Connected to Mongo!");


const celebirties = [{
    name: "Jason Statham",
    occupation: "british actor and model",
    catchPhrase: "If you're going to do something, do it with style"

},
{
    name: "Cristiano Ronaldo",
    occupation: "Football player",
    catchPhrase: "I don't mind people hating me, because it pushes me"
},
{

    name: "Elon Musk",
    occupation: "business magnate, investor and engineer",
    catchPhrase: "Great companies are built on great products"

}
];


Celebrity.collection.drop();
Movie.collection.drop();

Celebrity.create(celebrities)
    .then((celebrities) => {
        console.log(`${celebrities.length} celebrities created.`);

        mongoose.disconnect();
      })
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });