/*jshint esversion: 6 */

/* Seeds for celebrities */

/*
const withDbConnection = require("./../withDbConnection");
const Celebrity = require("./../models/Celebrity");

const celebs = [
  {
    name: "Britney Spears",
    occupation: "Singer",
    catchPhrase:
      "The cool thing about being famous is traveling. I have always wanted to travel across seas, like to Canada and stuff."
  },
  {
    name: "Justin Bieber",
    occupation: "Singer",
    catchPhrase:
      "Anne [Frank] was a great girl. Hopefully she would have been a Belieber."
  },
  {
    name: "Kanye West",
    occupation: "Singer",
    catchPhrase:
      "I won't go into a big spiel about reencarnation, but the first time I was in the Gucci Store in Chicago was the closest I've ever felt to home."
  }
];
withDbConnection(async () => {
  // Esto funciona porque ya hay docs en la bbdd pero la primera vez daba error
  await Celebrity.collection.drop();
  const result = await Celebrity.create(celebs);
  console.log(result);
});*/

/* Seeds for celebrities */

const withDbConnection = require("./../withDbConnection");
const Movie = require("./../models/Movie");

const celebs = [
  {
    title: "Parásitos",
    genre: "Triller",
    plot:
      "Tanto Gi Taek como su familia están sin trabajo. Cuando su hijo mayor, Gi Woo, empieza a recibir clases particulares en la adinerada casa de Park, las dos familias, que tienen mucho en común pese a pertenecer a dos mundos totalmente distintos, comienzan una relación de resultados imprevisibles."
  },
  {
    title: "Mientras dure la guerra",
    genre: "Drama",
    plot:
      "España, 1936. El célebre escritor Miguel de Unamuno decide apoyar públicamente la sublevación militar. Inmediatamente es destituido por el gobierno republicano como rector de la Universidad de Salamanca. Mientras, el general Franco consigue sumar sus tropas al frente sublevado e inicia una exitosa campaña."
  },
  {
    title: "Once upon a time in Hollywood",
    genre: "Comedia",
    plot:
      "A finales de los 60, Hollywood empieza a cambiar y el actor Rick Dalton trata de adaptarse a los nuevos tiempos. Junto a su doble, ambos experimentan problemas para modificar sus hábitos, debido a lo enraizados que están. Al mismo tiempo, nace una relación entre Rick y la actriz Sharon Tate, que fue víctima de la familia Manson en la matanza de 1969."
  }
];
withDbConnection(async () => {
  // Esto funciona porque ya hay docs en la bbdd pero la primera vez daba error
  await Movie.collection.drop();
  const result = await Movie.create(celebs);
  console.log(result);
});
