const express = require('express'); 
const bodyParser = require('body-parser'); 
const router = express.Router(); 
const models  = require('../models');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/test', (req, res)=>{
    console.log(req.body);
    res.send(req.body); 
}); 

router.post('/create', function(req, res) {
    models.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      avatar: req.body.avatar,
      age: req.body.age,      
    }).then(function() {
      res.redirect('/');
    });
  });


export default router; 