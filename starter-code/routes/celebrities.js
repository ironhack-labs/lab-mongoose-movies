const express = require('express');
const { post } = require('.');
const router  = express.Router();
const {getCelebrities,showCelebrityUpdate, updateCelebrity, deleteCelebrity, getDetails,showCelebrityForm, createCelebrity} = require("../controllers/celebreties.controller")

router
  .get("/", getCelebrities)
  .get("/new", showCelebrityForm)
  .post("/new", createCelebrity)
  .get("/:celebretyId", getDetails)
  .post('/:celebretyId/delete', deleteCelebrity)
  .get('/:celebretyId/edit', showCelebrityUpdate)
  .post('/:celebretyId', updateCelebrity)
  // 

module.exports = router;