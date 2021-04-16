const session = require('express-session');
const MongoStore = require('connect-mongo');

module.exports = (app) => {
    app.use(
        session({
            secret: process.env.SESS_SECRET,
            resave: true,
            rolling: true,
            saveUninitialized: false,
            name: 'mongoose-animes',
            cookie: {
                sameSite: false,
                httpOnly: true,
                maxAge:60000
            },
            store: MongoStore.create({
                mongoUrl: 'mongodb://localhost/starter-code',
                ttl: 60 * 60 * 24
            })

        })
    )
}