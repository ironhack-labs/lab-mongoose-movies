const Celebrity = require ("../models/Celebrity");

exports.celebritiesList = (req, res) => { Celebrity.find()
  .then(celebrities => res.render("celebrities", {celebrities}))
  .catch(err => console.log(err));
};

exports.celebritiesDetail =(req,res)=>{
  const { id } = req.params;
  Celebrity.findById(id)
  .then(celebridades => res.render("show", celebridades))
  .catch(err => res.render("show", { err: "does not exist" }));
};

exports.newCelebrities = (req,res)=>{
  const config = {title: "Add new celebrity",action: "/new",button: "Add"}
  res.render("new", {config})
};

exports.newCelebrityPost = (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(product => res.redirect(`/celebrities`))
    .catch(err => console.log(err));
};

exports.deletCelebritie = (req, res) => {
  const { id } = req.params;
  Celebrity.findByIdAndDelete(id)
  .then(() => res.redirect("/celebrities"))
  .catch(err =>  console.log(err));
}


