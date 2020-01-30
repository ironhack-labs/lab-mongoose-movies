const { withDbConnection, dropIfExists } = require("../withDbConnection");
const Celebrity = require("../models/Celebrity");

withDbConnection(async () => {
  await dropIfExists (Celebrity);
  await Celebrity.create([
    {name:"Aragorn",occupation:"Ranger",catchPhrase:"Cuenta con mi espada!"},
    {name:"Legolas",occupation:"Elf-Warrior",catchPhrase:"...y con mi arco!"},
    {name:"Gimli",occupation:"Dwarf-Warrior",catchPhrase:"...y con mi hacha!"},
    {name:"Frodo",occupation:"Rogue",catchPhrase:"Yo soy el portador del anillo"}
  ])
})