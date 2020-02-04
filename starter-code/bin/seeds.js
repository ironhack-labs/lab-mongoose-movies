// const {
//   withDbConnection,
//   dropIfExists
// } = require("../withDbConnection");
// const Celebrity = require("../models/celebrity");

// withDbConnection(async () => {
//   await dropIfExists(Celebrity);
//   await Celebrity.create([{
//       name: "Tom Cruise",
//       occupation: "Actor",
//       catchPhrase: "When you have to cope with a lot of problems, you’re either going to sink or you’re going to swim."
//     },
//     {
//       name: "Robin Willians",
//       occupation: "Actor",
//       catchPhrase: "When I went home from Juilliard, I couldn't find acting work."
//     },
//     {
//       name: "George Clooney",
//       occupation: "Actor",
//       catchPhrase: "The only failure is not try"
//     },
//   ]);
// });

const {
  withDbConnection,
  dropIfExists
} = require("../withDbConnection");
const Movies = require("../models/movies");

withDbConnection(async () => {
  await dropIfExists(Movies);
  await Movies.create([{
      title: "Ferris Buller´s day off",
      genre: "Comedy",
      plot: "Teenaged Ferris Bueller Matthew Broderick is a legend in his own time thanks to his uncanny skill at cutting classes and getting away with it. Intending to make one last grand duck-out before graduation, Ferris calls in sick, borrows a Ferrari, and embarks on a one-day bacchanal through the streets of Chicago. Dogging Ferris trail at every turn is high-school principal Rooney Jeffrey Jones, determined to catch Bueller in the act of class-cutting. "
    },
    {
      title: "TWELVE MONKEYS (12 MONKEYS)",
      genre: "Drama, Science Fiction & Fantasy",
      plot: "An intense film about time travel, this sci-fi entry was directed by Terry Gilliam, a member of the comedy troupe Monty Python. The film stars Bruce Willis as James Cole, a prisoner of the state in the year 2035 who can earn parole if he agrees to travel back in time and thwart a devastating plague. The virus has wiped out most of the Earth's population and the remainder live underground because the air is poisonous. Returning to the year 1990, six years before the start of the plague, Cole is soon imprisoned in a psychiatric facility because his warnings sound like mad ravings. There he meets a scientist named Dr. Kathryn Railly (Madeleine Stowe) and Jeffrey Goines (Brad Pitt), the mad son of an eminent virologist (Christopher Plummer). Cole is returned by the authorities to the year 2035, and finally ends up at his intended destination in 1996. He kidnaps Dr. Railly in order to enlist her help in his quest. Cole discovers graffiti by an apparent animal rights group called the Army of the Twelve Monkeys, but as he delves into the mystery, he hears voices, loses his bearings, and doubts his own sanity. He must figure out if Goines, who seems to be a raving lunatic, holds the key to the puzzle. ~ Michael Betzold, Rovi"
    },
    {
      title: "CIDADE DE DEUS (CITY OF GOD)",
      genre: "Action & Adventure, Art House & International, Drama",
      plot: "Fernando Meirelles' City of God is a sweeping tale of how crime affects the poor population of Rio de Janeiro. Though the narrative skips around in time, the main focus is on Cabeleira who formed a gang called the Tender Trio. He and his best friend, Bené (Phelipe Haagensen), become crime lords over the course of a decade. When Bené is killed before he can retire, Lil' Zé attempts to take out his arch enemy, Sandro Cenoura (Matheus Nachtergaele). But Sandro and a young gangster named Mane form an alliance and begin a gang war with Lil' Zé. Amateur photographer Buscape (Alexandre Rodrigues) takes pictures of the brutal crime war, making their story famous. City of God was screened at the 2002 Cannes Film Festival."
    },
  ]);
});