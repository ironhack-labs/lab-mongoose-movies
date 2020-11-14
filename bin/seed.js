const mongoose=require('mongoose');
const Celebrity=require('../models/celebrity.model');

const dbName = 'moviesCeleb';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebritys = [
    {
        name: "Samuel L. Jackson",
        ocupation: "Actor",
        catchPhrase: "I never did one thing right in my life, You know that? Not one. That takes skill."
    },
    {
        name: "Meryl Streep",
        ocupation: "Actor",
        catchPhrase: "Giving voice to characters that have no other voice. That’s the great worth of what we do."
    },
    {
        name: "Heath Ledger",
        ocupation: "Actor",
        catchPhrase: "Nobody panics when things go according to plan. Even if the plan is horrifying!"
    }    
]

Celebrity
    .create(celebritys)
    .then(allCelebsCreated => {
        console.log(`Created ${allCelebsCreated.length} celebritys`)
        mongoose.connection.close();
    })
    .catch(err => console.log('Hubo un error,', err))