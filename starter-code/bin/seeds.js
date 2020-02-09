const mongoose = require("mongoose");

function dbConnect(cb) {
    mongoose
        .connect("mongodb://localhost/mongoose-movies", { useNewUrlParser: true, useUnifiedTopology: true })
        .then(x => {
            console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
            cb();
        })
        .catch(err => {
            console.error("Error connecting to mongo", err);
        });
}


dbConnect(() => {
    const Celebrities = require("../models/Celebrity");
    const Movies = require("../models/Movie");

    celebritiesList = [
        {
            name: 'Tom Cruise',
            occupation: 'Actor',
            catchPhrase: '"In this life, it´s not what you hope for, it´s not what you deserve - it´s what you take!"'
        },
        {
            name: 'Beyonce',
            occupation: 'Singer',
            catchPhrase: '"If everything was perfect, you would never learn and you would never grow."'
        },
        {
            name: 'Daffy Duck',
            occupation: 'Comedian',
            catchPhrase: '"Of course you realize, this means war."'
        }
    ]

    moviesList = [
        {
            title: 'Titanic',
            genre: 'Drama',
            plot: 'In 1996, treasure hunter Brock Lovett (Bill Paxton) and his team aboard the research vessel Keldysh search the wreck of RMS Titanic for a necklace with a rare diamond, the Heart of the Ocean. They recover a safe containing a drawing of a young woman wearing only the necklace. It is dated April 14, 1912, the day the ship struck the iceberg. Rose Dawson Calvert (Gloria Stuart), claiming to be the person in the drawing, visits Lovett and tells of her experiences aboard the ship. In 1912 Southampton, 17-year-old first-class passenger Rose DeWitt Bukater (Kate Winslet), her fiancé Cal Hockley (Billy Zane), and her mother Ruth (Frances Fisher) board the Titanic. Also boarding the ship at Southampton are Jack Dawson (Leonardo DiCaprio), a down-on-his-luck sketch artist, and his Italian friend Fabrizio (Danny Nucci). Young Rose, angry and distraught that her mother has apparently arranged the marriage, considers committing suicide by jumping from the stern; Jack manages to pull her back over the rail after she loses her footing & nearly falls into the propellers.'
        },
        {
            title: 'Algo pasa con Mary',
            genre: 'Comedy',
            plot: 'In 1985, awkward and shy 16-year-old high-schooler Ted Stroehmann (Ben Stiller) lands a prom date with his dream girl Mary Jensen (Cameron Diaz), only to have it cut short by a painful and embarrassing zipper accident. After the ordeal garners the attention of numerous members of the household and community, Ted is finally carted off to the hospital. He subsequently loses touch with Mary.'
        },
        {
            title: 'It: Capítulo 2',
            genre: 'Drama',
            plot: 'This sequel to the 2017 film opens in 1989. Shortly after defeating the evil entity known as Pennywise (Bill Skarsgard), the Losers Club - Bill Denbrough (Jaeden Martell), Ben Hanscom (Jeremy Ray Taylor), Beverly Marsh (Sophia Lillis), Richie Tozier (Finn Wolfhard), Eddie Kaspbrak (Jack Dylan Grazer), Stanley Uris (Wyatt Olef), and Mike Hanlon (Chosen Jacobs) - gather as Bev tells the boys about the vision she saw of all of them as adults when she faced Pennywise. The Losers make a blood pact to return to Derry in the event that they must face IT once more.'
        }
    ]

    Celebrities.deleteMany()
        .then(() => {
            return Celebrities.create(celebritiesList)
        })
        .then(() => {
            return Movies.deleteMany()
        })
        .then(() => {
            return Movies.create(moviesList)
        })
        .then(() => {
            console.log("succesfully added all the data");
            mongoose.connection.close();
            process.exit(0);
        });
});