const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes.root');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {    
    if (err.isBoom) {
      const { output } = err; 
    const{statusCode,message} = output.payload;
      res.status(output.statusCode).json( {status:false,statusCode,message});
    } else {
      res.status(500).json({ status:false, statusCode: 500, message:"Internal Server Error" });

    } 
  });

module.exports = app;