const withDbConnection = require("./../withDbConnection");
const Celebrity = require("./../models/celebrity");

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
    occupation: "Humorist",
    catchPhrase:
      "Los lunes no tienen nada de malo, es tu vida la que es una mierda."
  }
];

withDbConnection(async () => {
  await Celebrity.collection.drop();
  let result = await Celebrity.create(celebrities);
  console.log(result);
});
