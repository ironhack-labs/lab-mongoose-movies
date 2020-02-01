const { withDbConnection, dropIfExists } = require("../withDbConnection");
const celebrity = require("../models/celebrity");

withDbConnection(async () => {
    await dropIfExists(celebrity);
    await celebrity.create(
        [
    {
       name: "Ridley Scott",
       occupation: "Director",
       catchPhrase: "Most novelists are desperate to do what I do"
    },
    {
        name: "Rutger Hauer",
        occupation: "Actor",
        catchPhrase: "I've seen things you people wouldn't believe"
    },
    {
        name: "Robert Downey Jr.",
        occupation: "Actor",
        catchPhrase: "I am Iron Man"
    }
]);
});