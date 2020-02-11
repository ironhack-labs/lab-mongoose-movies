var express = require("express");
var celebsRouter = express.Router();

const Celebrity = require("./../models/Celebrity");



celebsRouter.post("/:celebsId/delete", (req, res) => {
    
    Celebrity.findByIdAndRemove(req.params.celebsId)
      .then(() => res.redirect("/celebrities"))
      .catch(err => console.log(err));
  });

// GET
celebsRouter.get("/", (req, res) => {
    
    Celebrity.find()
    .then((celebrities) => {
        const data = {
            celebritiesObj: {...celebrities} };
            
            
            res.render("celebrities/index", data);
        })
        .catch(err => console.log(err));
    });
    
    celebsRouter.get("/new", (req, res) => {
          res.render("celebrities/new");
    });
    
    celebsRouter.post("/new", (req, res) => {
      const { name, occupation, catchPhrase } = req.body;
    
      Celebrity.create({ name, occupation, catchPhrase })
        .then( () => {
          res.redirect("/celebrities");
        })
        .catch( (err) => {
            res.render("celebrities/new");
        });
    });
    
  celebsRouter.get("/:celebsId", (req, res) => {
    
    Celebrity.findById(req.params.celebsId)
      .then((celebrity) => {
        const data = {
            celebritiesObj: celebrity
        };
  
        res.render("celebrities/show", data);
      })
      .catch(err => console.log(err));
  });


  module.exports = celebsRouter;