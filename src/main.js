import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
//obtener lista de películas

const movies= data.films;
console.log(movies);
console.log(typeof movies)//movies es objeto

//obtener nombre de películas con map(crea un nuevo array)
const movieNames= movies.map(films=>films.title);
console.log(movieNames);
//Obtener foto de película
const imagesMovies= movies.map(films=>films.poster);
console.log(imagesMovies);
//Obtener puntaje de Película
const scoreMovies= movies.map(films=>films.rt_score);
console.log(scoreMovies);


console.log (movieNames[0]);
console.log (movieNames[1]);

for (let i = 0; i < movieNames.length; i++) {
  const movie = document.getElementById("movie" + (i+1));
  movie.innerHTML =  '<br><img src="' + imagesMovies[i] + '">' + '<br>'+scoreMovies[i]+ '⭐' + '<br>' + movieNames[i];
}

//LO QUE HICIMOS ANTES
//const movie1= document.getElementById("movie1");
//movie1.innerHTML= movieNames[0] + '<br><img src="' + imagesMovies[0] + '">' + '<br>'+scoreMovies[0]+ '⭐';


const button=document.getElementById("button");
button.addEventListener('click',search);

function search(){
  const searchMovie=document.getElementById("search").value.toLowerCase();
  console.log(searchMovie);
}


console.log(example, data);

