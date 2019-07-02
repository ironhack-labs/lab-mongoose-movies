const express = require('express');
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose.connect('mongodb://localhost/lab-mongose-movies', {useNewUrlParser: true})
.then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch(err => {
  console.error('Error connecting to mongo', err)
});

module.exports = findCelebrities = (app)=>{

  //still need to add method for query
app.get('/celebrities', (req, res)=>{
  Celebrity.find({}).then(celebrities =>{
    res.render('./celebrities/index', {celebrities});
  }).catch(err=>console.log(err));
  });
}

module.exports = findCelebrityById = (app)=>{
app.get('/celebrities/:id', (req, res, next)=>{
  Celebrity.findById(req.params.id).then(celebrity =>{
    res.render('./celebrities/show', {celebrity});
  }).catch(err=>console.log(err))
});
}

module.exports = newCelebrityForm = (app)=>{
  app.get('/celebrities/new', (req, res, next)=>{
    res.render('./celebrities/new').catch(err=>console.log(err));
  });
}

module.exports = addNewCelebrity = (app)=>{
  app.post('/celebrities', (req, res, next)=>{
    Celebrity.create({name, occupation, catchPhrase} = req.body).then(data =>{
      console.log('New Celebrity: '+data);
      res.redirect("/celebrities");
    }).catch(err=>{
      console.log(err);
      res.redirect("/celebrities/new");
    });
  })
}

module.exports = deleteCelebrity = (app)=>{
  app.post('/celebrities/:id/delete', (req, res, next)=>{
    Celebrity.findByIdAndRemove(req.params.id).then(data=>{
      console.log(data);
      res.redirect('/celebrities');
    }).catch(err=>{
      console.log(err);
      res.redirect('/celebrities');
    })
  })
}

module.exports = updateCelbrityForm = (app)=>{
  app.get('/celebrities/:id/edit', (req, res, next)=>{
      Celebrity.findById(req.params.id).then(data=>{
        res.render('./celebrities/edit', {data});
      })
  });
}

module.exports = updateCelebrity = (app)=>{
  app.post('/celebrities/:id', (req,res,next)=>{
    Celebrity.findByIdAndUpdate(req.params.id,{name, occupation, catchPhrase}=req.body).then(data =>{
      res.redirect('/celebrities')
      console.log('Succes' + data);;
    }).catch(err=>console.log(err));
  });
}

