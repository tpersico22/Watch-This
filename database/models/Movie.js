module.exports = function (sequelize, dataTypes){

    let alias = "Movie";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: dataTypes.STRING
        },
        awards: {
            type: dataTypes.INTEGER
        },
        rating: {
            type: dataTypes.DOUBLE
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        }

    }

    let config = {
        tableName: "movies",
        timeSstamps: false
    }

    let Movie = sequelize.define(alias, cols, config);

    Movie.associate = function(models){
        Genre.belongsTo(models.Genre, {
            as: "genre",
            foreingKey: "genre_id"
        })
    }

    Movie.associate = function(models){
        Movie.belongsToMany(models.Actor, {
            as: "actors",
            through: "actor_movie",
            foreingKey: "movie_id",
            otherKey: "actor_id",
            timeSstamps: false
        })
    }

    return Movie;
}