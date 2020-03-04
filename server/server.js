const express = require('express');
const bodyParser = require('body-parser');
import models from './models';



const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

//Routes
const homeRoute = require('./routes');
const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts'); 

app.use("/", homeRoute); 
app.use("/users", usersRoute);
app.use("/posts", postsRoute); 


models.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App is running on port ${port}...`)
    });

});