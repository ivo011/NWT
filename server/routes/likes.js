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
    models.Like.create({
      post_id: req.body.post_id,      
      user_id: decoded.userId
    }).then(() => {
      res.send('Like Created!');
    }).catch((err) => {      
      console.log(err);
    });    
  });

router.delete('/delete/:id', (req, res) => {
  const auth_token = JSON.parse(req.header('auth_token'));       
  const decoded = jwt.verify(auth_token.token, "secret");      
  models.Like.destroy({   
    where:  {
      post_id: req.params.id,
      user_id: decoded.userId
    }  
  }).then(() => {
    res.send('Like Deleted');
  }).catch((err) => {      
    console.log(err);
  });    
});




module.exports = router; 