const mongoose = require('mongoose');
const Users = require('../models/Movies');

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  const users = [
    
  ]


  Users.create(users)
  .then((response)=>{
      console.log(response);
  })
  .catch((err)=>{
    console.log(err);
  })










  // const movies = [
  //   {
  //       title: "The Notebook",
  //       genre: "Romance",
  //       plot: "Poor guy meets rich girl. They fall in love and eventually live happily ever after."
  //   },
  //   {
  //       title: "The Lion",
  //       genre: "Drama",
  //       plot: "Child was adopted from Indian orphanage. 20 years later he returns to India to find his birth mother."
  //   },
  //   {
  //       title: "Halloween",
  //       genre: "Horror",
  //       plot: "Michael Myers wants to kill his entire family"
  //   }
  // ];


  // const celebs = [
  //   {
  //       name: "Ryan Gosling",
  //       occupation: "Actor",
  //       catchPhrase: "Hey Girl."
  //   },
  //   {
  //       name: "Neymar da Silva Santos Jr",
  //       occupation: "Athlete",
  //       catchPhrase: "I try to be myself without being anything different."
  //   },
  //   {
  //       name: "Maluma",
  //       occupation: "Singer",
  //       catchPhrase: "Maluma, baby!"
  //   }
  // ];