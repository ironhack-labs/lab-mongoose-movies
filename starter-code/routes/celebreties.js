const router = require("../routes/index.js")
const model = require("../models/celebrity.js")


//MAIN
router.get("/celebrities",(req,res,next) => {
  model.find().then((e)=>
  {
    res.render("./celebrities/index.hbs",{e})
  }
    ).catch((e)=> console.log(e))
});

//ADD FORM
router.get("/celebrities/new",(req,res,next) => {
  res.render("./celebrities/new.hbs")
});

//SHOW ALL
router.get("/celebrities/:id",(req,res,next) => {
  let {id} = req.params
  console.log("estou no param"+id)
  if(id.includes("new")===false) {
    model.findById(id).then( (e) =>
    {
      res.render("./celebrities/show.hbs",e)
    }
      ).catch( (e) => console.log(e) )
    };
  if( id.includes("new") === true ) {
    res.redirect("/celebrities/new")
  }
})

//UPDATE FORM GET
router.get("/celebrities/:id/edit", (req, res, next) => {
  let {id} = req.params
  model.findById(id).then( (e) => {
    res.render("./celebrities/edit.hbs",e)
  }).catch( (e) => {throw new Error(e)} )
})

//DELETE ONE
router.post("/celebrities/:id/delete", (req, res, next) => {
  let {id} = req.params
  model.findByIdAndRemove(id).then(() => {
    console.log("erase sucefull"+id)
    res.redirect("/celebrities/")
  }  ).catch( (e) => { throw new Error(e) })
})

//ADD
router.post("/celebrities", (req, res, next) => {
  // let {name, occupation, catchPhrase} = req.body;
  model.create(req.body).then(() => {
    res.render("index.hbs")
    model.find({name:req.body.name}).then( (e) => console.log(e)).catch( (e) => { throw new Error(e) })
  })
})

//UPDATE
router.post("/celebrities/:id", (req, res, next) => {
  let {id} = req.params
  model.findByIdAndUpdate(id,req.body).then((e) => {
    console.log("UPDATE SUCEFULL"+'\n'+e)
    res.redirect("/celebrities/")
  }).catch((e) => { throw new Error(e) })
})