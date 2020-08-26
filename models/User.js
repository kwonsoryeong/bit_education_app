const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
 'user',
  {
    id: {
      type: Sequelize.STRING(100),
      primaryKey: true
    },
    password: {
      type: Sequelize.STRING(100)
    },
    bangList : {
      type: Sequelize.JSON
    }
  },
  {
    timestamps: false
    //tableName = "users"
  }
)