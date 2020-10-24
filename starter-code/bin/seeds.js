const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser:true, useUnifiedTopology:true});

const celebrities = [
    {name:'Xavi', occupation:'programer', catchPhrase:'sdsdsd'},
    {name: 'name', occupation:'occu', catchPhrase:'catch'},
    {name: 'Jonh', occupation: 'waiter', catchPhrase:'no'}
];

Celebrity.create(celebrities, (err)=>{
    if(err){throw(err);}
    console.log(`Created ${celebrities.length} celebrities`);
    mongoose.connection.close();
})