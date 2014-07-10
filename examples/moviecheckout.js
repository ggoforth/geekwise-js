function Movie(title, time, year) {
    this.title = title;
    this.time = time;
    this.year = year;
    this.checkedIn = true;
}

Movie.prototype.checkIn = function checkIn() {
    this.checkedIn = true;
};

Movie.prototype.checkOut = function checkOut() {
    this.checkedIn = false;
}

Movie.prototype.status = function status() {
    return "The movie " + this.title + " has been " + (this.checkedIn ? "checked in" : "checked out");
};

//Our data structure, an array of arrays
var movies = [
    ["bill and teds excellent adventure", 90, 1990],
    ["rad", 85, 1983],
    ["goonies", 95, 1985],
    ["top gun", 90, 1987],
    ["the shawshank redemption", 120, 2005]
];

//for holding our new movie objects
var movieObjs = [];

//initial loop, we'll create our movie objects here
for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];
    var title = movie[0];
    var time = movie[1];
    var year = movie[2];
    movieObjs.push(new Movie(title, time, year));
}

for (var i = 0; i < 5; i++) {
    var title = prompt("What title would you like to checkout or checkin?");

    for (var j = 0; j < movieObjs.length; j++) {
        var movie = movieObjs[j];

        if (movie.title === title) {
            if (movie.checkedIn) {
                movie.checkOut();
            } else {
                movie.checkIn();
            }
            console.log(movie.status());
        }
    }
}