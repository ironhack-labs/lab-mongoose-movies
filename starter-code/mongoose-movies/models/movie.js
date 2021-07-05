const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Sandra started with movies, we are going to create the model now.
//first we need to declare mongoose so that we can use the schema.
// we declare a variable for mongoose, now we have that package.
//Now lets require schema. Its convention to name Schemas with capital letters.

const movieSchema = new Schema ({
  title: String,
  genre: String,
  celebrity: {type: Schema.Types.ObjectId, ref: "Celebrity"},
  //we are referencing the Celebrity Models page, setting it up for the seed
  plot: String,
  reviews: [{reviewer: String, content: String}]
});


/*Now we use schema to make the blueprints of the objects for our database
these are the object/ key/value pairs that will be used in our Database*/

const Movie = mongoose.model("Movie", movieSchema);

//create the objects

module.exports = Movie;

//export this bad boy
 //so our models folder is our data structure of our project, the controllers will be in
 //in the routes folder. Model View Controller. MVC remember this.
