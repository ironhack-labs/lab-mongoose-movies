const mongoose = require("mongoose") ;
const celebrityModel = require("../models/Celebrity") ;

const celebrities = [
    {
      name: "bob foss",
      occupation: "director",
      catchPhrase: "Mickael jackson copy me",
    },
    {
      name: "peter gabriels",
      occupation: "composer",
      catchPhrase: "is has been a long long time",
    },
    {
      name: "me",
      occupation: "undefined",
      catchPhrase: "etre une heure rien qu'ne heure durant beau et con a la fois",
    },
    {
      name: "jesus christ",
      occupation: "son of me",
      catchPhrase: "et la caravane passe",
    }
  ];

//.connect('mongodb://localhost/starter-code', {useNewUrlParser: true})

mongoose
.connect('mongodb://localhost/lab20', {useNewUrlParser: true})
.then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    celebrityModel
        .insertMany(celebrities)
        .then(dbRes => {
            console.log("YOUPIIIIIII FIL CRÉÉ    celebrity  ! (on est dans seeds au fait)");
        })
        .catch(err => {
            console.error('Error connecting to mongo', err)
        })
})
.catch(err => {
    console.error("Error connectigne tout mongo c'est une catastrophe", err);
});
module.export = celebrities ;




const movieModel = require("../models/Movie") ;
const movies = [
    {
      title : "A Wrinkle in Time",
      genre: "horror",
      plot: "Storm Reid aaaaaaa Oprah Winfrey Reese Witherspoon",
    },
    {
      title : "The Strangers: Prey at Night",
      genre: "anticipation",
      plot: "Storm Reid Oprah bbbbbb Winfrey Reese Witherspoon",
    },
    {
      title : "The journey: ",
      genre: "historic",
      plot: "Storm Reidkjhsdkjdqs  cccccccdskjdh Oprah Winfrey Reese Witherspoon",
    },
    {
      title : "The Strangersin the  Night",
      genre: "musical",
      plot: "Storm Reid DDDDDD Oprah Winfrey Reese Witherspoon",
    }
  ];

//.connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  
mongoose
.connect('mongodb://localhost/lab20', {useNewUrlParser: true})
.then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    movieModel
        .insertMany(movies)
        .then(dbRes => {
            console.log("YOUPIIIIIII FIL movie CRÉÉ! (on est dans seeds au fait)");
        })
        .catch(err => {
            console.error('Error connecting to mongo', err)
        })
})
.catch(err => {
    console.error("Error connectigne tout mongo c'est une catastrophe", err);
});    
module.export = movies ;
