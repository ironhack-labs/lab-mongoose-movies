const router = require("router")

router.get("/celebrities", async (req, res) =>{
 const all = await Celebrities.find()
  res.render('celebrities/index', {all})
})