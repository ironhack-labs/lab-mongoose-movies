const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

const dbName = "celeb-database";
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Marc Giró",
    occupation: "actor",
    catchPhrase: ["Cualquier señorita centrada y culta no deja en manos de un hombre su placer.", "Somos pobres, somos pobres, somos pobres.","Cuidado con los empotradores, porque en ellos reside la deselegancia."]
  },
  {
    name: "La terremoto de Alcorcón",
    occupation: "singer",
    catchPhrase: ["Soy una mujer que se viste de hombre que se viste de mujer."]
  },
  {
    name: "M. Rajoy",
    occupation: "politician",
    catchPhrase: ["Somos sentimientos y tenemos seres humanos.", "Una cosa es ser solidario, y otra es serlo en cambio de nada.", "Lo más importante que se puede hacer por vosotros es lo que vosotros podáis hacer por vosotros."]
  },
  {
    name: "Chus Lampreave",
    occupaton: "actor",
    catchPhrase: ["Mira, paso total de vosotras, me aburris.", "A mí me gustan las magdalenas, el cementerio, las bolsas de plástico, el dinero...", "Nosotros no somos clasistas. No despreciamos a nadie. Hacemos el amor y no la guerra (...) Además, que ya lo dijo Confusio: El amor y el hambre mueven al mundo."]
  },
  {
    name: "Mario Vaquerizo",
    occupation: "singer",
    catchPhrase: ["Los blogs los tienen los que no salen en la tele.", "¿Ninja que es? Ah bueno, Ninja las tortugas."]
  }
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});
