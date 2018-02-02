const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose.connect('mongodb://localhost/mongoose-movies').then(() => console.log("Conectado!"));

const celebrities = [
    {
        name: 'Inna',
        occupation: 'Singer',
        catchPhrase: '«Solo déjame saber.»',
    },
    {
        name: 'Viki Odintcova',
        occupation: 'Model',
        catchPhrase: '«Me levanto por la mañana en busca de aventuras.»',
    },
    {
        name: 'Auron Play',
        occupation: 'Youtuber',
        catchPhrase: '«Ey pero que pasa chavales?, Todo bien? Todo correcto? Y yo que me alegro.»',
    }
];

Celebrity.collection.drop();

celebrities.forEach( c => {
    let cele = new Celebrity(c);
    cele.save((err) =>{
        if(err) {
            throw err;
        }
        console.log('Celebrity guardado...');
    })
});