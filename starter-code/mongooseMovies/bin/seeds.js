//la estructura de este archivo la he sacado copiando del pair del mismo día, no entiendo por qué a veces ponemos unas cosas y a veces otras, qué hay que llamar en cada momento
// ¿el patrón a seguir es: require mongoose +  esquema + require con la db +  connect + modelo + create con disconnect, siempre?
// ¿siempre se llama primero de manera independiente al documento que crea la base de datos (seeds.js, en este proyecto), y luego se trabaja lo demás actualizando en el navegador?
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Celebrity = require('../models/celebrity')

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

let firstCelebrity = [
  {
   name: 'Marc',
   occupation: 'Prof', 
   catchPhrase: '¿qué devuelve esta función?'
  },

  {
    name: 'Anna',
    occupation: 'TA', 
    catchPhrase: 'bien, ¿no?'
  },
  
  {
    name: 'Víctor',
    occupation: 'Programme Manager', 
    catchPhrase: 'bloquead los portátiles'
  }
]

Celebrity.create(firstCelebrity, (err) => { //he intenttado crearlo con una promesa, pero no me funciona
  if (err){ throw(err)}
  console.log("connected")
  mongoose.connection.close()
})