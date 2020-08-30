const express = require('express')
const qnas = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Qna = require('../models/Qna');
const QnaComment = require('../models/QnaComment')
qnas.use(cors())

//process.env.SECRET_KEY = 'secret'

qnas.post('/qnaRegister', (req, res) => {
  //console.log(req);
  const today = new Date()
  const qnaData = {
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
          Qna.create(qnaData)
            .then(qna => {
              console.log(qna.idx +' Registered!');
              res.send(qna);
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

qnas.post('/registerQnaComment', (req, res) => {
  console.log(req.body);
  const commentData = {
    qnaidx: req.body.qnaidx,
    id: req.body.id,
    comment : req.body.comment//,
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
          QnaComment.create(commentData)
            .then(comment => {
              console.log(comment.idx +' Registered!');
              res.send(comment);
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


qnas.post('/selectQna/:code', (req, res) => {
  Qna.findAll({
    where : {
      bangCode: req.params.code
    }
  })
    .then(qnas => {
      //console.log("얍얍 "+qnas);
      res.send(qnas);
      //res.json({ status: bulletin.idx + 'Registered!' })
    })
    .catch(err => {
      //console.log('error'+err);
      res.send('error: ' + err)
  })
})

qnas.post('/selectQnaComment', (req, res) => {
  console.log(req.body);
  QnaComment.findAll({
    where : {
      qnaidx: req.body.qnaId
    }
  })
    .then(comments => {
      res.send(comments);
      //res.json({ status: bulletin.idx + 'Registered!' })
    })
    .catch(err => {
      console.log('error'+err);
      res.send('error: ' + err)
  })
})

qnas.post('/deleteQnaComment', (req, res) => {
  console.log("hello! "+req.body.idx);
  QnaComment.destroy({
    where: {
      idx: req.body.idx
    }
  })  
});
qnas.post('/deleteQna', (req, res) => {
  console.log("hello! "+req.body.idx);
  Qna.destroy({
    where: {
      idx: req.body.idx
    }
  })
  QnaComment.destroy({
    where: {
      qnaidx: req.body.idx
    }
  })  
});

module.exports = qnas