const express = require('express');
const router = express.Router();

router.get("/axi", (req, res, next) =>{
  res.render("axi/index")
  // console.log("its working")
})


module.exports = router
