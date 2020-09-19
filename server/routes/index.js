const express = require('express'); 
const bodyParser = require('body-parser'); 
const router = express.Router(); 
const models  = require('../models');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  
});



module.exports = router; 