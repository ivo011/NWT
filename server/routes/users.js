const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const models = require('../models');
const router = express.Router();


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.get('/', (req, res) => {
    models.User.findAll()
        .then((users) => {
            res.send(users);
        })
});

router.post('/create', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        models.User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
            avatar: req.body.avatar,
            age: req.body.age,
        }).then(() => {
            res.send('User CREATED!');
        })
    } catch (error) {
        res.send('User registration error!');
    }

});

router.post('/login', (req, res) => {
    models.User.findOne({
        where: {
            username: req.body.username
        }
    }).then(async (user) => {

        if (user == null) {            
            return res.status(400).send("Cannot fnd user");
        }

        const result = await bcrypt.compare(req.body.password, user.password)

        if (result == true) {
            res.send("Successfully logged in!!");
        } else {
            res.send("Incorrect password!!");
        }
    }).catch(err => console.log(err))

})

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