const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
 'qnacomment',
  {
    idx: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    qnaidx: {
      type: Sequelize.INTEGER
    },
    id : {
      type: Sequelize.STRING(100)
    },
    comment: {
      type: Sequelize.STRING(1000)
    }//,
    //writer : {
    //    type: Sequelize.STRING(100)
    //}
    //,
    //date: {
    //    type: Sequelize.DATETIME
    //}
  },
  {
    timestamps: false
  }
)