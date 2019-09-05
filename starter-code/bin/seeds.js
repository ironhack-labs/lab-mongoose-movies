const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'library-celebrity-project';
mongoose.connect(`mongodb://localhost/${dbName}`);