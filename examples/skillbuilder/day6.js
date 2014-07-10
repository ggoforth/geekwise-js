//create a function that will take a title, runningTime and year as arguments
//and return an object of those properties.
function movieObjCreator(title, runningTime, year) {
    return {
        title: title,
        runningTime: runningTime,
        year: year
    };
}

//Our data structure, an array of arrays
var movies = [
    ["bill and teds excellent adventure", 90, 1990],
    ["rad", 85, 1983],
    ["goonies", 95, 1985],
    ["top gun", 90, 1987],
    ["the shawshank redemption", 120, 2005],
];

//for holding our new movie objects
var movieObjs = [];

//initial loop, we'll create our movie objects here
for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];
    movieObjs.push(movieObjCreator.apply({}, movie));
}

//prompt for title or year
var titleOrYear = prompt("Enter a movie title or release year to view running time and year released");

//loop the movieObjs and interrogate each movie looking for
//title of year specified.
for (var i = 0; i < movieObjs.length; i++) {
    var movie = movieObjs[i];

    if (movie.title === titleOrYear || movie.year === parseInt(titleOrYear, 10)) {
        alert(movie.title + " was released in " + movie.year + " and has a running time of " + movie.runningTime);
    }
}

