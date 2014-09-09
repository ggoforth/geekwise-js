
var form = document.getElementById("newMovie");
var ul = document.getElementById("movieList");

form.addEventListener("submit", function (event) {

    var title = document.getElementById("movieTitle");
    var runningTimeInMinutes = document.getElementById("runningTime");
    var year = document.getElementById("year");
    var desc = document.getElementById("desc");
    var genre;

    var genreInputs = document.getElementsByName("genre");
    for (var i = 0; i < genreInputs.length; i++) {
        var genreInput = genreInputs[i];

        if (genreInput.checked) {
            genre = genreInput;
        }
    }

    var movie = new Movie(title.value, runningTimeInMinutes.value, year.value, genre.value, desc.value);
    var li = e("li", movie.title);
    li.addEventListener("click", function () {
        alert(movie.preview());
    });

    ul.appendChild(li);

    title.value = "";
    runningTimeInMinutes.value = "";
    year.value = "";
    desc.value = "";
    genre.checked = false;

    event.preventDefault();
});



















