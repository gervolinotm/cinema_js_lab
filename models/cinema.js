const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;

Cinema.prototype.getFilmTitles = function (){
  const result = this.films.map(film => film.title);
  return result;
}

Cinema.prototype.findFilmByTitle = function (filmTitle){
  const result = this.films.find(film => film.title === filmTitle);
  return result;
}

Cinema.prototype.filterFilmsByGenre = function(genre){
  const result = this.films.filter(film => film.genre === genre);
  return result;
}