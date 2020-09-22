const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');
const models = require('./models');
const cors = require('cors');

const app = express();
app.set('view-engine', 'ejs')
const port = process.env.PORT || 5000;

//Express session
app.use(session({secret: "secret",
    resave: false, 
    saveUninitialized: false
})); 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Routes
const homeRoute = require('./routes');
const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts');
const commentsRoute = require('./routes/comments')

app.use("/", homeRoute); 
app.use("/users", usersRoute);
app.use("/posts", postsRoute); 
app.use("/comments", commentsRoute);

app.use(cors());

app.use(flash())

models.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App is running on port ${port}...`)
    });

});