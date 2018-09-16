const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

const celebrities = [
  {
    name: "Matt Damon",
    occupation: "Actor",
    catchPhrase:
      "It was offered to me. When Spielberg says jump, bitches say how high?"
  },
  {
    name: "Morgan Freeman",
    occupation: "Actor",
    catchPhrase: "Challenge yourself; it’s the only path which leads to growth."
  },
  {
    name: "Charlize Theron",
    occupation: "Actress",
    catchPhrase:
      "You are only as great as the opportunities that are given to you"
  }
];

const movies = [
  {
    title: "Jason Bourne",
    genre: "Thriller action",
    plot:
      "A decade after he exposed Operation Blackbriar (as seen in The Bourne \
      Ultimatum) and disappeared, Jason Bourne has finally recovered from his \
      amnesia, isolating himself from the world and making a living by taking \
      part in savage, bareknuckle fighting bouts. In Reykjavík, Nicky Parsons,\
       who has been collaborating with a hacktivist group led by Christian \
      Dassault, hacks into the CIA's mainframe computer server to expose its \
      black ops programs. This alerts Heather Lee, the head of the agency's \
      cybersecurity operations division, and CIA director Robert Dewey. In the\
       process, Parsons finds documentation concerning Bourne's recruitment \
      into Treadstone and his father's role in the program. She travels to \
      Athens to find and inform him."
  },
  {
    title: "Seven",
    genre: "Thriller terror",
    plot: "Soon-to-retire detective William Somerset is partnered with \
      short-tempered but idealistic David Mills, who has recently moved to \
      the city with his wife Tracy. Tracy confides to Somerset that she is \
      pregnant and has yet to tell Mills, as she is unhappy with the city and \
      feels it is no place to raise a child. Somerset sympathizes, having had \
      a similar situation with his ex-girlfriend many years earlier, and \
      advises her to tell Mills only if she plans to keep the child."
  },
  {
    title: "Prometheus",
    genre: "Science fiction",
    plot:
      "As a spacecraft departs a planet, a humanoid alien drinks an iridescent \
      liquid, causing its body to dissolve. As its remains cascade into a \
      waterfall, the alien's DNA strands mix with the water."
  }
];

mongoose
  .connect(
    "mongodb://localhost/mongoose-movies",
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    Celebrity.collection.drop();
    return Celebrity.insertMany(celebrities);
  })
  .then(()=>{
    Movie.collection.drop();
    return Movie.insertMany(movies);
  })
  .then(() => {
    return Celebrity.find();
  })
  .then(cel => {
    cel.forEach(cele => console.log(cele.name));
  })
  .then(() => {
    return Movie.find();
  })
  .then(movies => {
    movies.forEach(movie => console.log(movie.title));
    mongoose.disconnect();
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
