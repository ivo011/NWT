const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const models = require('../models');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.get('/', (req, res) => {
    models.User.findAll()
    .then((users)=>{
        res.send(users);
    })
});

router.post('/create', (req, res) => {
    models.User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar,
        age: req.body.age,
    }).then(() => {
        res.send('User CREATED!');
    });
});

router.delete('/delete/:id', (req, res) => {
    models.User.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.send("User Deleted!");
    })
})


module.exports = router;