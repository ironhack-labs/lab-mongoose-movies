const express = require("express");
const router = express.Router();

router.get("/movies", async(req, res)=>{
  const all = await Movies.find()
  res.render("/Movies/index", {all})
})