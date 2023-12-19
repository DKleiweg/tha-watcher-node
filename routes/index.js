var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})


module.exports = router;
