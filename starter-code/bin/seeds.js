const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');



const celebrities = [

    {
        name: 'Gabriel Macht',
        ocuppation: 'actor',
        catchPhrase: 'You always have a choice'
        
    },

    {
        name: 'Michael Jordan',
        ocuppation: 'baskteball player',
        catchPhrase: 'You must expect great things of yourself before you can do them'
    },

    {
        name: 'Dave Grohl',
        ocuppation: 'Singer',
        catchPhrase: 'I don´t belive in guilty pleasures'
    }
];

const dbName = 'celebrities-project';
mongoose.connect(`mongodb://localhost/${dbName}`)
.then(()=>{
    Celebrity.create(celebrities, (err)=>{
        if(err){throw(err)}
        console.log(`Created ${celebrities.length} celebrities`);
        mongoose.connection.close();
    })
})
.catch(err =>{
    console.error('Error connecting to mongo', err);
})

