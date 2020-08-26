const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
 'bang',
  {
    idx : {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title : {
        type: Sequelize.STRING(100)
    },
    adminId : {
        type: Sequelize.STRING(100)
    },
    code : {
        type: Sequelize.STRING(1000)
    }
    //,
    //date: {
    //    type: Sequelize.DATETIME
    //}
  },
  {
    timestamps: false
    //tableName = "users"
  }
)