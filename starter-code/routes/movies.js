const express = require('express');
const router  = express.Router();
const CelebrityModel = require("./../models/celebrity")

router.get("/movies", async (request, res, next) => {
    try {
    const celebrities = await CelebrityModel.find();
    res.render("/movies/index", {celebrities});
    } catch (err) {
        next(err)
    }
    });