const celebrityModel = require('../model/celebrity');
const { dbConnection, dropIfExists } = require('../dbConnection');

// INITAL SEEDS
const celebritiesSeed = [
    {
        name: 'Snoop Dogg',
        occupation: 'Rapper',
        catchPhrase: 'Fo shizzle'
    },
    {
        name: 'Beyonce',
        occupation: 'Singer',
        catchPhrase: 'Bootylicious'
    },
    {
        name: 'Charlie Sheen',
        occupation: 'Actor',
        catchPhrase: 'Duh, winning'
    }
];

dbConnection( async () => {
    await dropIfExists(celebrityModel);
    await celebrityModel.create(celebritiesSeed);
    console.log('Celebrity seeds generated');
});