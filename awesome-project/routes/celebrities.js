const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity'); // porque requerimos del modelo??

router.get('/', (req, res, next) => {
	// no se pone /celebrities porque ya está definido en el router
	
    Celebrity.find().then(celebrity=>{   // Definido en seeds.js como nuevo objeto
        console.log(celebrity);
        res.render('celebrities/index', {celebrity});
    })
    .catch(error =>{
        console.log(error);
    
    })

});

module.exports = router;
