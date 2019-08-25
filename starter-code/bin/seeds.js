const mongoose = require('mongoose');
const Celebraty = require('../models/Celebrity');

mongoose.connect('mongodb://localhost/celebraties', {useNewUrlParser: true});


const seedsArray = [
    {
    name: 'Luan',
    occupation: 'Operator',
    catchPhrase: 'God, give me a help please!',
}, 
{
    name: 'Julia',
    occupation: 'Music',
    catchPhrase: 'God, I love you!',    
}, 
{
    name: 'Henrique',
    occupation: 'Teacher',
    catchPhrase: 'God, thank you',    
}
];

Celebraty.create(seedsArray)