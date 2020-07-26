--Editar celebridades

1. Creo la GET route para editar las celebridades en celebrities.js

2. Creo el hbs "edit.hbs" en la carpeta celebrities
   2.1. Le añado un form POST con un value para que salga la info de la Celeb en los campos y poder editarlo
   2.2. Cuando le da a submit, entra en acción el POST roure de ahora

3. Creo el POST route para guardar la info en la DB en celebrities.js
   3.1. Uso el método findByIdAndUpadte en vez de Update porque no funcionaba.
