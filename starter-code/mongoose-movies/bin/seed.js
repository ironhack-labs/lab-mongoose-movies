const mongoose = require ("mongoose");
const Celebrity = require ("../models/celebrity.js");

mongoose.Promise = Promise;
mongoose
.connect('mongodb://localhost/mongoose-movies', {useNewUrlParser: true})
.then(x => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch(err => {
  console.error('Error connecting to mongo', err)
});

  const celebrityData = [

    {
      name:"Pamela Anderson",
      occupation:"run on the beach",
      catchPhrase:"Hi guys ! ",
    },

    {
      name:"Jean Claude Van Damme",
      occupation:"bullshits spreader",
      catchPhrase:"I'm aware !!!",
    },

    {
      name:"Paris Hilton",
      occupation:"Money Spender",
      catchPhrase:"Where is my credit card ?",
    }

  ];

  Celebrity.create(celebrityData)
    .then(celebrityDoc => {
      console.log("celebrity created");
    })
    .catch(err => {
      console.log("create failure",err);
    })