import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
//obtener lista de películas

const movies= data.films;
movies.itself=movies;
const cloneMovies=structuredClone(movies);
console.log(movies);

//contenedor Article
const contenedor= document.getElementById("contenedor");
movies.forEach(movie=>{
  contenedor.innerHTML+= `<section> <br><img src="  ${movie.poster} ">  <br>${movie.rt_score} ⭐ <br>  ${movie.title} </section>`
})

//contenedor Lista de Movies
const contenedor_listMovies=document.getElementById("listMovies");
movies.forEach(listC=>{
  contenedor_listMovies.innerHTML+= `<option value="${listC.title}" class="options">${listC.title}</option>`
})

const todas= document.getElementById("reiniciar");

todas.addEventListener("click", function(){
contenedor.innerHTML=""
movies.forEach(movie1=>{
  contenedor.innerHTML+= `<section> <br><img src="  ${movie1.poster} ">  <br>${movie1.rt_score} ⭐ <br>  ${movie1.title} </section>`
})})

//Historia de estudio ghibli
const history= document.getElementById("history");
history.addEventListener("click", function(){
contenedor.innerHTML=""
  contenedor.innerHTML+= `<div class="history"> <div class="history1"><h2>GHIBLI STUDIOS</h2><p> <br> <br> For anime fans, there is nothing like the works of Studio Ghibli. This small team of animators spends years crafting each wonderful story, bringing tales of adventure, love and friendship to life through thousands of hand-drawn frames. From My Neighbor Totoro to Ponyo, each of these enchanting films allows viewers to immerse themselves in fantasy worlds.
  <br> <br>Studio Ghibli was founded by animator, director, producer, screenwriter, author and manga artist Hayao Miyazaki; Japanese film director Isao Takahata; and producer Toshio Suzuki. Over the past 37 years, they have created 20 feature films (and counting), plus several short films and television commercials. Read on to learn more about the history and future of this legendary animation studio. <br> <br></p></div> <div class="historyImg"><img src="/src/img/history.png" alt=""></div></div>`
})

//Seleccionar el lista desplegable productor
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

  //Ordenar A-Z
  const order= document.getElementById("order");
  order.addEventListener("click", function(){
  const orderMovies= cloneMovies.sort(function(a, b){
  if (a.title>b.title){
    return 1;
  }
  if (a.title<b.title){
    return -1;
  }
    return 0;
})
  contenedor.innerHTML="";
  orderMovies.forEach((order)=>{
    contenedor.innerHTML +=`<section> <br><img src="  ${order.poster} ">  <br>${order.rt_score} ⭐ <br>  ${order.title} </section>`
  })

})

//Seleccionar el lista desplegable movie
const typeSelect3= document.getElementById("listMovies");
typeSelect3.addEventListener("change", () => {
  const selectMovie= movies.find(pelicula=> pelicula.title===typeSelect3.value);
  if (selectMovie){
    contenedor.innerHTML="";
    selectMovie.people.forEach((personaje)=>{
      contenedor.innerHTML += `<section> <br><img src="  ${personaje.img} ">  <br>${personaje.age} ⭐ <br>  ${personaje.name} </section>;`
    }
    )
  }
})

console.log(example, data);
