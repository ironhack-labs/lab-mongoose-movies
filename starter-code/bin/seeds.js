const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose.connect(process.env.DBURL);

const celebrities = [
    {
        name: "Teodoro Diaz",
        occupation: "Blogger & Influencer",
        catchPhrase: "Siempre que pienses darme LIKE, recuerda que prefiero un comentario"

    },
    {
        name: "Pablo Taboada",
        occupation: "Jugador de ping pong",
        catchPhrase: "La vida es una ruleta y cuando todo acabe, no conteis conmigo, eso si, a la semana siguiente os regalo mi corazón"
    },
    {
        name: "Ricardo  Manuel Alonzo",
        occupation: "DJ",
        catchPhrase: "Despues de una dura jornada, me gusta agarrar una buena tajada"
    },
];



Celebrity.create(celebrities, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close()
});