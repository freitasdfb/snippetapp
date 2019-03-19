const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nunjucks = require('nunjucks');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

nunjucks.configure(path.resolve('app','views'), {
  autoescape: true,
  express: app,
});

app.set('view engine', 'njk');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000);
