const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity').Celebrity;


mongoose.connect('mongodb://localhost/celebrities');

const celebritiesData = [
    {
        name: 'Angelina Jolie', ocuppation: 'actress', catchPhrase: 'The loss of a child is my greatest nightmare.' },
    { name: 'Will Smith', ocuppation: 'actor', catchPhrase: 'Do I look like I care what (you/they) think?' },
    { name: 'Drake', ocuppation: 'singer', catchPhrase: 'Hell Yah Fuckin Right' }
];

Celebrity.create(celebritiesData, (err, doc) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Yeah! a celebrities data has been created!')
    }
    mongoose.disconnect();

});