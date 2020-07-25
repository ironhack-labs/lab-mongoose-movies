--Creación del modelo, colección DB

1. Creo un modelo "Celebrity" en "models/celebrity.js".
   1.1. Para ello guardo el requerimiento de mongoose y del schema en constantes.
   1.2. Guardo en una constante un nuevo esquema de celebs.
   1.3. Guardo en una constante ese modelo y la exporto para que se pueda usar en todos lados.

2. Creo la seeds.js en "bin", que es la colección de documentos que va a MongoDB, que usará el modelo de antes.
   2.1. Requiero mongoose y traigo la exportación del modelo de Celebrity.
   2.2. Configuro la conexión a la base de datos.
   2.3. Creo la colección con los documentos.
   2.4. Ejecuto node/bin.seeds.js para añadirlo a la DB.
