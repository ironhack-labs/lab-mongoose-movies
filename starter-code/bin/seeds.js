const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const dbtitle = 'celebrities-proyect';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true, useUnifiedTopology: true });
Celebrity.collection.drop();
const celebrities = [{

    name : " jorge Guzman" , 
    ocupation : " actor ",
    catchPhrase : " me vuelvo loco enseguida ",
},
{
    name:"raul Portal" ,
    ocupation:" vendedor famoso de helados" ,
    catchPhrase :" me gusta el arte "
}, 
{
    name : "John Travolta" ,
    ocupation: "trabajador heroe de la calle ",
    catchPhrase: " donde puedo, voy "
}
  


];

Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
  });   