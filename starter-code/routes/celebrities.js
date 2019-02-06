const express = require('express');
const router = express.Router();
const Celebs = require('../models/celebrity');

// vamos a buscar todas las celebrities de nuestra base de datos
// la ruta será LOCALHOST:3000/celebrities, es decir /celebrities
// y ahí renderizaremos nuestra hoja celebrities/index.hbs con los resultados
// que encontremos. Nuestro argumento allCelebrities lo retornaremos a la página
// celebrities/index.hbs con los distintos campos que nos interese mostar
router.get('/celebrities', (req, res, next) => {
	Celebs.find()
		.then((allCelebrities) => {
			res.render('celebrities/index', { allCelebrities });
		})
		.catch((error) => {
			console.log(error);
			next();
		});
});

router.get('/celebrities/:id', (req, res, next) => {
	Celebs.findById(req.params.id)
		.then((oneCeleb) => {
			res.render('celebrities/show', { oneCeleb });
		})
		.catch((err) => {
			console.log(err);
			next();
		});
});

//en la ruta LOCALHOST:3000/celebrities/new vamos a poner nuestro formulario para
//meter nuevas celebrities en la base de datos
router.get('/celebrities/new', (req, res, next) => {
	res.render('celebrities/new');
});

//en la ruta LOCALHOST:3000/celebrities/ cuando hagamos click se recogen los datos
//del formulario con un POST. Los guardamos en addCeleb siguiendo el modelo de nuestro esquema
//Después usaremos addCeleb como argumento de new Celebs.
router.post('/celebrities', (req, res, next) => {
	console.log(req.body);
	const addCeleb = {
		name: req.body.celebName,
		occupation: req.body.celebOccupation,
		catchPhrase: req.body.celebPhrase
	};
	//Después usaremos addCeleb como argumento de new Celebs. Y generamos un newCeleb
	//ojo: hay que guardar el dato en la base de datos: newCeleb.save()
	const newCeleb = new Celebs(addCeleb);

	newCeleb
		.save()
		.then(() => {
			console.log('added');
			res.redirect('/celebrities/');
		})
		.catch((err) => {
			console.log(err);
			res.render('celebrities/new');
		});
});

//cuando he ingresado una celebrity, necesito dos cosas: poder editarla, y poder borrarla.
//Haré dos rutas para cada propósito, ambas tendrán el id del celebrity de mis base de datos
//como referencia.

///En esta ruta celebrities/:id/delete no tengo que renderizar nada, solo
//la utilizo para encontrar mi celebrity por el id, borrarla, y después, vuelvo a mi ruta
// LOCALHOST:3000/celebrities/ con un redirect, y así veo si se ha borrado de la lista.
router.post('/celebrities/:id/delete', (req, res, next) => {
	Celebs.findByIdAndRemove(req.params.id)
		.then(() => {
			res.redirect('/celebrities/');
		})
		.catch((err) => {
			console.log(err);
			next();
		});
});

///En esta ruta celebrities/:id/edit si tengo que renderizar mi hoja celebrities/edit.hbs
//Busco el elemento por el id, y utilizo el resultado para insertar los campos en mi pagina celebrities/edit.hbs
//mi hoja será un formulario de input cuyos valores por defecto son los que ya tenía
//Este form tendrá que llevarme action="/celebrities/:id, siendo :id = {{editCeleb._id}}
router.get('/celebrities/:id/edit', (req, res, next) => {
	Celebs.findById(req.params.id)
		.then((editCeleb) => {
			res.render('celebrities/edit', { editCeleb });
		})
		.catch((err) => {
			console.log(err);
		});
});
//después haemos un POST para actualizar los datos que hemos editado.
//la ruta debe coincidir con el action del form anterior
//y si tiene exito dirigirme a mi ruta donde pongo todas mis celebrities
router.post('/celebrities/:id', (req, res, next) => {
	Celebs.update(
		{ _id: req.params.id },
		{ $set: { name: req.body.celebName, occupation: req.body.celebOccupation, catchPhrase: req.body.celebPhrase } }
	)
		.then(() => {
			res.redirect('/celebrities');
		})
		.catch((err) => {
			console.log(err);
			next();
		});
});

module.exports = router;
