const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Movies = sequelize.define('movies', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    synopsis: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    releaseYear: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
});

module.exports = Movies;