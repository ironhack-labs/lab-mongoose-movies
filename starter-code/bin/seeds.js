const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.model");
const Movie = require("../models/movie.model");

const celebrities = [
  {
    name: "Check Norris",
    occupation: "Actor",
    catchPhrase: "Depuis le 11 septembre 2001 Chuck Norris ne lance plus d'avions en papier."
  },
  {
    name: "Donald Trump",
    occupation: "Politic",
    catchPhrase: "I think my positions are going to be what the people in this room come up with."
  },
  {
    name: "Mickael Vendetta",
    occupation: "Actor",
    catchPhrase: "Les journalistes, c’est comme le public, ils sont là pour m’admirer"
  }
];

const movies = [
  {
    title: "The Godfather",
    genre: "Drama",
    plot:
      "L'histoire se déroule de 1945 à 1955, se centre sur les Corleone, une des plus grandes familles de la Mafia américaine, et aborde le sujet de la succession du patriarche de la famille Vito Corleone, dit le Parrain (Marlon Brando) avec l'ascension de son fils Michael Corleone (Al Pacino), qui initialement souhaite rester en dehors des activités criminelles de la famille mais qui, par un enchaînement de circonstances tragiques, finit par en devenir le membre le plus impitoyable."
  },
  {
    title: "La Cité de la Peur",
    genre: "Humour",
    plot:
      "Le film commence sur une projection des dernières minutes de Red Is Dead, un film d'horreur nanardesque dans lequel un tueur en série communiste tue ses victimes à la faucille et au marteau, à l'occasion du premier jour du festival de Cannes. Lorsque le générique de fin apparaît, tout le monde a déjà quitté la salle au grand désespoir d'Odile Deray, l'attachée de presse, qui essaie de retenir un dernier critique de cinéma en lui suppliant d'écrire un bon papier mais celui-ci refuse car ce film « est une merde ». Alors qu'Odile quitte le cinéma dépitée, le projectionniste du film est assassiné par un tueur en série de la même façon que dans le film."
  },
  {
    title: "Speed",
    genre: "Action",
    plot:
      "Howard Payne, terroriste psychopathe, policier à la retraite, prend en otage un ascenseur dans un immeuble d'affaires à Los Angeles et réclame une rançon en menaçant de le faire sauter. Son projet échouant à cause de deux officiers du SWAT, Jack Traven et son partenaire Harry Temple, il décide alors de se faire exploser avec le C4 qu'il a placé sur son torse et se faire passer pour mort. Pour se venger, Payne pose une bombe dans un bus, qui risque d'exploser si la vitesse passe en dessous de 50 miles/h (soit 80 km/h) ou si quelqu'un essaie de descendre. Jack Traven réussit à monter dans le bus. Commence alors un véritable casse-tête pour l'officier du SWAT, qui doit trouver par tous les moyens comment désamorcer la bombe accrochée à l'essieu du bus."
  }
];

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    // return Celebrity.insertMany(celebrities);
    return Movie.insertMany(movies);
  })
  .then(res => {
    console.log(`Great! ${res.length} records have been inserted in db.`);
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
