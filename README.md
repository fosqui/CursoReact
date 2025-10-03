APPelis

APPelis es una aplicación web desarrollada en React que permite a los usuarios explorar información sobre películas y leer reseñas de críticos de cine. La aplicación incluye un inicio donde se puede acceder a la pagina de reseñas o busqueda de peliculas, y una muestra de 5 peliculas destacadas. Ademas, se puede acceder a cada pelicula para ver un detalle mas completo sobre la misma.

Instrucciones para correr el proyecto localmente:

-Clonar el repositorio:
git clone <URL_DEL_REPOSITORIO>
cd tp-react
-Instalar dependencias: 
npm install
-Iniciar el servidor de desarrollo:
npm run dev
-Abrir en el navegador: 
La aplicación estará disponible en http://localhost:5173


Funciones implementadas:

En la pagina de Inicio se muestra un mensaje de bienvenida, 2 botones que nos llevan a las 2 rutas que tiene, reseñas y peliculas. Al final, se muestran las películas destacadas seleccionadas por su ID.
En la pagina de peliculas, se le permite al usuario buscar películas por título utilizando la API de OMDB, que incluye validación para que la búsqueda requiera al menos 3 caracteres. Si se selecciona alguno de los resultados de la busqueda, se accede a una ruta dinamica añidada a la ruta de peliculas que nos muestra solo esa seleccion, con mas detalle.
En la seccion de reseñas se muestra una lista de críticos de cine obtenidos de una API externa.
Cada crítico incluye información como nombre, correo y compañía.
Pie de página con información sobre derechos reservados.
