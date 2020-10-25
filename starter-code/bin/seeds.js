const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const dbtitle = 'celebrities-proyect';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true, useUnifiedTopology: true });
Celebrity.collection.drop();
const celebrities = [{

    name : " jorge" , 
    ocupation : " actor ",
    catchPhrase : " me vuelvo loco enseguida ",
},
{
    name:"raul" ,
    ocupation:" vendedor famoso de halados" ,
    catchPhrase :" me gusta el arte "
}, 
{
    name : "capitan del esapcio" ,
    ocupation: "trabajador heroe de la calle ",
    catchPhrase: " donde puedo, voy "
}
  


];

Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
  });   