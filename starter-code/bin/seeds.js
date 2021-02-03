const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");

mongoose
  .connect("mongodb://localhost/lab-mongoose-celebrities", {
    useNewUrlParser: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const movies = [
  {
    title: "Donnie Darko",
    genre: "Drama",
    plot:
      "During the presidential election of 1988, a teenager named Donnie Darko sleepwalks out of his house one night and sees a giant, demonic-looking rabbit named Frank, who tells him the world will end in 28 days. When Donnie returns home, he finds that a jet engine has crashed into his bedroom. Is Donnie living in a parallel universe, is he suffering from mental illness - or will the world really end?",
  },
  {
    title: "Inglorious Bastards",
    genre: "Comedy",
    plot:
      "It is the first year of Germany's occupation of France. Allied officer Lt. Aldo Raine (Brad Pitt) assembles a team of Jewish soldiers to commit violent acts of retribution against the Nazis, including the taking of their scalps. He and his men join forces with Bridget von Hammersmark, a German actress and undercover agent, to bring down the leaders of the Third Reich. Their fates converge with theater owner Shosanna Dreyfus, who seeks to avenge the Nazis' execution of her family.",
  },
  {
    title: "Shutter Island",
    genre: "Thriller",
    plot:
      "The implausible escape of a brilliant murderess brings U.S. Marshal Teddy Daniels (Leonardo DiCaprio) and his new partner (Mark Ruffalo) to Ashecliffe Hospital, a fortress-like insane asylum located on a remote, windswept island. The woman appears to have vanished from a locked room, and there are hints of terrible deeds committed within the hospital walls. As the investigation deepens, Teddy realizes he will have to confront his own dark fears if he hopes to make it off the island alive.",
  },
];

Movie.create(movies)
  .then((result) => {
    console.log(`Created ${result.length} movies`);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log(error);
  });
