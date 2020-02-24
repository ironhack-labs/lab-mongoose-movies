const router = require("router")

router.get("/movies", async(req, res)=>{
  const all = await Movies.find()
  res.render("/Movies/index", {all})
})