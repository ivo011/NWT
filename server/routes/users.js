const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
const cors = require('cors'); 
const models = require('../models');
const {registerValidation, LoginValidation} = require('../config/validation');
const router = express.Router();


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(cors());


//USER REGISTER


router.post('/register', async (req, res) => {
    
    //Validation
    const { error } = registerValidation(req.body); 
    if(error) return res.status(400).send(error.details[0].message)

    //Provjera postoji li vec email
    const emailExists = await models.User.findOne({ where: { email: req.body.email } });    
    if(emailExists) return res.status(400).send("Email is already used!!");

    //Create user
    try {        
        const salt = await bcrypt.genSalt(10);
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
        res.status(400).send('User registration error!');
    }
});

//USER LOGIN

router.post('/login', async (req, res) => {

     //Validation
     const { error } = LoginValidation(req.body); 
     if(error) return res.status(400).send(error.details[0].message);

     //Provjera postoji li vec email (var user da je mozemo i posli koristit za provjeru pass)
    const user = await models.User.findOne({ where: { email: req.body.email } });    
    if(!user) return res.status(400).send("Email doesn't exist !!");
     
    //Provjera passworda
    const validPassword = await bcrypt.compare(req.body.password, user.password); 
    if(!validPassword) return res.status(400).send("Invalid password !!");
     
    //TOKEN
    const token =  jwt.sign({email: user.email, userId: user.user_id}, "secret", {expiresIn: "1h"}); 
    return res.status(200).json({ token:token, Success:true});
    // res.header('auth_token', token).send(token);    

}); 
      
//GET USER 

router.get('/user', (req, res) => {

    try{
        const auth_token = JSON.parse(req.header('auth_token'));     
        const decoded = jwt.verify(auth_token.token, "secret"); 
        console.log(decoded)
        console.log("OGET USER...................................")
        models.User.findOne({
        where:{
            user_id: decoded.userId
        }
    }).then((user)=>{        
        res.send(user);
    })
    } catch (error){
        res.status(400).send(error);
    }
    
})


//DELETE USER

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