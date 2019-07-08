
const mongoose     = require('mongoose');
//const celebrityMod  = require('../model/Celebrity'); 
const moviesMod  = require('../model/Movies'); 


mongoose
  .connect('mongodb://localhost/celebs', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });




const Movies = [
{
    title:"Die Hard",
    genre: "Action",
    plot:"Bruce Willis is a cop that saves new york"
},

{
  title:"She Is out of your league",
  genre: "Comedy",
  plot:"Guy trys to date a movie star"
},
{
  title:"Searching",
  genre: "Drama/Action",
  plot:"Guy trys to find his missing daughter"
}
];

moviesMod.create(Movies)
.then(()=>{
    console.log('Database Entries Created')
    mongoose.connection.close();
})
.catch(()=>{
    console.log('Database Failed')
})