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

const imagesMovies= movies.map(films=>films.poster);
console.log(imagesMovies);

const scoreMovies= movies.map(films=>films.rt_score);
console.log(scoreMovies);


console.log (movieNames[0]);
console.log (movieNames[1]);

for (let i = 0; i < movieNames.length; i++) {
    const movie = document.getElementById("movie" + (i+1));
    movie.innerHTML =  '<br><img src="' + imagesMovies[i] + '">' + '<br>' + movieNames[i] + '<br>'+scoreMovies[i]+ '⭐';
  }

//LO QUE HICIMOS ANTES
//const movie1= document.getElementById("movie1");
//movie1.innerHTML= movieNames[0] + '<br><img src="' + imagesMovies[0] + '">' + '<br>'+scoreMovies[0]+ '⭐';

//const movie2= document.getElementById("movie2");
//movie2.innerHTML= movieNames[1] + '<br><img src="' + imagesMovies[1] + '">' + '<br>'+scoreMovies[1]+ '⭐';

//const movie3= document.getElementById("movie3");
//movie3.innerHTML= movieNames[2] + '<br><img src="' + imagesMovies[2] + '">' + '<br>'+scoreMovies[2]+ '⭐';

console.log(example, data);

