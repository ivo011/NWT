const express = require('express'); 
const bodyParser = require('body-parser'); 
const router = express.Router(); 
const models  = require('../models');
const verify = require('../config/verifyToken');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//Privatna ruta...
router.get('/',verify, (req, res) => {
    models.Post.findAll()
    .then((posts)=>{
        res.send(posts);
    })
});

  router.post('/create', (req, res) => {
    models.Post.create({
      text: req.body.text,       
    }).then(() => {
      res.send('Post Created!');
    });
  });


  router.delete('/delete/:id', (req, res) => {
    models.Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.send("Post Deleted!");
    })
})



module.exports = router; 