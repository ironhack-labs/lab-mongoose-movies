const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");
const {
    asyncConnectDB
} = require("../configs/db.config");

//Database connection, on db.config.js
asyncConnectDB();

const celebrities = [{
        name: "Will Smith",
        occupation: "Actor",
        catchPhrase: "I'm the Fresh Prince of Bel-Air",
    },
    {
        name: "Dwayne Johnson",
        occupation: "Wrestler/Actor",
        catchPhrase: "Can you smlell what The Rock, is cookin?",
    },
    {
        name: "Jennifer Lawrence",
        occupation: "Actress",
        catchPhrase: "May luck be ever in your favor",
    },
];

// Seeding with PROMISES 
// Celebrity.create(celebrities)
// .then((celebritiesFromDB) => {
//     console.log(`Created celebrities from ${celebritiesFromDB.length} celebrities`);
// })
// .then(() => mongoose.connection.close())
// .catch((err) => console.error(`Error when seeding celebrities ${err}`));


// Seeding with ASYNC ... AWAIT 
const seedDb = async () => {
    try {
        const celebritiesFromDB = await Celebrity.create(celebrities);
        console.log(
            `Created celebrities from ${celebritiesFromDB.length} celebrities`
        );
        await mongoose.connection.close();
    } catch (error) {
        console.error(`Error when seeding celebrities $(err)`);
    }
};

seedDb();