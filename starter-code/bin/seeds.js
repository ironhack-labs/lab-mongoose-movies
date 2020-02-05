const mongoose = require('mongoose');

const Celebrity = require('../models/Celebrity');

const celebrities = [
    {name:'x',
    occupation:"x",
    catchPhrase:''
    },
    {name:'y',
    occupation:"y",
    catchPhrase:'y'
    },
    {
    name:'z',
    occupation:"z",
    catchPhrase:'z'
    }
]

mongoose
.connect("mongodb://localhost:27017/0204movie")
.then (result => {
    console.log("connect to DB")
})
.catch(err => {
    console.log(err);
  });

Celebrity.create(celebrities).then(result => {
    console.log(result);
    mongoose.connectiom.close();
})
.catch(err => {
    console.log(err);
  })