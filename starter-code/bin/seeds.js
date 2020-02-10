require('dotenv').config();
const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movies = require("../models/movies");

const celebrity = [{
    name: "Groucho Marx",
    occupation: "Comedian",
    catchPhrase: "There are so many things in life more important than money! But they cost so much!"
  }, {
    name: "Mel Brooks",
    occupation: "Director, comedian....",
    catchPhrase: "Life literally abounds in comedy if you just look around you."
  }, {
    name: "Bill Murray",
    occupation: "Comedian and more",
    catchPhrase: "We're Americans! Do you know what that means? It means our forefathers were kicked out of every decent country in the world."
  }

];

const movies = [{
  title: "Duck Soup",
  genre: "Comedia",
  plot: "Duck Soup is a 1933 pre-Code Marx Brothers comedy film written by Bert Kalmar and Harry Ruby, with additional dialogue by Arthur Sheekman and Nat Perrin, and directed by Leo McCarey. Released theatrically by Paramount Pictures on November 17, 1933, it starred the Four Marx Brothers (Groucho, Harpo, Chico, and Zeppo) and also featured Margaret Dumont, Louis Calhern, Raquel Torres and Edgar Kennedy. It was the last Marx Brothers film to feature Zeppo, and the last of five Marx Brothers movies released by Paramount Pictures."
},{
  title: "Spaceballs",
  genre: "Comedia",
  plot: "Planet Spaceball, led by the incompetent President Skroob, has squandered all of its fresh air. Skroob schemes to force King Roland of the neighboring planet Druidia to give them the code to the shield that protects Druidia, allowing them to steal all their air, by kidnapping his daughter Princess Vespa on the day of her arranged marriage to the narcoleptic Prince Valium. Skroob sends the villainous Dark Helmet to complete this task with Spaceball One, an impossibly huge ship helmed by Colonel Sandurz. Before they can arrive, Vespa abandons her wedding and flees the planet in her Mercedes spaceship with her droid of honor, Dot Matrix."
},{
  title: "Ghostsbusters",
  genre: "Comedia",
  plot: "Ghostbusters is a 1984 American supernatural comedy film directed by Ivan Reitman and written by Dan Aykroyd and Harold Ramis. It stars Bill Murray, Aykroyd, and Ramis as, respectively, Peter Venkman, Ray Stantz, and Egon Spengler, a trio of eccentric parapsychologists who start a ghost-catching business in New York City. The film also stars Sigourney Weaver and Rick Moranis, and features Annie Potts, William Atherton, and Ernie Hudson in supporting roles."
}
];

mongoose
  .connect('mongodb://localhost/starter-code', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    Celebrity.deleteMany()
      .then(() => {
        return Celebrity.create(celebrity);
      })
      .then(() => {
        console.log("succesfully added all the data");
        mongoose.connection.close();
        process.exit(0);
      });
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    Movies.deleteMany()
      .then(() => {
        return Movies.create(movies);
      })
      .then(() => {
        console.log("succesfully added all the data");
        mongoose.connection.close();
        process.exit(0);
      });
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });