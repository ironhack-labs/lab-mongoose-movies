require("dotenv").config();
const mongoose = require("mongoose");
// const celebrityModel = require("../models/celebrity"); 
const Movie= require("../models/movie")


// const celebrities = [
//   {
//     name: "Elon Musk", 
//     occupation: "Entrepreneur",
//     catchPhrase: "If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it's not."
// },
// {
//   name: "Richard Brandson", 
//   occupation:"Entrepreneur",
//   catchPhrase: "Listen.Take the best.Leave the rest.",
// },
// {
//   name: "Trevor Noah",
//   occupation: "actor",
//   catchPhrase: "Comfort can be dangerous. Comfort provides a floor but also a ceiling.",
// }
// ]


const movies=[{
  title: "Avatar", 
  genre:"fantastic", 
  plot: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home. When his brother is killed in a robbery, paraplegic Marine Jake Sully decides to take his place in a mission on the distant world of Pandora."
}, 
{
  title:"Forrest Gump",
  genre:"drama",
  plot: "Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny."
}]


mongoose
  .connect(process.env.MONGODB_URI)
  .then((self) => {
    console.log(`Connected to ${self.connection.name}`);
Movie.create(movies)
      .then((movies) => {
        movies.forEach((movies) => {
          console.log(movies.title);
        });
      })
      .catch((dbErr) => {
        console.log(dbErr);
      });
  })
  .catch((dbErr) =>
    console.log(`Error occurred while connecting to the Database ${dbErr}`)
  );




