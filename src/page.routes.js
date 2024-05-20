const express = require("express");
const pageRouter = express.Router();

pageRouter.get('/', (req, res) => {
  res.redirect('/home');
});

pageRouter.get('/home', (req, res) => {
  res.json({ message: 'Welcome to the Home page!' });
});

pageRouter.get('/news', (req, res) => {
  res.json({ message: 'Welcome to the News page!' });
});

module.exports = pageRouter;


// const express = require("express");
// const path = require("path");
// const pageRouter = express.Router();

// pageRouter.get('/', (req, res) => {
//   res.redirect('/home');
// });

// pageRouter.get('/home', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../eecasperlibero/browser/index.html'));
// });

// pageRouter.get('/news', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../eecasperlibero/browser/index.html'));
// });

// module.exports = pageRouter;

