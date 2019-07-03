var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var posteoRouter = require('./routes/posteo');
var categoriaRouter = require('./routes/categoria');
var perfilRouter = require('./routes/perfil')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/posteo', posteoRouter);
app.use('/categoria', categoriaRouter);
app.use('/perfil', perfilRouter);

module.exports = app;
