(function () {
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

    window.Movie = Movie;
}());