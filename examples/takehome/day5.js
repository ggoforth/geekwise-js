//movies is an array of arrays where each movie array contains
// the title, running time and year relased
var movies = [
    ["back to the future", 90, 1983],
    ["desperado", 120, 1992],
    ["donnie darko", 95, 1998],
    ["date night", 90, 2010],
    ["iron man", 100, 2011]
];

var movieObjs = [];

function movieObj(title, runningTime, year) {
    return {
        title: title,
        runningTime: runningTime,
        year: year
    };
}

for (var i = 0; i < movies.length; i++) {
    movieObjs.push(movieObj.apply({}, movies[i]));
}

for (var j = 0; j < movieObjs.length; j++) {
    var movie = movieObjs[j];
    console.log(movie.title, movie.runningTime, movie.year);
}