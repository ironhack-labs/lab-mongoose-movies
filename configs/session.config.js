const session = require("express-session");
const MongoStore = require("connect-mongo");

module.exports = (app) => {
  app.use(
    session({
      secret: "keyboard",
      cookie: {
        httpOnly: true,
        maxAge: 60000,
      },
      store: new MongoStore({
        mongoUrl: process.env.MONGODB_URI,
        ttl: 60 * 60, // 60sec * 60min => 1 hour
      }),
    })
  );
};
