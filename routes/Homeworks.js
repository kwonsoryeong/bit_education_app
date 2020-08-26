const express = require('express')
const homeworks = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Homework = require('../models/Homework');
homeworks.use(cors())

process.env.SECRET_KEY = 'secret'

homeworks.post('/homeworkRegister', (req, res) => {
  //console.log(req);
  const today = new Date()
  const homeworkData = {
    title: req.body.title,
    contents: req.body.contents,
    bangCode : req.body.bangCode//,
    //created: today
  }
  /*Bulletin.findOne({
    where: {
      title: req.body.title
    }
  })
    //TODO bcrypt
    .then(bulletin => {
      console.log("12121212");
      if (!bulletin) {
        console.log("33333");
        bcrypt.hash(req.body.title, 10, (err, hash) => {
          //userData.password = hash
          //*/
          Homework.create(homeworkData)
            .then(homework => {
              console.log(homework.idx +' Registered!');
              res.json({ status: homework.idx + 'Registered!' })
            })
            .catch(err => {
              console.log('error'+err);
              res.send('error: ' + err)
            })
        /*})
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })*/
})
homeworks.post('/selectHomework/:code', (req, res) => {
  Homework.findAll({
    where : {
      bangCode: req.params.code
    }
  })
    .then(homeworks => {
      //console.log("얍얍 "+qnas);
      res.send(homeworks);
      //res.json({ status: bulletin.idx + 'Registered!' })
    })
    .catch(err => {
      //console.log('error'+err);
      res.send('error: ' + err)
  })
})

homeworks.post('/deleteHomework', (req, res) => {
  //console.log("hello! "+req.body.idx);
  Homework.destroy({
    where: {
      idx: req.body.idx
    }
  })  
});

module.exports = homeworks