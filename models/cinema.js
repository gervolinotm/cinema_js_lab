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

Cinema.prototype.checkYear = function(year){
  let yearsArray = this.films.map(film => film.year);
  let result = yearsArray.includes(year);
  return result;
}

Cinema.prototype.checkLength = function(movieLength){
  let lengthsArray = this.films.map(film => film.length);
  let result = lengthsArray.every(film => film > movieLength);
  return result;
}

Cinema.prototype.totalLength = function(){
  let lengthsArray = this.films.map(film => film.length);
  const total = lengthsArray.reduce((runningTotal, currentValue) => runningTotal + currentValue, 0)
  return total;
}