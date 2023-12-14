/* ¡Escribe tus comandos en este archivo! */

const ejercicio02 = 'SELECT title FROM movies WHERE duration<90';

const ejercicio03 = 'SELECT title, year FROM movies WHERE year BETWEEN 1930 AND 1940';

const ejercicio04 = 'SELECT title FROM movies WHERE title LIKE ' % til % '';

const ejercicio05 = 'SELECT title, actors FROM movies WHERE CARDINALITY(actors) =1';
// CARDINALITY(atribute) --> atribute es array, devuelve un numero de cantidad
//SELECT COUNT (+) FROM .... WHERE ... --> SUMA LOS RESULTADOS

const ejercicio06 = 'SELECT title, AVG(result) FROM movies, UNNEST(ratings) result GROUP BY title';

//AVG(solo acepta listado de números), no acepta array
//UNNEST(array) varNameElements -> convierte array en elementos, le asigna nombre de variable para reusar

//otro modo de resolver con subquery
// SELECT title, (
//    SELECT AVG(result)
//    FROM UNNEST(ratings) result 
//    AS result
//  ) FROM movies;
// 
const ejercicio07 = 'SELECT title, actors FROM movies WHERE title LIKE ' % Fast and % ' AND year = 2016';

module.exports = {
   ejercicio02,
   ejercicio03,
   ejercicio04,
   ejercicio05,
   ejercicio06,
   ejercicio07,
};
