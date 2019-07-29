const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model'); //ruta interna de nuestros archivos para llegar al modelo

const dbName = 'celebritiesMovies'; //nombre que ponemos nosotros para llamar a la BBDD en Compass
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true }); //ES CLAVE!! nos conecta con la BBDD para enviarle nuestros objetos

const celebrities = [     // Creamos los objetos en base al modelo Celebrity (llamado arriba)
  {
    name: 'Macarronera', 
    occupation: 'Cantante', 
    catchPhrase: 'Olé tú'
  },
  {
    name: 'Farolillo', 
    occupation: 'Dj', 
    catchPhrase: 'Luces en la sombra'
  },
  {
    name: 'Mami Sound', 
    occupation: 'Coplera', 
    catchPhrase: 'Del alma mía'
  }

]

Celebrity.create(celebrities, (err) => {    //método .create que crea el/los objetos que indiquemos en el array
  if (err) { throw (err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});