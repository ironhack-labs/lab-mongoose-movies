const movieModel = require('../model/movie');
const { dbConnection, dropIfExists } = require('../dbConnection');

// INITAL SEEDS
const moviesSeed = [
    {
        title: "Avengers: Endgame",
        genre: "Action",
        plot: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe."
    },
    {
        title: "1917",
        genre: "Drama/Action",
        plot: "During World War I, two British soldiers -- Lance Cpl. Schofield and Lance Cpl. Blake -- receive seemingly impossible orders. In a race against time, they must cross over into enemy territory to deliver a message that could potentially save 1,600 of their fellow comrades -- including Blake's own brother."
    },
    {
        title: "Jojo Rabbit",
        genre: "Drama/Comedy",
        plot: "Jojo is a lonely German boy who discovers that his single mother is hiding a Jewish girl in their attic. Aided only by his imaginary friend -- Adolf Hitler -- Jojo must confront his blind nationalism as World War II continues to rage on."
    }
];

dbConnection( async () => {
    await dropIfExists(movieModel);
    await movieModel.create(moviesSeed);
    console.log('Movies seeds generated');
});