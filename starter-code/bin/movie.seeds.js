const { withDbConnection, dropIfExists } = require("../withDBConnection");
const Movie = require("../models/movie");

withDbConnection(async () => {
  await dropIfExists(Movie);
  await Movie.create([
    {
      title: "Parasite",
      genre: "Comedy",
      plot: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
    },
    {
      title: "The Irishman",
      genre: "Drama",
      plot: "In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa -- a powerful Teamster tied to organized crime."
    },
    {
      title: "Once Upon A Time In Hollywood",
      genre: "Comedy",
      plot: "Actor Rick Dalton gained fame and fortune by starring in a 1950s television Western, but is now struggling to find meaningful work in a Hollywood that he doesn't recognize anymore. He spends most of his time drinking and palling around with Cliff Booth, his easygoing best friend and longtime stunt double. Rick also happens to live next door to Roman Polanski and Sharon Tate -- the filmmaker and budding actress whose futures will forever be altered by members of the Manson Family."
    },
    {
      title: "Marriage Stories",
      genre: "Romance",
      plot: "A stage director and his actor wife struggle through a gruelling, coast-to-coast divorce that pushes them to their personal and creative extremes."
    },
    {
      title: "Joker",
      genre: "Drama",
      plot: "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker."
    },
    {
      title: "1917",
      genre: "Action",
      plot: "DescriptionDuring World War I, two British soldiers -- Lance Cpl. Schofield and Lance Cpl. Blake -- receive seemingly impossible orders. In a race against time, they must cross over into enemy territory to deliver a message that could potentially save 1,600 of their fellow comrades -- including Blake's own brother"
    },
    {
      title: "Jojo Rabbit",
      genre: "Comedy",
      plot: "Jojo is a lonely German boy who discovers that his single mother is hiding a Jewish girl in their attic. Aided only by his imaginary friend -- Adolf Hitler -- Jojo must confront his blind nationalism as World War II continues to rage on."
    }
  ]);
});
