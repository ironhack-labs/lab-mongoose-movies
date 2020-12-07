const express = require('express');
const router  = express.Router();

const{getCelebrities,
  getOneCelebrity,
  renderNewForm,
  createCelebrity,
  deleteCelebrity,
  renderUpdateCelebrity,
  updateCelebrity}=require("../controllers/celebrities.controllers")

router
.get("/",getCelebrities)
.post("/new",createCelebrity)
.get("/new",renderNewForm)
.get("/:celebritiesId",getOneCelebrity)
.post("/:celebrityId/delete",deleteCelebrity)
.get("/:celebrityId/edit",renderUpdateCelebrity)
.post("/:celebrityId",updateCelebrity)



module.exports = router;
