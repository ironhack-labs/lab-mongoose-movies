const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.models");




const celebrity = [{
  name: "pepapig",
  occupation: "braineating",
  catchPhrase: "capaz de comerle la cabeza a los niños, convirtiendo estos es zombies"
},
{
  name: "Bob Marley",
  occupation: "smoked",
  catchPhrase: "El amor no se debe entender, se debe demostrar. Conserva lo que tengas, olvida lo que duela, lucha por lo que quieras, perdona a los que te dañan y disfruta de quien te ama. No hay nada más cobarde que enamorar a una mujer sin intención de amarla."
},
{
  name: "Germán A",
  occupation: "coding",
  catchPhrase: "lo tienes calaro? SUPER!"
}]


const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`)

Celebrity.create(celebrity, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrity.length} celebrities`)
  mongoose.connection.close()
}) 