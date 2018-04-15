const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity'); // porque requerimos del modelo? Porque lo vamos a usar para su busqueda en la BD

router.get('/', (req, res, next) => {
	// no se pone /celebrities porque ya está definido en el router
	
    Celebrity.find().then(pepe=>{   // Definido en seeds.js como nuevo objeto
        console.log(pepe);
        res.render('celebrities/index', {pepe});
    })
    .catch(error =>{
        console.log(error);
    
    })

});

router.get('/:id', (req, res, next) =>{
    Celebrity.findById(req.params.id)
    .then(juan=>{
        res.render('celebrities/show', {juan});
    })
    .catch(error =>{
        console.log(error);
    })
})

module.exports = router;
