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


router.get('/', (req, res) => {
    models.Post.findAll({
      order: [
        ['createdAt', 'DESC']       
    ], 
    include:[models.User, models.Like]
    })
    .then((posts)=>{
        res.send(posts);
    })
});

  router.post('/create', (req, res) => {    
    const auth_token = JSON.parse(req.header('auth_token'));       
    const decoded = jwt.verify(auth_token.token, "secret");   
    models.Post.create({
      text: req.body.text,
      picture: req.body.picture,  
      user_id: decoded.userId
    }).then(() => {
      res.send('Post Created!');
    });
  });


  router.put('/update/:id', (req, res) => {
    models.Post.update(
      {  text: req.body.text }, 
      {        
        where: { 
          post_id: req.params.id 
        }
      }).then(() => {
        
        res.send("Post Updated!");
    });
})

  router.delete('/delete/:id', (req, res) => {
    models.Post.destroy({
        where: {
            post_id: req.params.id
        }
    }).then(() => {
        res.send("Post Deleted!");
    })
})



module.exports = router; 