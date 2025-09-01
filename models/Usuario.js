const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Usuario = sequelize.define('Usuario', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Usuario;