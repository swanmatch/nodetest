const express = require("express");
const app = express();
const sassMiddleware = require('node-sass-middleware');
const router = require('./routes');
let path = require('path');
let port = 3000;

app.set('view engine', 'pug')
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  //sourceMap: true
}));

app.use('/', router)
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port, function(){});
