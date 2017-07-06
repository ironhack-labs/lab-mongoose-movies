const Celebrity = require('../models/Celebrity');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/drones-dev')
    .then(() => {
        const CelebrityData = [{
            name  : 'Frangular',
            occupation : 'Frontend',
            catchPhrase : 'hola'
        }, {
            name: 'SaraScript',
            occupation : 'Frontend',
            catchPhrase : 'hola'
        }, {
            name: 'JuanQuery',
            occupation : 'Backend',
            catchPhrase : 'hola'
        }]

        let celebrityObj = CelebrityData.map(p => new Celebrity(p));

        let promises = celebrityObj.map(p => new Promise((resolve, reject) => {
            p.save((err, obj) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`New drones created [${obj.name}] with ID:${obj._id}`);
                    resolve(true)
                }
            })
        }));
        Promise.all(promises).then(() => {
            mongoose.connection.close()
        })
    });
