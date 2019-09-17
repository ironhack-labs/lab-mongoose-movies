const mongoose = require("mongoose");
const Director = require("../models/Director");
const Movie = require("../models/Movie");
const Actor = require("../models/Actor");

mongoose
  .connect("mongodb://localhost/celebrity-project", { useNewUrlParser: true })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error("Error connecting to mongo", err));

  const directorsList = [
    {
      name: "Barry Jenkins",
      occupation: "Director",
      catchPhrase: "As a writer, a blank page will humble the hell out of you. It always does, and it always will.",
      image: "https://static01.nyt.com/images/2019/01/27/arts/27barry-jenkins1/27barry-jenkins1-articleLarge.jpg",
    },
    {
      name: "Paul Thomas Anderson",
      occupation: "Director",
      catchPhrase: "I'll rebel against powers and principalities, all the time. Always, I will.",
      image: "https://media.gq.com/photos/5a383d755f1f364364dd40f9/master/pass/P.T.%20Anderson-01.jpg",
    },
    {
      name: "Luca Guadagnino",
      occupation: "Director",
      catchPhrase: "I'm incredibly inspired by the goofy edginess of teenagers and young people.",
      image: "https://static.purple.fr/2015/10/003_NB.jpg",
    },
  ];

  // Director.create(directorsList);

  const moviesList = [
    {
      title: "Moonlight",
      director: "Barry Jenkins",
      genre: "Drama",
      plot: "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
      image: "https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    },
    {
      title: "Suspiria",
      director: "Luca Guadagnino",
      genre: "Horror",
      plot: "A darkness swirls at the center of a world-renowned dance company, one that will engulf the troupe’s artistic director, an ambitious young dancer and a grieving psychotherapist. Some will succumb to the nightmare, others will finally wake up.",
      image: "https://m.media-amazon.com/images/M/MV5BMjQ2MTIyNjM2MF5BMl5BanBnXkFtZTgwMDE3NDMyNjM@._V1_SY1000_CR0,0,648,1000_AL_.jpg",
    },
    {
      title: "Phantom Thread",
      director: "Paul Thomas Anderson",
      genre: "Romance",
      plot: "Renowned British dressmaker Reynolds Woodcock comes across Alma, a young, strong-willed woman, who soon becomes a fixture in his life as his muse and lover.",
      image: "https://m.media-amazon.com/images/M/MV5BMWJkNzBkM2UtYWFlMC00NmEwLTgxOGUtMjVmMzYyZjgyMmEzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
    },
  ];

  // Movie.create(moviesList);

  const actorsList = [
    {
      name: "Tilda Swinton",
      nominations: ["BAFTA Awards: Best Actress in a Leading Role (We Need To Talk About Kevin, 2011","Independent Spirit Awards: Best Female Lead (Only Lovers Left Alive, 2014)"],
      awards: ["Academy Awards: Best Supporting Actress (Michael Clayton, 2007)","Independent Spirit Awards: Robert Altman Award (Suspiria, 2018)"],
      quote: "I've been on the other side of the table many times, trying to get people to be sympathetic to projects, and I've been the victim of that kind of intense kindness masking extreme stupidity.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Tilda_Swinton_%2828352184350%29_%28cropped%29.jpg/440px-Tilda_Swinton_%2828352184350%29_%28cropped%29.jpg",
    },
    {
      name: "Mahershala Ali",
      nominations: ["Emmy Awards: Outstanding Guest Actor in a Drama Series (House of Cards, 2016)","Emmy Awards: Outstanding Lead Actor in a Limited Series or Television Movie (True Detective, 2019)"],
      awards: ["Academy Awards: Best Supporting Actor (Moonlight, 2017)","Academy Awards: Best Supporting Actor (Green Book, 2019)"],
      quote: "The people that I admire have a wonderful balance of self-belief and humility.",
      image: "https://nikoletta-skarlatos.com/wp-content/uploads/2017/11/THR_MAHERSHALA-12.36.01-AM-755x1024.jpg",
    },
    {
      name: "Gena Rowlands",
      nominations: ["Academy Awards: Best Actress in a Leading Role (A Woman Under The Influence, 1975)","Academy Awards: Best Actress in a Leading Role (Gloria, 1980)"],
      awards: ["Emmy Awards: Outstanding Lead Actress in a Miniseries or a Special (The Betty Ford Stor, 1987)","Emmy Awards: Outstanding Lead Actress in a Miniseries or a Special (Hysterical Blindness, 2002)"],
      quote: "I love independent filmmaking. I don't agree with a lot of it, but that's the point.",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Gena_Rowlands_Tony_Rome_1968.JPG",
    },
  ];

  Actor.create(actorsList);