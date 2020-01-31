require("dotenv").config();
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");
const mongoose = require("mongoose");
const dbUrl = process.env.DBURL;

mongoose.connect(dbUrl);

const celebrities = [
  {
    name: "Rick Gervais",
    occupation: "Comedian",
    catchPhrase: "You can laugh at anything. It depends on the joke",
    picPath: "/uploads/ricky.jpg"
  },
  {
    name: "Woody Allen",
    occupation: "Filmmaker",
    catchPhrase: "I'm such a good lover because I practice a lot on my own",
    picPath: "/uploads/woody.jpg"
  },
  {
    name: "Fiodor Dostoyevski",
    occupation: "Author",
    catchPhrase:
      "Pain and suffering are always inevitable for a large intelligence and a deep heart",
    picPath: "/uploads/fiodor.jpg"
  },
  {
    name: "Thomas Mann",
    occupation: "Author",
    catchPhrase: "It is love, not reason, that is stronger than death",
    picPath: "/uploads/mann.jpg"
  },
  {
    name: "Friedrich Nietzsche",
    occupation: "Philosopher",
    catchPhrase:
      "You must have chaos within you to give birth to a dancing star",
    picPath: "/uploads/nietzsche.jpg"
  }
];

const movies = [
  {
    title: "Seven Samurai",
    genre: "Epic",
    plot:
      "The story follows the story of a village of farmers that hire seven rōnin (masterless samurai) to combat bandits who will return after the harvest to steal their crops",
    picPath: "/uploads/seven.jpg"
  },
  {
    title: "Citizen Kane",
    genre: "Drama",
    plot:
      "The quasi-biographical film examines the life and legacy of Charles Foster Kane, played by Welles, a character based in part upon the American newspaper magnates William Randolph Hearst",
    picPath: "/uploads/citizen.jpg"
  },
  {
    title: "The Apartment",
    genre: "Comedy",
    plot:
      "The story follows C. C. Bud Baxter (Lemmon), an insurance clerk who, in the hope of climbing the corporate ladder, lets more-senior coworkers use his Upper West Side apartment to conduct extramarital affairs",
    picPath: "/uploads/apartment.jpg"
  },
  {
    title: "Solaris",
    genre: "Sci-fy",
    plot:
      "Andrei Tarkovsky masterpiece is a Soviet science fiction art film based on Stanisław Lem's novel of the same name published in 1961",
    picPath: "/uploads/solaris.jpg"
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    genre: "Drama",
    plot:
      "The film uses elements of the psychological thriller and a nonlinear narrative to explore the nature of memory and romantic love",
    picPath: "/uploads/eternal.jpg"
  }
];

async function seedDb() {
  try {
    await dropIfExists(Celebrity);
    let celeb = await Celebrity.create(celebrities);
    await dropIfExists(Movie);
    let movie = await Movie.create(movies);
    console.log(`SUCCESS Adding celebs and movies to DB! ${celeb} ${movie}`);
  } catch (error) {
    console.log(`ERROR ${error}`);
  }
  mongoose.connection.close();
}

const dropIfExists = async Model => {
  try {
    await Model.collection.drop();
  } catch (e) {
    console.log(
      `Cannot drop collection ${Model.collection.name}, because does not exist in DB ${e}`
    );
  }
};

seedDb();
