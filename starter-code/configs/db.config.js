const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost/celebs-movies";


exports.connectDB = () =>
    mongoose
    .connect(mongoURI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((x) => {
        console.log(
            `Conected to Mongo! Database name: "${x.connection[0].name}"`
        );
    })
    .catch((err) => {
        console.error("Error connecting to mongo", err);
    });


// DB connection with Async... await , on seeds asynConnect
exports.asynConnectDB = async () => {
    try {
        const db = await mongoose.connect(mongoURI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(
            `Connected to Mongo! Database name: "${db.connections[0].name}"`
        );
    } catch (error) {
        console.error(`Error connecting to mongo: ${error}`);
    }
};