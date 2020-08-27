const express = require('express')
const bangs = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User');
const Bang = require('../models/Bang');
bangs.use(cors())

process.env.SECRET_KEY = 'secret'

bangs.post('/createBang', (req, res) => {
  //console.log(req);
  const today = new Date()
  const bangData = {
    title: req.body.title,
    adminId: req.body.adminId
    //created: today
  }
  Bang.findOne({
    where: {
      title: req.body.title,
      adminId: req.body.adminId
    }
  })
    //TODO bcrypt
    .then(bang => {
        if(bang){ 
            console.log("존재하는 방이름입니다.");  
        }
      if (!bang) {
        bcrypt.hash(req.body.title+req.body.adminId, 10, (err, hash) => {
          bangData.code = encodeURI(hash);
          bangData.code = bangData.code.replace(/\//gi,'');
          //*/
          Bang.create(bangData)
            .then(bang => {
              console.log(bang.idx +' Registered!');
                User.findOne({
                    where:{
                        id: req.body.adminId
                    }
                }).then(user =>
                    {
                      let newBl;
                      
                      if(JSON.parse(user.bangList) === null || JSON.parse(user.bangList) ===''){
                        newBl = {"bangs":[bang.idx]}
                      }  
                      else{
                          let bl = user.bangList;
                            bl = JSON.parse(user.bangList);
                            bl["bangs"].push(bang.idx);
                            newBl = (bl);
                        }
                            User.update({bangList: newBl}, 
                                {
                                    where:{
                                        id: req.body.adminId
                                    } 
                                }
                            
                            ).catch(err => {
                                res.send('error: ' + err)
                            })
                        
                    }
                )
              res.json({ status: bang.idx + 'Registered!' })
            })
            .catch(err => {
              console.log('error'+err);
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
bangs.post('/selectBang', (req, res) => {
    //console.log(req.body.adminId);
    User.findOne({
      where: {
        id : req.body.adminId
      }
    }).then(u => {
      if(u === null || u===''){

      }else{
        let tmp = JSON.parse(u.bangList);
        console.log("뺨 "+tmp["bangs"]);
        Bang.findAll({
          where: {
            idx: tmp["bangs"]
          }
        })
          .then(bangs => {
            console.log("얍얍 "+bangs);
            res.send(bangs);
            //res.json({ status: bulletin.idx + 'Registered!' })
          })
          .catch(err => {
            //console.log('error'+err);
            res.send('error: ' + err)
        })
    }
      //res.send(bangs);
      //res.json({ status: bulletin.idx + 'Registered!' })
    })
  
})
bangs.post('/deleteBang', (req, res) => {
  //console.log("hello! "+req.body.idx);
  Bang.destroy({
    where: {
      idx: req.body.idx
    }
  })  
});

module.exports = bangs