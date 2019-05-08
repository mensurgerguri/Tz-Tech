const Sequelize = require('sequelize')
const db = {}

var env = process.env.NODE_ENV || 'development';
var dbConfig = require('../database/dbConfig')[env];

const sequelize = new Sequelize(dbConfig.database.database, dbConfig.database.user, dbConfig.database.password, {
  host: dbConfig.database.host,
  dialect: dbConfig.database.dialect,
  operatorsAliases: dbConfig.database.operatorsAliases,

  pool: dbConfig.database.pool
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
