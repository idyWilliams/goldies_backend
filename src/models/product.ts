const { DataTypes } = require('sequelize');
const { sequelize } = require('../server');

const ProductData = sequelize.define('ProductData', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});