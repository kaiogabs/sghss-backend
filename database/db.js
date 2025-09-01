const { Sequelize } = require('sequelize');

// Cria a conexão com o banco SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/sghss.sqlite'  // Caminho do arquivo do banco
});

module.exports = sequelize;