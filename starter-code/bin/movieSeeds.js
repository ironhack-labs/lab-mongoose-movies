require("dotenv").config();

const mongoose = require("mongoose");
const Celebrity = require("../models/Movie");

const movies = [
  {
    title : "John Wick: Chapter3-Parabellum",
    genre: "Accion",
    plot: `en minutes after the conclusion of the previous film, former hitman John Wick is now a marked man and on the run in Manhattan, with his dog. After the unsanctioned killing of crime lord and new member of the High Table Santino D'Antonio in the New York City Continental, John is declared "excommunicado" by his handlers at the High Table and a $14 million bounty is placed on his head that rises each hour. On the run from numerous assassins, John reaches the New York Public Library and recovers a crucifix necklace and a "marker" medallion from a secret cache in a book. He fights his way through numerous assassins until he reaches the Director, a woman from his past who used to raise him. She calls him by his real name: Jardani Jovanovich. She accepts the crucifix as a "ticket" for safe passage to Casablanca, Morocco, and has Wick branded to signify that he has used up his ticket.`
  },
  {
    title : "Once Upon a Time in...Hollywood",
    genre: "Rock and roll",
    plot: `In February 1969, Hollywood actor Rick Dalton, star of 1950s Western television series Bounty Law, fears his career is over. Casting agent Marvin Schwarzs advises him to make Spaghetti Westerns, which Dalton feels are beneath him. Dalton's friend and stunt double, Cliff Booth – a war veteran who lives in a trailer with his pit bull, Brandy – drives Dalton around because Dalton's alcoholism has resulted in multiple DUIs. Booth struggles to find work due to rumors that he murdered his wife. Actress Sharon Tate and her husband, director Roman Polanski, have moved next door to Dalton, who dreams of befriending them to restore his status. That night, Tate and Polanski attend a celebrity-filled party at the Playboy Mansion.`
  },
  {
    title : "Hotel Transilvania",
    genre: "Animation",
    plot: `In 1895 in the aftermath of the death of his wife Martha (Jackie Sandler) at the hands of an angry human mob, Count Dracula (Adam Sandler) commissions and builds a massive five-star, monsters-only hotel in Transylvania, in which he raises his daughter Mavis (Selena Gomez) and to serve as a safe-place getaway for the world's monsters from fear of human persecution. Famous monsters such as Frank (Kevin James) and his wife Eunice (Fran Drescher), Wayne and Wanda Werewolf (Steve Buscemi and Molly Shannon) and their massive immediate family, Griffin The Invisible Man (David Spade), and Murray the Mummy (CeeLo Green) often come to stay at the hotel.`
  },

  
];

mongoose
  .connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(async () => {
    const moviesArr = await Celebrity.create(movies);
    console.log(`${moviesArr.length} created successfully`);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));