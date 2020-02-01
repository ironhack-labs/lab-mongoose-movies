/*jshint esversion: 6 */

const withDbConnection = require("./../withDbConnection");
const Celebrity = require("./../models/Celebrity");

const celebs = [
  {
    name: "Britney Spears",
    ocupation: "Singer",
    catchPhrase:
      "The cool thing about being famous is traveling. I have always wanted to travel across seas, like to Canada and stuff."
  },
  {
    name: "Justin Bieber",
    ocupation: "Singer",
    catchPhrase:
      "Anne [Frank] was a great girl. Hopefully she would have been a Belieber."
  },
  {
    name: "Kanye West",
    ocupation: "Singer",
    catchPhrase:
      "I won't go into a big spiel about reencarnation, but the first time I was in the Gucci Store in Chicago was the closest I've ever felt to home."
  }
];
withDbConnection(async () => {
  /* Esto funciona porque ya hay docs en la bbdd pero la primera vez daba error*/
  await Celebrity.collection.drop();
  const result = await Celebrity.create(celebs);
  console.log(result);
});
