/*global */
(function() {

    "use strict";

    /**
     * Get a reference to our new movie form and movie list for use later
     * @type {HTMLElement}
     */
    var $form = $("#newMovie");
    var $movieList = $("#movieList");
    var $newMovie = $("#newMovieButton");
    var movies = [];

    /**
     * Ensure the form is shown when we click "add new movie"
     */

    $newMovie.on("click", function () {
        $form.css({display: "block"});
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
            title: $("#movieTitle"),
            runningTimeInMinutes: $("#runningTime"),
            year: $("#year"),
            desc: $("#desc"),
            genreInputs: $("[name=genre]")
        };

        /**
         * Set the values of each movie field
         */
        var title = fields.title.val();
        var runningTimeInMinutes = fields.runningTimeInMinutes.val();
        var year = fields.year.val();
        var desc = fields.desc.val();
        var genre;

        /**
         * Loop over the genreInputs to determine which was checked, and set the
         * genre value.
         */
        fields.genreInputs.each(function () {
           if (this.checked) {
               genre = this.value;
           }
        });

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
        $.each(movies, function (idx, movie){
            var $movieLi = $("<li />", {
                text: movie.title
            });

            $movieLi.css({cursor: "pointer"});
            $movieLi.data("movieIdx", idx);
            $movieLi.click(function () {
                $form.hide();
                alert(movie.preview());
            });

            $movieList.append($movieLi);
        });

        /**
         * Reset all the fields.
         */
        $.each(fields, function (key, $field) {
            $field.val("");
        });
    }

    /**
     * When the new movie form is submitted, call the handleNewMovie function
     */
    $form.on("submit", handleNewMovie);

}());