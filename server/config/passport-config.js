const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs');
const models = require('../models');

function initialize(passport){
    const authenticateUser = async (username, password, done) => {        
        models.User.findOne({
            where: {
                username: username
            }
        }).then(async (user) => {    
            if (user == null) {                            
                return done(null, false, {message: "Cannot find user!!"});
            }   
            const result = await bcrypt.compare(password, user.password)   
            if (result == true) {
                  
                return done(null, user, {message: "Successfully logged in!!"});
            } else {
                 
                return done(null, false, {message: "Incorrect password!!"});
            }
        }).catch(err => console.log(err))
   
    }

    passport.use(new LocalStrategy({usernameField: 'username'},authenticateUser))
    
    passport.serializeUser((user, done) => { 
        return done(null, user.id);
      });

      passport.deserializeUser((id, done) => {
          console.log(id)
         models.User.findOne({
             where:{
                 id:id
                }
            })
            .then((user)=>{                       
               return done(user);
            })  
            .catch(err => console.log(err))           
        });
    
}

module.exports = initialize;