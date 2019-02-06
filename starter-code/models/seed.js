const mongoose = require("mongoose");
const Celebrity = require("./celebrities.js");
const Movie = require("./movie.js");

const celebrities = [
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "GOD BLESS ENGLAND BOY"
  },
  {
    name: "Bruce Willis",
    occupation: "Actor",
    catchPhrase: " YIPIKAYE MOTHER F*****"
  },
  {
    name: "Edward Norton",
    occupation: "Actor",
    catchPhrase: "I am GROOT"
  }
];

const movies = [
  {
    title: "Fight Club",
    genre: "Action",
    plot:
      "Jack est un jeune expert en assurance insomniaque, désillusionné par sa vie personnelle et professionnelle. Lorsque son médecin lui conseille de suivre une thérapie afin de relativiser son mal-être, il rencontre dans un groupe d'entraide Marla avec qui il parvient à trouver un équilibre."
  },
  {
    title: "Top Gun",
    genre: "Action",
    plot:
      "Pete Maverick Mitchell, un jeune prodige du pilotage peu apprécié par sa hiérarchie, rejoint la très réputée école de l'aéronavale américaine, Top Gun,pour perfectionner ses techniques de combat aérien. Tous les étudiants concourent pour le titre de meilleur pilote."
  },
  {
    title: "Hulk",
    genre: "Sci-fi",
    plot:
      "Le scientifique Bruce Banner cherche désespérément un antidote aux radiations qui ont créé Hulk. Il vit dans l'ombre et parcourt la planète à la recherche d'un remède. La force destructrice de Hulk attire le Général Thaddeus E. Ross et son bras droit Blonsky qui rêvent de l'utiliser à des fins militaires. Ils tentent de développer un sérum pour créer des soldats surpuissants."
  }
];

mongoose
  .connect("mongodb://localhost/starter-code", {useNewUrlParser: true})
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Movie.insertMany(movies)
  .then(data => {
    console.log(`${data.length} inserted`);
  })
  .catch(err => {
    console.log("Seed insertion failure", err);
  });
