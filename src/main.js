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
//Se elige la opcion por el usuario
const typeSelect= document.getElementById("typeProductors");
typeSelect.addEventListener("change", () => {
 const selectProductor= typeSelect.value;
 //se filtra el productor seleccionado
 const filterProducer= movies.filter((productor)=> {
  return productor.producer === selectProductor;
})//se deja contenedor en blanco y se muestras las películas del productor seleccionado
  contenedor.innerHTML="";
  filterProducer.forEach((peli)=>{
    contenedor.innerHTML += `<section> <br><img src="  ${peli.poster} ">  <br>${peli.rt_score} ⭐ <br>  ${peli.title} </section>;`
  });
});

//Seleccionar el lista desplegable director
const typeSelect2= document.getElementById("typeDirectors");
typeSelect2.addEventListener("change", () => {
  const selectDirector= typeSelect2.value;
  console.log(selectDirector);
  const filterDirector= movies.filter((director)=> {
    return director.director === selectDirector;
  })//se deja contenedor en blanco y se muestras las películas del productor seleccionado
    contenedor.innerHTML="";
    filterDirector.forEach((peli2)=>{
      contenedor.innerHTML += `<section> <br><img src="  ${peli2.poster} ">  <br>${peli2.rt_score} ⭐ <br>  ${peli2.title} </section>;`
    });
  });

console.log(example, data);
