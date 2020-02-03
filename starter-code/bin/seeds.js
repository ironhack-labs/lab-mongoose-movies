const { withDbConnection, dropIfExists } = require("../withDbConnection");
// const celebrity = require("../models/celebrity");

// withDbConnection(async () => {
//     await dropIfExists(celebrity);
//     await celebrity.create(
//         [
//     {
//        name: "Ridley Scott",
//        occupation: "Director",
//        catchPhrase: "Most novelists are desperate to do what I do"
//     },
//     {
//         name: "Rutger Hauer",
//         occupation: "Actor",
//         catchPhrase: "I've seen things you people wouldn't believe"
//     },
//     {
//         name: "Robert Downey Jr.",
//         occupation: "Actor",
//         catchPhrase: "I am Iron Man"
//     }
// ]);
// });

const movie = require("../models/movie");

withDbConnection(async () => {
  await dropIfExists(movie);
  await movie.create([
    {
      title: "Blade Runner",
      genre: "Science fiction",
      plot:
        "In 2019 Los Angeles, former policeman Rick Deckard is detained by officer Gaff, and brought to his former supervisor, Bryant. Deckard, whose job as a 'blade runner' was to track down bioengineered humanoids known as replicants and 'retire' (kill) them, is informed that four replicants are on Earth illegally. Deckard starts to leave, but Bryant ambiguously threatens him, and he stays. The two watch a video of a blade runner named Holden administering the Voight-Kampff test, which is designed to distinguish replicants from humans based on their emotional response to questions. The test subject, Leon, shoots Holden on the second question. Bryant wants Deckard to retire Leon and the other three Nexus-6 replicants: Roy Batty, Zhora, and Pris."
    },
    {
      title: "U Turn",
      genre: "Thriller",
      plot:
        "Bobby Cooper is a drifter in debt to a violent gangster when his car breaks down in Superior, Arizona. Stranded and broke, he meets Jake and Grace McKenna, a father and daughter who are also a married couple. They separately approach Bobby to kill the other for money."
    },
    {
      title: "Iron Man",
      genre: "Science fiction",
      plot:
        "Tony Stark, who has inherited the defense contractor Stark Industries from his father Howard Stark, is in war-torn Afghanistan with his friend and military liaison, Lieutenant Colonel James Rhodes, to demonstrate the new 'Jericho' missile. After the demonstration, the convoy is ambushed and Stark is critically wounded by a missile used by the attackers: one of his company's own. He is captured and imprisoned in a cave by a terrorist group called the Ten Rings. Yinsen, a fellow captive doctor, implants an electromagnet into Stark's chest to keep the shrapnel shards that wounded him from reaching his heart and killing him. Ten Rings leader Raza offers Stark freedom in exchange for building a Jericho missile for the group, but he and Yinsen know that Raza will not keep his word."
    }
  ]);
});
