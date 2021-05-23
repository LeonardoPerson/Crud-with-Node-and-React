const Sequelize = require('sequelize')

//Será usado o ambiente no modo de desenvolvimento
const environment = process.env.NODE_ENV || 'development'

//Armazenando em config as informações de conexão do banco de dados
const config = require('../config/config.js')[environment]

//Conectando com o Sequelize
const sequelize = new Sequelize(
  config.database.name,
  config.database.user,
  config.database.password,
  {
    host: config.database.host,
    dialect: config.database.dialect
  }
)

module.exports = sequelize