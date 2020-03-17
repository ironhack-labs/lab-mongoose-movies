const mongoose = require("mongoose")
const Movie = require("../models/movies")



const dbtitle = 'movie-lab';
mongoose.connect(`mongodb://localhost/${dbtitle}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

Movie.collection.drop();

const movies = [{
    title: "Army of Darkness",
    genre: "Horror",
    plot: `Bruce Campbell returns as the one-armed Ash, now a supermarket employee ("Shop Smart...Shop S-Mart") who is transported by the powers of a mysterious book back in time with his Oldsmobile '88 to the 14th century medieval era. Armed only with a shotgun, his high school chemistry textbook, and a chainsaw that mounts where his missing appendage once resided, the square-jawed, brutally competent Ash quickly establishes himself as a besieged kingdom's best hope against an "army of darkness" currently plaguing the land. Since the skeleton warriors have been resurrected with the aid of the Necronomicon (the same tome that can send Ash back to his own time) he agrees to face the enemy in battle. Ash also finds romance of a sort along the way with a beautiful damsel in distress, Sheila (Embeth Davidtz), and contends with his own doppelganger after mangling an important incantation.`,
    image: "https://m.media-amazon.com/images/M/MV5BODcyYzM4YTAtNGM5MS00NjU4LTk2Y2ItZjI5NjkzZTk0MmQ1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,671,1000_AL_.jpg",
  },
  {
    title: "Kickboxer",
    genre: "Action",
    plot: `Kurt Sloan is the corner-man for his brother, U.S. kickboxing champion Eric Sloan. When Kurt witnesses his brother become maliciously paralyzed in the ring by Thailand champion Tong Po, Kurt vows revenge. With the help of Xian, a kickboxing trainer who lives in a remote area of Thailand, Kurt trains for the fight of his life.`,
    image: "https://m.media-amazon.com/images/M/MV5BZGYzZDQ2ZWItNjE4ZS00ZTgzLTk3ZjctZjAwZDUyM2I4Nzg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTYxNjkxOQ@@._V1_SY1000_CR0,0,646,1000_AL_.jpg",
  },
  {
    title: "Freaked",
    genre: "Comedy",
    plot: `This rather warped but stylish little black comedy tells the story of Ricky Coogin, an avaricious, spoiled star who becomes the official spokesperson for the enormous Everything Except Shoes corporation without realizing that they are deliberately and irresponsibly marketing Zygrot-27, a deadly chemical fertilizer in Third World countries. To market the toxic green ooze, the actor is sent to Santa Flan, a small Latin American country with his best friend Ernie. The two are pursued by the actor's biggest, most obnoxious fan, Stuey Gluck. There Ricky meets American environmental activist Julie. He keeps his identity from the pretty girl secret for a time and the three of them travel together to Ricky's engagement. The trouble really begins when they stop to see Elijah C. Skuggs' roadside freak show. If they had known that Skuggs creates his "mutants" by dousing regular people with Zygrot-27 they might not have stopped. Unfortunately, they do and Ricky ends up turned into a disgusting creature and placed in a cage with the other "freaks." Things get even crazier after Ricky learns that he is about to be transformed into an evil super-freak and will be forced to kill his new companions on stage.`,
    image: "https://resizing.flixster.com/excadHzgegnvtFnu0rKi2s7Hcno=/fit-in/1152x864/v1.bjs1NTY0MDI7ajsxODM2NjsxMjAwOzcwMDsxMDE0",
  }
]

Movie.create(movies, (err) => {
  if (err) {
    throw (err)
  }
  console.log(`Created ${movies.length} movies of the highest caliber`)
  mongoose.connection.close();
});
