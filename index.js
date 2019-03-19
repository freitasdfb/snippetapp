const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nunjucks = require('nunjucks');
const routes = require('./app/routes');

const app = express();

const { User } = require('./app/models');

// User.create({ name: 'Bruna', email: 'bruna@ela.pix.com.br', password: '123456' });

app.use(bodyParser.urlencoded({ extended: false }));

nunjucks.configure(path.resolve('app', 'views'), {
  autoescape: true,
  express: app,
});

app.set('view engine', 'njk');

app.use('/', routes);
app.listen(3000);
