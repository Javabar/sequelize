const yargs = require("yargs");
const {sequelize} = require("./db/connection");
const {addMovie} = require("./movie/functions");
const { addMovie, listMovie, updateMovie, deleteMovie} = require("./movie/functions")

const app = async (yargsObj) => {
    try {
        await sequelize.sync({alter: true});
        if (yargsObj.add) {
            // add something to movie table
            await addMovie({ title: yargsObj.title, actor:yargsObj.actor});
                console.log("sucess");
        } else if (yargsObj.list) {
            // list content of movie table
            await listMovie()
        } else if (yargsObj.update) {
            // update one entry in movie table
            await updateMovie({ title: yargsObj.newTitle, actor: yargsObj.newActor}),
            {where: {title: yargsObj.oldTitle}}
        } else if (yargsObj.delete) {
            // delete entry from movie
            await deleteMovie({ title: yargsObj.title, actor: yargsObj.actor})
        } else {
            console.log("incorrect command");
        }
    } catch (error) {
        console.log(error);
    } finally {
        await sequelize.close();
    }
};

app(yargs.argv);