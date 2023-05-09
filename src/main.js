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

//Seleccionar en lista desplegable productor
const typeSelect= document.getElementById("typeProductors");
typeSelect.addEventListener("change", () => {
  const selectProductor= typeSelect.value;
  console.log(selectProductor);
})

//Seleccionar el lista desplegable director
const typeSelect2= document.getElementById("typeDirectors");
typeSelect2.addEventListener("change", () => {
  const selectDirector= typeSelect.value;
  console.log(selectDirector);
})

console.log(example, data);

