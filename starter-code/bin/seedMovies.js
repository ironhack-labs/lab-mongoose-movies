const mongoose    = require("mongoose");
const Movie       = require("../models/Movie");

const dbName = "moviesDB";
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
  {
    title: "Harry Potter 1",
    genre: "Fiction",
    plot: "A kid that´s a magician"
  },
  {
    title: "Coco",
    genre: "Comedy",
    plot: "A kid that´s already dead"
  },
  {
    title: "Iron Man",
    genre: "Fiction",
    plot: "A millionaire guy with a really cool super suit"
  }
]

Movie.create(movies, (err) =>{
  if(err){ throw err}
  console.log(`Created ${movies.length} records in DB`);
  mongoose.connection.close();
})