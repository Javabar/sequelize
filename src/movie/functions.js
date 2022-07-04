const Movie = require("./table")

exports.addMovie = async (movieObj) => {
    try {
        const  response = await Movie.create(movieObj);
        console.log(response);
    } catch (error) {
        console.log(error)
    }
};

exports.listMovie = async () => {
    try {
        const selected = await Movie.findAll();
        console.log("all movies:", JSON.stringify(selected, null, 2));
    } catch (error) {
        console.log(error);
    }
}

exports.updateMovie = async () => {
    try {
        const response = await Movie.update(newTitle, oldTitle);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

exports.deleteMovie = async (movieObj) => {
    try {
        const response = await Movie.destroy({ where: movieObj});
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}