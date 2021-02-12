const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const mongoose = require('mongoose')

//creacion de cookie

module.exports = app => {
  app.use(
    session({
      secret:process.env.SESS_SECRET,
      resave:true,
      saveUninitialized:false,
      cookie:{
        sameSite:'none',
        httpOnly:true,
        maxAge:60000
      },
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 60*60*24
      })
    })
  )
}