const express = require('express')
const bulletins = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Bulletin = require('../models/Bulletin');
bulletins.use(cors())

process.env.SECRET_KEY = 'secret'

bulletins.post('/postRegister', (req, res) => {
  //console.log(req);
  const today = new Date()
  const bulletinData = {
    title: req.body.title,
    contents: req.body.contents,
    bangCode : req.body.bangCode//,
    //created: today
  }
  console.log("22222");
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
          Bulletin.create(bulletinData)
            .then(bulletin => {
              console.log(bulletin.idx +' Registered!');
              res.json({ status: bulletin.idx + 'Registered!' })
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
bulletins.post('/selectPost/:code', (req, res) => {
  Bulletin.findAll({
    where : {
      bangCode: req.params.code
    }
  })
    .then(bulletins => {
      res.send(bulletins);
      //res.json({ status: bulletin.idx + 'Registered!' })
    })
    .catch(err => {
      console.log('error'+err);
      res.send('error: ' + err)
  })
})

bulletins.post('/deletePost', (req, res) => {
  console.log("hello! "+req.body.idx);
  Bulletin.destroy({
    where: {
      idx: req.body.idx
    }
  })  
});

module.exports = bulletins