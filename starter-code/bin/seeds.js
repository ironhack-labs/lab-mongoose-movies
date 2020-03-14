const mongoose = require('mongoose');
const Celebrity = require('../model/celebrity');

const DB_NAME = 'lab-mongoose-movie';
mongoose.connect(`mongodb://localhost/${DB_NAME}`,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const celebrities = [
    {
        name:'Rem Koolhaas',
        occupation:'architect',
        catchPhrase:'The City is an addictive machine from which there is no escape',

    },
    {
        name:'Donald Trump',
        occupation:'politician',
        catchPhrase:'Make America Great again',
    },
    {
        name:'Chris Tarrant',
        occupation:'broadcaster',
        catchPhrase:'Is that your final answer?'
    }
];

Celebrity.create(celebrities, err=>{
    if(err){
        throw err;
    }
    console.log(`Created ${celebrities.length} celebrities`);
    mongoose.connection.close();
})
