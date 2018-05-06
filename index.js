const express = require('express');
const morgan = require('morgan');
const cheerio = require('cheerio');
const staticCompiler = require("express-static-compiler");

const app = express();
app.use(morgan('dev'));

app.use('/public', staticCompiler('public', {
  extensions: ['.html'],
  processor: function(data, cb, filename, req) {
    const querySelector = req.query.querySelector;
    const $ = cheerio.load(data);
    const result = $.html(querySelector);
    cb(null, result);
  }
}));

app.use(express.static('public'));

app.get('/favicon.ico', (req, res) => res.sendStatus(204));

app.listen(3000, () => console.log('Express Athena running on 3000...'));