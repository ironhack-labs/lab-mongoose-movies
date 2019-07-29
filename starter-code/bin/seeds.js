const mongoose = require('mongoose');
const Celebrity = require('../model/celebritymodel');


const dbtitle = 'celebrity';
mongoose.connect(`mongodb://localhost/${dbtitle}`);


const celebrities = [

    {

    name: 'Chiquito',

    occupation: 'muerto',

    catchPhrase: 'candemor'

    },

    {

        name: 'Cantinflas',
    
        occupation: 'muerto tambien',
    
        catchPhrase: 'señor licenciado'
    
        },


     {

            name: 'Lola',
        
            occupation: 'canta',
        
            catchPhrase: 'irse'
        
    }
        
]

Celebrity.create(celebrities, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
  });