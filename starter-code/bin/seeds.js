const {
  withDbConnection,
  dropIfExists
} = require("../withDbConnection");
const Celebrity = require("../models/celebrity");

withDbConnection(async () => {
  await dropIfExists(Celebrity);
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
  ]);
});