const express = require('express');
const bodyParser = require('body-parser');
import models from './models';
import router from './routes'; 


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(router); 

app.get("/", (req, res) => {
    res.send("server working");
});

models.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App is running on port ${port}...`)
    });

});