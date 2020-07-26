--Editar películas

1. Route GET para enseñar el HBS de edit.hbs y le pasas la info de la base de datos bajo una variable

2. Creo el edit.hbs dentro de movies/edit.hbs y uso la variable del route GET en un form para editar toda la info.
   2.1. Le añado el campo "value" para que enseñe la información actual de la DB.

3. Route POST para guardar la información del form
   3.1. Uso el método findByIdAndUpdate.
   3.2. Una vez guardado, redirijo a /movies

4. En el eachloop de movies/index.hbs añado para cada movie un link para editar la info, usando una URL dinámica
