/*global */
(function() {

    "use strict";

    /**
     * Get a reference to our new movie form and movie list for use later
     * @type {HTMLElement}
     */
    var form = document.getElementById("newMovie");
    var movieList = document.getElementById("movieList");
    var newMovie = document.getElementById("newMovieButton");
    var movies = [];

    /**
     * Ensure the form is shown when we click "add new movie"
     */
    newMovie.addEventListener("click", function () {
        form.style.display = "block";
    });

    /**
     * Our form submit event handler.  Gathers up the form fields, creates a new
     * Movie instance, creates an li based on that movie instance and adds it to
     * the dom.
     * @param evt
     */
    function handleNewMovie(evt) {
        evt.preventDefault();

        /**
         * Store our fields in an object we can loop over later when we want to
         * reset all the fields.
         * @type {{title: HTMLElement, runningTimeInMinutes: HTMLElement, year: HTMLElement, desc: HTMLElement, genreInputs: NodeList}}
         */
        var fields = {
            title: document.getElementById("movieTitle"),
            runningTimeInMinutes: document.getElementById("runningTime"),
            year: document.getElementById("year"),
            desc: document.getElementById("desc"),
            genreInputs: document.getElementsByName("genre")
        };

        /**
         * Set the values of each movie field
         */
        var title = fields.title.value;
        var runningTimeInMinutes = fields.runningTimeInMinutes.value;
        var year = fields.year.value;
        var desc = fields.desc.value;
        var genre;

        /**
         * Loop over the genreInputs to determine which was checked, and set the
         * genre value.
         */
        for (var i = 0; i < fields.genreInputs.length; i++) {
            var genreInput = fields.genreInputs[i];
            if (genreInput.checked) {
                genre = genreInput.value;
            }
        }

        /**
         * This creates our actual movie instance.  This is what makes our preview
         * function available for alerting as per the spec.
         * @type {Movie}
         */
        var movie = new Movie(title, runningTimeInMinutes, year, genre, desc);
        movies.push(movie);

        /**
         * Sort the movie array at this point
         */
        movies.sort(function (a, b) {
            var aTitle = a.title.toLowerCase();
            var bTitle = b.title.toLowerCase();

            return aTitle > bTitle ? 1 : aTitle < bTitle ? -1 : 0;
        });

        movieList.innerHTML = "";

        /**
         * Create the li element that we'll stick in the dom.
         * @type {HTMLElement}
         */
        for (var i = 0; i < movies.length; i++) {
            var movieLi = e("li", movies[i].title, {"data-movieIdx": i}, {cursor: "pointer"});

            /**
             * The event listener for our li's that will alert the movie preview found
             * on the movie instance.
             */
            movieLi.addEventListener("click", function () {
                var idx = this.getAttribute("data-movieIdx");
                var movie = movies[idx];
                form.style.display = "none";

                alert(movie.preview());
            });

            /**
             * Actually stick the li in the dom.
             */
            movieList.appendChild(movieLi);
        }

        /**
         * Reset all the fields.
         */
        for (var field in fields) {
            if (fields.hasOwnProperty(field)) {
                fields[field].value = "";
            }
        }
    }

    /**
     * When the new movie form is submitted, call the handleNewMovie function
     */
    form.addEventListener("submit", handleNewMovie);

}());