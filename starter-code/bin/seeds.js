const withDbConnection = require("../withDbConnection");
const Celebrity = require("../models/celebrity");

withDbConnection(async () => {
  await Celebrity.collection.drop();
  await Celebrity.create([{
      name: "Tom Cruise",
      occupation: "Actor",
      catchPhrase: "When you have to cope with a lot of problems, you’re either going to sink or you’re going to swim."
    },
    {
      name: "Robin Willians",
      occupation: "Actor",
      catchPhrase: "When I went home from Juilliard, I couldn't find acting work."
    },
    {
      name: "George Clooney",
      occupation: "Actor",
      catchPhrase: "The only failure is not try"
    },
    {
      name: "Jim Carrey",
      occupation: "Actor",
      catchPhrase: "Your need for acceptance can make you invisible in this world. Don't let anything stand in the way of the light that shines through this form. Risk being seen in all of your glory."
    },
    {
      name: "Charlie Chaplin",
      occupation: "Actor",
      catchPhrase: "Movies are a fad. Audiences really want to see live actors on a stage."
    }
  ]);
});