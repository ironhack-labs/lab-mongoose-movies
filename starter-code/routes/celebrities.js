const express = require('express');
const celebrityRouter  = express.Router();

celebrityRouter.get("/", (req, res) => {    
    Celebrity.find()                          
    .then(allCelebrities => {
        const data = {celebrities: allCelebrities}
        res.render("celebrities", data);
        console.log(data)         
    })                                  
    .catch(err => console.log(err))    
});       


module.exports = celebrityRouter;
