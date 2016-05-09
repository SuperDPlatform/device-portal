var express = require('express');
var path = require('path');
var sassMiddleware = require('node-sass-middleware');
var sassModuleImporter = require('sass-module-importer');

var app = express();

app.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public'),
  debug: true,
  outputStyle: 'compressed',
  importer: sassModuleImporter()
}));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);
