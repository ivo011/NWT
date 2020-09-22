const express = require('express'); 
const bodyParser = require('body-parser'); 
const router = express.Router(); 
const models  = require('../models');
const jwt = require('jsonwebtoken');
const cors = require('cors'); 
const verify = require('../config/verifyToken');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cors());


router.post('/create', (req, res) => {    
    const auth_token = JSON.parse(req.header('auth_token'));       
    const decoded = jwt.verify(auth_token.token, "secret");   
    models.Comment.create({
      post_id: req.body.post_id,
      text: req.body.text,       
      user_id: decoded.userId
    }).then(() => {
      res.send('Comment Created!');
    }).catch((err) => {      
      console.log(err);
    });    
  });

  router.get('/', (req, res) => {
    models.Comment.findAll({
      order: [
        ['createdAt', 'DESC']       
    ], 
    include:[models.User]
    })
    .then((comments)=>{
        res.send(comments);
    }).catch((err) => {      
      console.log(err);
    });  
});

router.delete('/delete', (req, res) => {        
  models.Comment.destroy({
    where: {
      post_id: null
    }
  }  ).then(() => {
    res.send('Comment deleted');
  }).catch((err) => {      
    console.log(err);
  });    
});




module.exports = router; 