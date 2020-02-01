const { withDbConnection, dropIfExists } = require("../withDbConnection");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

withDbConnection(async () => {
  //await dropIfExists (Celebrity);
  // await Celebrity.create([
  //   {name:"Aragorn",occupation:"Ranger",catchPhrase:"Cuenta con mi espada!"},
  //   {name:"Legolas",occupation:"Elf-Warrior",catchPhrase:"...y con mi arco!"},
  //   {name:"Gimli",occupation:"Dwarf-Warrior",catchPhrase:"...y con mi hacha!"},
  //   {name:"Frodo",occupation:"Rogue",catchPhrase:"Yo soy el portador del anillo"}
  // ])
  await dropIfExists (Movie); 
  await Movie.create([
    {title:"La comunidad del anillo",genre:"Fantasy",plot:"Muchas personas de viaje para destruir un anillo"},
    {title:"Las dos torres",genre:"Fantasy",plot:"Muchas personas de viaje visitan unas torres"},
    {title:"El retorno del rey",genre:"Fantasy",plot:"Muchas personas de viaje para destruir a Sauron"}
  ])
})