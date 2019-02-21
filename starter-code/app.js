const express      = require('express');
const mongoose     = require('mongoose');
const path         = require('path');
const Schema       = mongoose.Schema;
const app          = express();


mongoose
  .connect('mongodb://localhost/Movies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });     

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));


const MyMovieModel = mongoose.model('movies',
    new Schema({
    title: String,
    rating: Number
  })
);

MyMovieModel.create({
  title: 'Nog een film',
  rating: 3
}, (err) => {console.log(err)})

app.get('/', (req, res) =>{ 
MyMovieModel.find({},  (err, movies) => {
    if(err) res.send(err)
    else {
      console.log(movies)
      res.render('index', {movies})
    } 
  })})

  app.get('/search', (req, res) => {
    const userInput = req.query;

    var newMovie = new MyMovieModel({
      title: userInput.title
    })

    newMovie.save((err) => {
      console.log(err);
    })

    res.send('movie saved');

  })

  app.get('/delete/:id', (req,res) => {
    // const userInput = req.query;

    MyMovieModel.findByIdAndDelete(req.params.id, (err) => {
      if(err) {
        console.log(err)
      } else {
        res.send('Deleted')
      }
    })
  })

app.listen(3000, ()=> console.log("ja? movies graag!"))




