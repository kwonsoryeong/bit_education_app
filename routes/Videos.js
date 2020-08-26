const express = require('express')
const videos = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Video = require('../models/Video');
videos.use(cors())

process.env.SECRET_KEY = 'secret'

videos.post('/videoRegister', (req, res) => {
  //console.log(req);
  const today = new Date()
  const videoData = {
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
          Video.create(videoData)
            .then(video => {
              console.log(video.idx +' Registered!');
              res.json({ status: video.idx + 'Registered!' })
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
videos.post('/selectVideo/:code', (req, res) => {
  Video.findAll({
    where : {
      bangCode: req.params.code
    }
  })
    .then(videos => {
      res.send(videos);
    })
    .catch(err => {
      //console.log('error'+err);
      res.send('error: ' + err)
  })
})

videos.post('/deleteVideo', (req, res) => {
  Video.destroy({
    where: {
      idx: req.body.idx
    }
  })  
});

module.exports = videos