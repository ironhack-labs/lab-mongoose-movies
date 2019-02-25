const express      = require('express');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
const path         = require('path');
const Schema       = mongoose.Schema;
const app          = express();
const Celebrity    = require('./models/celebrity');

app.use(bodyParser.urlencoded({ extended: false }))

mongoose
  .connect('mongodb://localhost/Movies', {useNewUrlParser: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));     

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', require('./routes/new'));
app.use('/', require('./routes/index'));

app.use('/celebrities', require('./routes/celebrities/all-celebrities'));
app.use('/celebrities', require('./routes/celebrities/delete'));
app.use('/', require('./routes/show'));
app.use('/', require('./routes/edit'));
app.use('/', require('./routes/delete'));
app.use('/', require('./routes/celebrities/edit'));
app.use('/', require('./routes/celebrities/new'));
app.use('/', require('./routes/celebrities/show'));

app.listen(3000, ()=> console.log("ja? movies graag!"))




