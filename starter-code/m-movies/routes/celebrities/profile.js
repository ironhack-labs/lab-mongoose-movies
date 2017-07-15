//As always, require EXPRESS!
const express = require('express');
//Now require the MODEL to be able to send and receive database data via our routes 
const Celebrity = require('../../models/celebrity');
//Finally, iniate and require EXPRESS' Router to make things happen!
const router  = express.Router();

//?id= USE REQ.QUERY ON the ID to get the relevant celebrity
router.get("/:id", (req, res, next) => { 
    const celebId = req.params.id;
        Celebrity.findById(celebId, (err, celeb) => {
    if(err){
        return next(err);
    }
    res.render("celebrities/profile", {celeb});
    })
});
//Always export the module VARIABLE from each route. In this case it's the router!
module.exports = router;