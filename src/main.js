import { filterProducer, orderMovies, filterDirector, selectMovie } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';

//obtener lista de películas
const movies= data.films;
console.log(movies)

//PÁGINA INICIO (Bienvenida)
const contenedor= document.getElementById("contenedor");
contenedor.innerHTML+= `<div class="inicio"> 
<div class="welcome"><div class="textWelcome"><h2>Bienvenido(a)<br></h2><h3>¡Revisa nuestro menú y descubre todo sobre tus películas favoritas!</h3><br></div><br><img class="inicioImg"src="img/portada 3.png" alt=""></div>
</div>`

//BOTON HISTORIA
const history= document.getElementById("history");
history.addEventListener("click", function(){
contenedor.innerHTML=""
contenedor.innerHTML+= `<div class="history"><div class="historyImg"><img src="/src/img/history.png" alt=""></div><div class="history1"><h2>GHIBLI STUDIOS</h2><p> <br> <br> For anime fans, there is nothing like the works of Studio Ghibli. This small team of animators spends years crafting each wonderful story, bringing tales of adventure, love and friendship to life through thousands of hand-drawn frames. From My Neighbor Totoro to Ponyo, each of these enchanting films allows viewers to immerse themselves in fantasy worlds.
  <br> <br>Studio Ghibli was founded by animator, director, producer, screenwriter, author and manga artist Hayao Miyazaki; Japanese film director Isao Takahata; and producer Toshio Suzuki. Over the past 37 years, they have created 20 feature films (and counting), plus several short films and television commercials. Read on to learn more about the history and future of this legendary animation studio. <br> <br></p></div></div>`
})

//BOTON VER TODAS LAS PELÍCULAS(VIEW ALL)
const todas= document.getElementById("reiniciar");
todas.addEventListener("click", function(){
contenedor.innerHTML=""
movies.forEach(movie=>{
  contenedor.innerHTML+= `<section moviename="${movie.title}"> <br><img moviename="${movie.title}" src="${movie.poster}">  <br>${movie.rt_score} ⭐ <br>  ${movie.title} </section>`
})

//Descripción extensa de la película al hacer CLICK 
console.log(contenedor);
 for( var i=0; i<contenedor.children.length; i++){
  (contenedor.children[i].addEventListener("click", function(e){
    console.log(e.target.getAttribute("moviename"));
    const selectMovie= movies.find(pelicula=> pelicula.title===e.target.getAttribute("moviename"));
    if (selectMovie){
      contenedor.innerHTML=`<div class=principal>
      <div class=texts>
      <div id="title" class=title>${selectMovie.title}</div>
      <div id="caracter" class=description><b>Description:</b> ${selectMovie.description} <br><br><b>Director:</b> ${selectMovie.director} <br><br> <b>Producer:</b> ${selectMovie.producer} <br><br> <b>Release date:</b> ${selectMovie.release_date} <br><br> <b>Score:</b> ${selectMovie.rt_score} ⭐ </div></div>
      <div class=picture><img src="${selectMovie.poster}"></div>
      </div>`;
       //selectMovie.vehicles.forEach((vehiculo)=>{
        //contenedor.innerHTML+=`<div id="vehicles"><img src="${vehiculo.img}"</div>`
       //})
      //contenedor con div id slider para contener carrusel
      selectMovie.people.forEach((personaje)=>{
        contenedor.innerHTML += `<div class= "character"> <br><div class=imgPeople><img src="${personaje.img} "></div> <br><div class= information><h3>${personaje.name}</h3>}</div> </div>`
      })
    }
  }));
}

})

//BOTON EN MENÚ PARA SELECCIONAR PRODUCTOR
const typeSelect= document.getElementById("typeProductors");
typeSelect.addEventListener("change", () => {
 const selectProductor= typeSelect.value;
 
  const filtroProductor= filterProducer(movies,selectProductor);
  console.log(filtroProductor)
  contenedor.innerHTML="",
  filtroProductor.forEach((peli)=>{
  contenedor.innerHTML += `<section> <br><img src="${peli.poster}">  <br>${peli.rt_score} ⭐ <br>  ${peli.title} </section>`
  })
});

//BOTON EN MENÚ PARA SELECCIONAR DIRECTOR
const typeSelect2= document.getElementById("typeDirectors");
typeSelect2.addEventListener("change", () => {
  const selectDirector= typeSelect2.value;
  //FUNCION filtra el director seleccionado
  const filtroDirector= filterDirector(movies, selectDirector);
  contenedor.innerHTML="";
  filtroDirector.forEach((peli2)=>{
  contenedor.innerHTML += `<section> <br><img src="  ${peli2.poster} ">  <br>${peli2.rt_score} ⭐ <br>  ${peli2.title} </section>`
    });
  });

//LISTA DESPLEGABLE CON NOMBRES DE PELÍCULA PARA VER PERSONAJES(VIEW PEOPLE)
const contenedor_listMovies=document.getElementById("listMovies");
movies.forEach(list=>{
  contenedor_listMovies.innerHTML+= `<option value="${list.title}" class="options">${list.title}</option>`
})
//Seleccionar pelicula para ver personajes
const typeSelect3= document.getElementById("listMovies");
typeSelect3.addEventListener("change", () => {
 const selectFilms= typeSelect3.value;
 const seleccionarMovie= selectMovie(movies, selectFilms);
 console.log(seleccionarMovie);
    //contenedor con div id slider para contener carrusel
    contenedor.innerHTML=`<div id="slider"></div>`;
    seleccionarMovie.people.forEach((personaje)=>{
      document.getElementById("slider").innerHTML += `<div class= "character"> <br><div class=imgPeople><img src="${personaje.img}"></div> <br><div class= information><h3>${personaje.name}</h3> <b>Age:</b> ${personaje.age} <br> <b>Gender:</b> ${personaje.gender} <br> <b>Specie:</b> ${personaje.specie} <br> <b>Eye color:</b> ${personaje.eye_color}<br> <b>Hair color:</b>${personaje.hair_color}</div> </div>`
    })}
);

  //BOTON ORDENAR A-Z(clonar movies para usar esa constant y ordenarla)
  movies.itself = movies 
  const cloneMovies = structuredClone(movies);
  const order= document.getElementById("order");

  const ordenarPeliculas= orderMovies(cloneMovies);
  console.log(ordenarPeliculas);
  order.addEventListener("click", ()=>{ordenarPeliculas,

//contenedor vacío. Aplicar función de ordenado para que se muestren las películas en el contenedor.
  contenedor.innerHTML="",
  ordenarPeliculas.forEach((order)=>{
    contenedor.innerHTML +=`<section> <br><img src="  ${order.poster} ">  <br>${order.rt_score} ⭐ <br>  ${order.title} </section>`
  })
});


