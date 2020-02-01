const express = require("express");
const router = express.Router();
const celebrityModel = require('../model/celebrity');

router.get('/', async (req, res, next) => {
    try {
        const celebrities = await celebrityModel.find();
        res.render("celebrities/index", { celebrities });
    } catch (err) {
        console.error(err);
        next();
    }
});

module.exports = router;
