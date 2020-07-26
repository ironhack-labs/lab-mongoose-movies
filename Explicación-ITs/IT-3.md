--Ver más detalles de cada celeb

1. En routes/celebrities.js:
   1.1. Creo la ruta "/celebrities/:id" (":id" para poder usarlo en req.params con el findById. Cómo consigo el ID: PUNTO 3).
   1.2. En el callback uso el método "findById" sobre el modelo, le paso el parámetro ID para que lo busque y retorna el match de la DB.

2. Creo "show.hbs" para ver detalles de la celeb en "views/celebrities/"
   2.1. Añado elementos para ver toda la info.
   2.2. Uso "thisCeleb" en "views/celebrities/show.hbs" que es la referencia de la DB en "routes/celebrities.js" para poder llamar a la info sobre el ID pasado.

3. En el views/celebrities/index.hbs:
   3.1. Añado un link al nombre de cada celeb para que redirija a "/celebrities/{{_id}}", así haciendo una ruta dinámica.
