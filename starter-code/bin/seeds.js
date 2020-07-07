require("dotenv").config();
require("./../app")

const movieSchema = require("./../models/movie");
const movieModel = require("./../models/movie");

const movies = [
  {
    title: "A Wrinkle in Time",
    genre: "Comedy DuVernay",
    plot:
      "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
  },
  {
    title: "The Strangers: Prey at Night",
    genre: "Drama",
    plot:
      "A family's road trip takes a dangerous turn when they arrive at a secluded mobile home park to stay with some relatives and find it mysteriously deserted. Under the cover of darkness, three masked psychopaths pay them a visit to test the family's every limit as they struggle to survive.",
  },
  {
    title: "The Hurricane Heist",
    genre: "Horror",
    plot:
      "Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities.",
  },
  {
    title: "Gringo",
    genre: "Comedy",
    plot:
      "GRINGO, a dark comedy mixed with white-knuckle action and dramatic intrigue, explores the battle of survival for businessman Harold Soyinka (David Oyelowo) when he finds himself crossing the line from law-abiding citizen to wanted criminal.",
  },
  {
    title: "Thoroughbreds",
    genre: "Drama",
    plot:
      "Two upper-class teenage girls in suburban Connecticut rekindle their unlikely friendship after years of growing apart. Together, they hatch a plan to solve both of their problems-no matter what the cost.",
  },
];

movieModel
  .create(movies)
  .then((dbRes) => {
    console.log(dbRes);
  })
  .catch((dbErr) => {
    console.log(dbErr);
  });
