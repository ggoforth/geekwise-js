/*global */
(function() {

    "use strict";

    /**
     * Get a reference to our new movie form and movie list for use later
     * @type {HTMLElement}
     */
    var form = document.getElementById("newMovie");
    var movieList = document.getElementById("movieList");

    movieList.addEventListener("click", function (evt) {
        var target = evt.target;

        if (target.movie) {
            alert(target.movie.preview());
        }
    });

    /**
     * Define our Movie constructor function.
     * @param title
     * @param runningTimeInMinutes
     * @param year
     * @param genre
     * @param desc
     * @constructor
     */
    function Movie(title, runningTimeInMinutes, year, genre, desc) {
        this.title = title;
        this.runningTimeInMinutes = parseInt(runningTimeInMinutes, 10) || 0;
        this.year = year;
        this.genre = genre;
        this.desc = desc || "";
    }

    /**
     * The movie prototype, lets you see a running time in hours and
     * a preview snippet based on the description.
     * @type {{runningTimeHours: Function, preview: Function}}
     */
    Movie.prototype = {
        runningTimeHours: function runningTimeHours() {
            if (!isNaN(this.runningTimeInMinutes)) {
                return (this.runningTimeInMinutes / 60) + " hrs";
            }
        },
        preview: function preview() {
            return this.desc.slice(0, 50) + "...";
        }
    };

    /**
     * Our element factory function, useful for creating new dom
     * elements on the fly.
     * @param elementType
     * @param text
     * @param attributes
     * @param styles
     * @returns {HTMLElement}
     */
    function e(elementType, text, attributes, styles) {
        attributes = attributes || {};
        styles = styles || {};

        var newElement = document.createElement(elementType);

        if (text) {
            newElement.textContent = text;
        }

        //set the attributes on the tag
        for (var attr in attributes) {
            if (attributes.hasOwnProperty(attr)) {
                newElement.setAttribute(attr, attributes[attr]);
            }
        }

        //set the styles
        for (var style in styles) {
            if (styles.hasOwnProperty(style)) {
                newElement.style[style] = styles[style];
            }
        }

        return newElement;
    }

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

        /**
         * Create the li element that we'll stick in the dom.
         * @type {HTMLElement}
         */
        var movieLi = e("li", movie.title, {}, {cursor: "pointer"});
        movieLi.movie = movie;

        /**
         * Actually stick the li in the dom.
         */
        movieList.appendChild(movieLi);

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