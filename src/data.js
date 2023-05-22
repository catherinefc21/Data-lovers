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
  if (respuestaUsuario==="A-Z"){
    const orderMovies= data.sort((a, b)=> {
      if (a.title>b.title){
        return 1;
      }if (a.title<b.title){
        return -1;
      }
      return 0; 
    
    });
    return orderMovies;
    
  }
    else if(respuestaUsuario==="Z-A"){
      const orderMovies2= data.sort((a, b)=> {
        if (a.title<b.title){
          return 1;
        }if (a.title>b.title){
          return -1;
        }
        return 0; 
      });
      return orderMovies2;
    }};
    
