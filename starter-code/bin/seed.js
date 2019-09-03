// const celebrityModel =require("./../models/celebrity");
// const celebrities= [{name :"JCVD", occupation:"bla", catchPhrase:"im aware"}];
// const mongoose = require ("mongoose");
// mongoose
//   .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   });

// celebrityModel.insertMany(celebrities).then(res => console.log("fine")).catch(err=>console.log(err));

const movieModel = require("./../models/movie");
const movies = [
  { title: "camping", genre: "comedie", plot: "blabla" },
  { title: "paradise", genre: "thriller", plot: "blabla zefzef fzefefzf " },
  {
    title: "ironhack",
    genre: "action",
    plot: "blabla blabdfzuefhzielhflzen zeflziehf "
  }
];
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

movieModel
  .insertMany(movies)
  .then(res => console.log("fine"))
  .catch(err => console.log(err));
