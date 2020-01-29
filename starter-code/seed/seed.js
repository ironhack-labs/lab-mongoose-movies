const withDbConnection = require("../withDbConnection");
const Celebrity = require("../models/Celebrity");

const dataCel = [
  { name: "Adam Samlexr", occupation: "Actor", catchPhrase: "Mola la leche" },
  {
    name: "Rubén Vaquero",
    occupation: "Ironhacker",
    catchPhrase: "Ni mondongo ni mondonga, dame mandanga"
  },
  {
    name: "Jim Carrey",
    occupation: "Actor",
    catchPhrase: "Mi enfoque es olvidar el dolor de la vida"
  }
];

withDbConnection(async () => {
  //await Celebrity.collection.drop();
  await Celebrity.deleteMany();
  await Celebrity.create(dataCel);
});
