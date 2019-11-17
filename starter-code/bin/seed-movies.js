const mongoose = require("mongoose");
const Movie = require("../models/Movies");

mongoose
  .connect("mongodb://localhost/movies", { useNewUrlParser: true })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error("Error connecting to mongo", err));

Movie.deleteMany()
.then(()=>{
  const movies = [
    {
      title: "The Godfather (All parts)",
      genre: "Mafia",
      plot: "Epic tale of a 1940s New York Mafia family and their struggle to protect their empire from rival families as the leadership switches from the father (Marlon Brando) to his youngest son (Al Pacino). ",
    },
    {
      title: "Goodfellas",
      genre: "Crime",
      plot: "As a poor Irish-Italian growing up in 1950s New York City, Henry Hill rises through the ranks of his Brooklyn neighborhood's crime branch, and with money from the mob he begins living the good life, complete with a beautiful bride, a fancy home, and the best seats at the most exclusive restaurants. A botched robbery lands Henry in prison for a brief period of time, and when he gets released, his reckless infidelities and drug abuse damage his associations with his adopted family.",
    },
    {
      title: "12 Angry Men",
      genre: "Courtroom Drama",
      plot: "Eleven jurors are convinced that the defendant is guilty of murder. The twelfth has no doubt of his innocence. How can this one man steer the others toward the same conclusion?",
    },
    {
      title: "Pulp Fiction",
      genre: "Thriller",
      plot: "The film interweaves three tales: the first story focuses on Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson), two hit men on duty for the big boss, Marsellus Wallace (Ving Rhames), whose gorgeous wife, Mia (Uma Thurman), takes a liking to Vincent. In the second, a down-and-out pugilist (Bruce Willis), who is ordered to take a fall, decides that there’s more money in doing the opposite. The final chapter follows a pair of lovers (Amanda Plummer and Tim Roth) as they prepare to hold up a diner.",
    },
    {
      title: "El secreto de sus ojos",
      genre: "Thriller",
      plot: "Benjamin Esposito is a judicial employee who decides to retire after writing a novel about a criminal case, which has been a witness and protagonist. Writing the book on the murder occurred in Buenos Aires in 1974, leads him to investigate his own past and for a period of argentina history marked by violence and death.",
    },
  ];
  
  Movie.insertMany(movies)

})

