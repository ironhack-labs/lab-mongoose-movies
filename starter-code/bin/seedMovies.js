const mongoose = require('mongoose');
const Movies = require('./../models/Movies');


const movies = [
    {
        title: "Mission impossible",
        genre: "Action",
        actor: "Tom Cruise" 
    },
    {
        title: "Anabelle",
        genre: "Horror",
        actor: "Jodie foster"    
    },
    {
        title: "Lord of the rings",
        genre: "Scince fiction",
        actor: "El hobby"
    },
    {
        title: "El mito bourne",
        genre: "Action",
        actor: "Matt demon"
    }
];



mongoose
  .connect('mongodb://localhost:27017/Movies', { useNewUrlParser: true })
  .then(() => {
    return Movies.create(movies); //celebrities is the array of celebrities that we are going to insert into the database
  })
  .then(insertedDocuments => {
    console.log('Inserted documents:', insertedDocuments.length);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));