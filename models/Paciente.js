const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

// Define o modelo "Paciente"
const Paciente = sequelize.define('Paciente', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Paciente;