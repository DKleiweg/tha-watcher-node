var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/make-api-call', async (req, res) => {
  try {
    // Make an API call using axios
    const response = await axios.get('https://dummyjson.com/products');

    // Handle the response data
    const responseData = response.data;
    res.json(responseData);
  } catch (error) {
    // Handle errors
    console.error('Error making API call:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
