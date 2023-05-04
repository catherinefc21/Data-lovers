import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(example, data);

//obtener lista de películas
const movies= data.films;
console.log(movies);
console.log(typeof movies)//movies es objeto

//obtener nombre de películas con map(crea un nuevo array)
const movieNames= movies.map(films=>films.title);
console.log(movieNames);

//poner el nombre de cada película en un div
for (let i= 0;i < movieNames.length;i++) {}
//filtrar titulo de movies (no resulta)
//ej 1 const moviesName= movies.filter((films)=> films.title);
//console.log(moviesName)


//console.log(movies)
//Array para almacenar el nombre de las películas
//const moviesNames= []
//obtener los nombres de películas utilizando map
//const moviesNames=films.map(films => films.title);


