require('dotenv').config();
require('@babel/register');

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();
const indexRouter = require('./routes/index');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/', sayHello)

app.use('/', indexRouter);

app.listen(process.env.PORT, () => {
  console.log(`server started on http://localhost:${process.env.PORT}`);
});
