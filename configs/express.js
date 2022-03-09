// Packages (required)
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require("morgan");
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require ('cors');
const flash = require('connect-flash');
const router = express.Router();
const multer = require('multer');

// Exported Express Module
module.exports =  function () {
  // Initialize express
  const app = express();
  // Multer file options
  const multerMid = multer({storage: multer.memoryStorage(), limits: {fileSize: 5 * 1024 * 1024,}});
  // Set cors variables
  app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
    next();
  });
  //Log out to stdout for dev format all http/https request/responses or compress based on environment
  app.use(morgan('dev'));
  // Multer image upload
  app.use(multerMid.any('file'));
  //Set req.body property with any type (extended: true)
  app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));
  app.use(bodyParser.json({limit: '50mb'}));

  app.use(cors());

  app.use('/insecure', router);

  app.options('*', cors());

  //Set session secret
  app.use(session({secret: ')H+MbQeThWmZq4t7', resave: true, saveUninitialized: true}));

  app.use(flash());

  app.use(cookieParser());

  // All Routes
  require('../routes/swarm.routes')(app, express);
  // Return configured express
  return app;
};