module.exports = function (sequelize, dataTypes){

    let alias = "Genre";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING
        }

    }

    let config = {
        tableName: "genres",
        timeSstamps: false
    }

    let Genre = sequelize.define(alias, cols, config);

    Genre.associate = function(models){
        Genre.hasMany(models.Movie, {
            as: "movies",
            foreingKey: "genre_id"
        })
    }

    return Genre;


}