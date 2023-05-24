/* eslint-disable no-console */
export const filterProducer = (data, respuestaUsuario) => {
  const filterProducer = data.filter(productor => productor.producer === respuestaUsuario);
  return filterProducer;
}

export const filterDirector = (data, respuestaUsuario) => {
  const filterDirector = data.filter(director => director.director === respuestaUsuario);
  return filterDirector;
}
export const selectMovie = (data, respuestaUsuario) => {
  const selectMovie = data.find(pelicula => pelicula.title === respuestaUsuario);
  return selectMovie;
}

export const orderAz= (data, respuestaUsuario) => {
  const orderMovies= data.sort((a, b)=> {
    if (a.title>b.title){
      return 1;
    }if (a.title<b.title){
      return -1;
    } 
  });
  if (respuestaUsuario==="A-Z"){
    return orderMovies;
  }
  else if(respuestaUsuario==="Z-A"){
    return orderMovies.reverse();
  }};

export const ageProm=(data, respuestaUsuarioPeople)=>{
  //const ageC es un array con age ['13', '13', '60', '33', 'Unspecified/Elderly', 'Unspecified/Adult', 'Unspecified/Adult'] 
  const ageC= respuestaUsuarioPeople.map((Edad)=>Edad.age);
  //ageNumber pasa los spring a Number [13, 13, 60, 33, NaN, NaN, NaN, 30, NaN, NaN, NaN, 50, 33]
  const ageNumber=  ageC.map(Element=> parseInt(Element))
  //ageFiltrado deja solo los numeros mayores a 0  [13, 13, 60, 33, 30, 50, 33]
  const ageFiltrado= ageNumber.filter(Element=> Element>0);
  //ageSuma suma todos los valores filtrados
  const ageSuma= ageFiltrado.reduce((suma,current)=>suma+current)
  //age prom realiza division por cantidad de elementos del array y toFixed solo deja dos decimales
  const ageProm= (ageSuma/ageFiltrado.length).toFixed(2);
  return ageProm;
};
    

