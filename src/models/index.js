//Para el endpoint GET -> /movies, cada película debe traer sus generos, actores y directores
const Movies = require("./Movies")
const Actors = require("./Actors")
const Genres = require("./Genres")
const Directors = require("./Directors")




Movies.belongsToMany(Actors, {through:"movies_actors"})
Actors.belongsToMany(Movies, {through:"movies_actors"})

Movies.belongsToMany(Genres, {through:"movies_genres"})
Genres.belongsToMany(Movies, {through:"movies_genres"})

Movies.belongsToMany(Directors, {through: "movies_directors"})
Directors.belongsToMany(Movies, {through: "movies_directors"})








