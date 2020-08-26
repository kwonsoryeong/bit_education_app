const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
 'video',
  {
    idx: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    bangCode : {
      type: Sequelize.STRING(1000)
    },
    title : {
      type: Sequelize.STRING(100)
    },
    contents: {
      type: Sequelize.STRING(100)
    }
  },
  {
    timestamps: false
    //tableName = "users"
  }
)