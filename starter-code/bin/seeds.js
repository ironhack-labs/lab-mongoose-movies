require('../config/db.config')

const mongoose = require('mongoose');
const Celeb = require('../models/celeb.model');
const celebs = require('../data/celebs.json')

Celeb.create(celebs)
  .then ((celebs) => console.info(celebs))
  .catch(error => console.error(error))

  
