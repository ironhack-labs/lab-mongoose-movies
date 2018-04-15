require("dotenv").config();
const mongoose = require("mongoose");

const Movie = require("../models/Movie");
const movies = [
  {
    title: "Asuntos Serios",
    genre: "Suspense",
    plot: "Marca, el dario online de prensa deportiva ha sufrido un atentado. Todo un país se paraliza ante el miedo excepto un hombre."
  },
  {
    title: "La ultima y nos vamos",
    genre: "Ciencia ficcion",
    plot: "Un sabado cualquiera, cuando un grupo de amigas esta a punto de irse a casa sucede algo inesperado, una de ellas se encuentra un billete de 50 euros."
  },
  {
    title: "Estocolmo",
    genre: "Comedia",
    plot: "Tras un divorcio tormentoso un sueco ve en la Feria de Abril de Sevilla la oportunidad ideal de dar la bienvenida a su solteria de nuevo."
  }
];

const dbURL = process.env.DBURL;
mongoose.connect(dbURL).then(() => {
    Movie.create(movies);
    console.log("movies creadas").then(() => {
        mongoose.disconnect();
    })
})

/* const Celebrity = require("../models/Celebrity");
const celebrities = [
    {
        name: "Sara Vega",
        occupation: "Reina de Constantinapia",
        catchPhrase: "Seguro que a estas horas hay algun bar abierto"
    },
    {
        name: "Marta Vega",
        occupation: "Erudita",
        catchPhrase: "Opositar es un estado mental"
    },
    {
        name: "Sara Paredes",
        occupation: "Embajadora arabe",
        catchPhrase: "Las patatas vuelan despacio"
    }
] 

const dbURL = process.env.DBURL;
mongoose.connect(dbURL).then(() => {
  Celebrity.create(celebrities);
  console.log("celebrities creadas").then(() => {
    mongoose.disconnect();
  });
});
*/