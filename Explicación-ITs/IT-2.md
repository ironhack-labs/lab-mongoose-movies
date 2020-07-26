1. GET en routes/celebrities.js
2. En el callback de la ruta:
   2.1. Le paso el find al modelo Celebrity y encuentra todas las celebs de la DB.
   2.2. Con la promise, la renderizo en el hbs "celebrities/index.hbs" y hago que la info sea accesible con "celebrities"

3. Creo la carpeta "celebrities" en views.
4. Creo el hbs "index.hbs" dentro de la carpeta "celebrities".

5. En el "views/celebrities/index.hbs":
   5.1. Añado HTML y un each para enseñar los nombres.

6. En index.hbs de views añado un <a> que lleva a "/celebrities"
