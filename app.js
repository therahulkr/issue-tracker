const express = require('express')
const app = express();
const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');

// This method is used to parse the incoming requests with JSON 
// payloads and is based upon the bodyparser.
app.use(express.json());
// function is a built-in middleware function in Express. 
// It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded());
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.use(cookieParser());


//routes import
// const project = require('./routes/productRoute');

// app.use('/api/v1',project);

// setting up the view engine and path for static files
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static(process.env.ASSETPATH))


app.use('/', require('./routes'));
module.exports = app;