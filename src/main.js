/* eslint-disable no-console */

import { filterProducer, orderAz, filterDirector, selectMovie, ageProm } from './data.js';

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

//BOTON VER TODAS LAS PELÍCULAS(FILMS)
const todas= document.getElementById("reiniciar");
todas.addEventListener("click", function(){
  contenedor.innerHTML="";
  contenedor.innerHTML+=`<div class="desplegable_Order">
          <b>ORDER:</b>
        <select name="typeOrder" id="typeOrder" class="optionOrder">
          <option value="Options" class="options">Please select</option>
          <option value="A-Z" class="option">A-Z</option>
          <option value="Z-A" class="option">Z-A</option>
        </select>
        </div>
<div id="contenedor2"></div>`
  movies.forEach(movie=>{
    document.getElementById("contenedor2").innerHTML+= `<section moviename="${movie.title}"> <br><img moviename="${movie.title}" src="${movie.poster}">  <br>${movie.rt_score} ⭐ <br>  ${movie.title} </section>`
  })
  //ORDENAR DE LA A-Z Y Z-A
  movies.itself = movies 
  const clone=structuredClone(movies);
  const typeOrder= document.getElementById("typeOrder");
  typeOrder.addEventListener("change", () => {
    const selectOrder= typeOrder.value;
    const ordenarPeliculas1= orderAz(clone,selectOrder)
    document.getElementById("contenedor2").innerHTML=""
    console.log(selectOrder);
    console.log(ordenarPeliculas1);
    ordenarPeliculas1.forEach((movie)=>{
      document.getElementById("contenedor2").innerHTML+=`<section moviename1="${movie.title}"> <br><img moviename1="${movie.title}" src="${movie.poster}">  <br>${movie.rt_score} ⭐ <br>  ${movie.title} </section>`
    })
  });

  //Descripción extensa de la película al hacer CLICK
  // eslint-disable-next-line no-console
  console.log(contenedor);
  document.getElementById("contenedor2").addEventListener("click", function(e) {
    const movieTarjet = e.target.getAttribute("moviename") || e.target.getAttribute("moviename1");
    if (movieTarjet) {
      contenedor.innerHTML = "";
      const selectMovieTarjet = selectMovie(movies, movieTarjet);
      if (selectMovieTarjet) {contenedor.innerHTML="";
 
        const selectMovieTarjet= selectMovie(movies, movieTarjet);
        if (selectMovieTarjet){
          contenedor.innerHTML=`<div class=principal>
        <div class=texts>
        <div id="title" class=title>${selectMovieTarjet.title}</div>
        <div id="caracter" class=description><b>Description:</b> ${selectMovieTarjet.description} <br><br><b>Director:</b> ${selectMovieTarjet.director} <br><br> <b>Producer:</b> ${selectMovieTarjet.producer} <br><br> <b>Release date:</b> ${selectMovieTarjet.release_date} <br><br> <b>Score:</b> ${selectMovieTarjet.rt_score} ⭐ <br><br></div></div>
        <div class=picture><img src="${selectMovieTarjet.poster}"></div>
        </div><div class="tittlePeople">Characters <div id ="characters"></div></div>`;
  
          //PROMEDIO
          const agePromedio=ageProm(data,selectMovieTarjet.people)
          console.log(selectMovieTarjet.people);
          console.log(agePromedio);
          //MOSTRAR EN PANTALLA 
          document.getElementById("caracter").innerHTML += `<div class="promedio"><b>Promedio edad:</b> ${agePromedio} años.</div>`
          
          selectMovieTarjet.people.forEach((personaje)=>{
            document.getElementById("characters").innerHTML += `<div class= "characterName"><br><div class=nameImg><img src="${personaje.img} "></div><br><div class=name><b>${personaje.name}</b></div></div>`
          })
        }
      }}});

  //BOTON EN MENÚ PARA SELECCIONAR PRODUCTOR
  const typeSelect= document.getElementById("typeProductors");
  typeSelect.addEventListener("change", () => {
    const selectProductor= typeSelect.value;
    console.log(selectProductor)
 
    const filtroProductor= filterProducer(movies,selectProductor);
    console.log(selectProductor);
    console.log(filtroProductor);
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
    console.log(selectDirector);
    console.log(filtroDirector);
    contenedor.innerHTML="";
    filtroDirector.forEach((peli2)=>{
      contenedor.innerHTML += `<section> <br><img src="  ${peli2.poster} ">  <br>${peli2.rt_score} ⭐ <br>  ${peli2.title} </section>`  });
  });

  //LISTA DESPLEGABLE CON NOMBRES DE PELÍCULA PARA VER PERSONAJES(VIEW PEOPLE)
  const contenedor_listMovies=document.getElementById("listMovies");
  contenedor_listMovies.innerHTML=`<option value="Options" class="options">Please select</option>`
  movies.forEach(list=>{
    contenedor_listMovies.innerHTML+= `<option value="${list.title}" class="optionC">${list.title}</option>`
  })
  //Seleccionar pelicula para ver personajes
  const typeSelect3= document.getElementById("listMovies");
  typeSelect3.addEventListener("change", () => {
    const selectFilms= typeSelect3.value;
    const seleccionarMovie= selectMovie(movies, selectFilms);
    console.log(selectFilms);
    console.log(seleccionarMovie);
    //contenedor con div id slider para contener carrusel
    contenedor.innerHTML=`<div id="title" class=title1>${selectFilms}</div><div id="slider"></div>`;
    seleccionarMovie.people.forEach((personaje)=>{
      document.getElementById("slider").innerHTML += `
      <div class= "character"> <br><div class=imgPeople><img src="${personaje.img}"></div> <br><div class= information><h3>${personaje.name}</h3> <b>Age:</b> ${personaje.age} <br> <b>Gender:</b> ${personaje.gender} <br> <b>Specie:</b> ${personaje.specie} <br> <b>Eye color:</b> ${personaje.eye_color}<br> <b>Hair color:</b>${personaje.hair_color}</div> </div>`
    })}
  )})