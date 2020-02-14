#!/usr/bin/env node

require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app');

const databaseURI = 'mongodb://localhost/starter-code';

mongoose
  .connect(databaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Mongoose connection established.');
    const server = app.listen(process.env.PORT, () => {
      console.log(`Listening on http://localhost:${process.env.PORT}`);
    });
    server.on('error', error => {
      if (error.syscall !== 'listen') throw error;
      switch (error.code) {
        case 'EADDRINUSE':
          console.error(`Port ${process.env.PORT} is already in use`);
          process.exit(1);
          break;
        default:
          throw error;
      }
    });
  })
  .catch(error => {
    console.error('Error connecting to mongo', error);
  });
