const express = require("express")
const router = express.Router()

router.get('/celebrities/index', async (req, res, next) => {
    const celebrities = await celebrities.find()
console.log('adfasdfas')
   /* if(celebrities==='')
        res.render("",{error: "missing fields"}  ) 
    }*/
    res.render('/celebrities/index', {celebrities});
  });

  
module.exports = router