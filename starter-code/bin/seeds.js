const { withDbConnection, dropIfExists } = require("../withDbConnection");
const celebrity = require("../models/celebrity");

withDbConnection(async () => {
  await dropIfExists(Celebrity);
  await Celebrity.create([
    {
      name: "Steve Jobs",
      occupation: "entrepreneur",
      catchPhrase: "I never did it for money"
    },
    {
      name: "Jeff Bezos",
      occupation: "entrepreneur",
      catchPhrase: "Work hard, have fun, make history"
    },
    {
      name: "Bill gates",
      occupation: "entrepreneur",
      catchPhrase: "To win big, sometimes you need to take big risks."
    }
  ]);
});
