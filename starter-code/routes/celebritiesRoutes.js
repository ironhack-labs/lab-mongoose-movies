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

router.get('/:id', async (req, res, next) => {
    try {
        const celebrity = await celebrityModel.findById(req.params.id);
        res.render("celebrities/show", { celebrity });
    } catch (err) {
        console.error(err);
        next();
    }
});


module.exports = router;
