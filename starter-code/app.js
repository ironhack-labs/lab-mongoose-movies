const PORT = 3000;
const express = require('express');
const path = require('path');

//const bodyParser = require('body-parser');

require('./configs/db.config');
require('./configs/hbs.config');

const celebritiesRouter = require('./routes/celebrities.routes');
const moviesRouter = require('./routes/movies.routes');
const app = express();



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

app.use('/movies', moviesRouter);
app.use('/celebrities', celebritiesRouter);

app.use('/', (req, res, next) => {
    res.render('menu')
});


app.listen(PORT,() => {
    console.info(`Connected to ${PORT} port`);
});

module.exports = app;