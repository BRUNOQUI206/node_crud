const express = require('express');
const router = express.Router();

const NewsController = require('./controllers/NewsController');

router.get('/news', NewsController.searchAll);

module.exports = router;