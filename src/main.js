import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
//obtener lista de películas

const movies= data.films;
console.log(movies);

const contenedor= document.getElementById("contenedor");
//const contenedorProducer= document.getElementById("contenedorProducer");

//movies.forEach(producer=>{
//  contenedorProducer.innerHTML+= `<h4> ${producer.director} </h4>`;
//})

movies.forEach(movie=>{
  contenedor.innerHTML+= `<section> <br><img src="  ${movie.poster} ">  <br>${movie.rt_score} ⭐ <br>  ${movie.title} </section>;`
})





console.log(example, data);

