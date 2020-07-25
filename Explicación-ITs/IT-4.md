1. Creo la ruta /new en routes/celebrities.js
   1.1. Render "celebrities/new" detro de "views/celebrities"

2. Creo "new.hbs" dentro de "views/celebrities"

3. En "new.hbs"
   3.1. Creo un form POST (acción cambiada de "/celebrities" a "/celebrities/new")

4. Creo la ruta POST "/celebrities" en routes/celebrities.js
   4.1. Cojo la info del form y la guarda en 3 variables.
   4.2. Paso esas 3 variables por el modelo y me crea un nuevo objeto
   4.3. Que guardo en mongoDB
   4.4. Si sale bien, redirijo al user a la lista de celebrities
   4.5. Si no sale bien, lo redirijo de nuevo a la página de creación
   4.6. IMPORTANT: he movido router get y post "/new" encima de router.get('/id') porque no funcionaba.
