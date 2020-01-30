const withDbConnection = require("./../withDbConnection");
const Celebrity = require("./../models/celebrity");
const Movie = require("../models/movie");

const celebrities = [
  {
    name: "Groucho Marx",
    occupation: "Actor",
    catchPhrase:
      "Jamás olvido una cara, pero en su caso estaré encantado de hacer una excepción."
  },
  {
    name: "Woody Allen",
    occupation: "Actor",
    catchPhrase:
      "No puedo escuchar tanto Wagner. Me entran ganas de invadir Polonia."
  },
  {
    name: "Ricky Gervais",
    occupation: "Humorista",
    catchPhrase:
      "Los lunes no tienen nada de malo, es tu vida la que es una mierda."
  }
];

const movies = [
  {
    title: "Manhattan",
    genre: "Comedia dramática",
    plot:
      "Un escritor de comedias divorciado que sale con una colegiala, se enamora de la amante de su mejor amigo."
  },
  {
    title: "Una noche en la ópera",
    genre: "Comedia musical",
    plot:
      "Promotor astuto y sus compañeros intentan engañar una mujer rica para que respalde unos cantantes italianos."
  },
  {
    title: "The Office",
    genre: "Comedia",
    plot:
      "La vida diaria de los empleados de una oficina de una compañía papelera localizada en Scranton, Pensilvania."
  }
];

withDbConnection(async () => {
  try {
    await Celebrity.collection.drop();
  } catch (error) {
    console.log("The DB does not exist");
  }
  let result = await Celebrity.create(celebrities);
  console.log(result);

  try {
    await Movie.collection.drop();
  } catch (error) {
    console.log("The DB does not exist");
  }
  result = await Movie.create(movies);
  console.log(result);
});
