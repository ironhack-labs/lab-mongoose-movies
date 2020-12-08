require("dotenv").config();
require("./../configs/db.config")
const mongoose = require("mongoose");
const CelebrityModel = require("./../models/Celebrity");
const MovieModel = require("../models/Movie");

const celebrities = [
        { name: "Charlie Sheen", occupation: "actor", catchPhrase: "Winning" },
        { name: " Ariana Grande", occupation: "singer", catchPhrase: "Say It With Emojis" },
        { name: "Oprah Winfrey", occupation: "producer", catchPhrase: "Aha moment!" },
];

const movies = [
        { title: "A Wrinkle in Time", genre: "Acience fantasy adventure", plot: "After the disappearance of her scientist father, three peculiar beings send Meg, her brother, and her friend to space in order to find him." },
        { title: "The Strangers: Prey at Night", genre: "Psychological horror", plot: "Ten years after the events of the first film, in a secluded trailer park in Kalida, Ohio,..." },
        { title: "Avengers: Endgame", genre: "superhero", plot: "Twenty-three days after Thanos used the Infinity Gauntlet to kill half of all life in the universe...." },
];
async function insertTestCelebrities() {
        try {
                //movies list

                await MovieModel.deleteMany();
                await MovieModel.insertMany(movies);

                //celebrities list

                 // await CelebrityModel.deleteMany();
                // await CelebrityModel.insertMany(celebrities);
                mongoose.disconnect();
        } catch (err) {
                console.log(err)
        }
}

insertTestCelebrities();