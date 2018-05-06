const express = require('express');
const morgan = require('morgan');
const cheerio = require('cheerio');
const staticCompiler = require("express-static-compiler");
const axios = require('axios');

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

app.use('/remote', (req, res, next) => {
  const url = req.query.url;
  const querySelector = req.query.querySelector;
  console.log(url, querySelector);
  axios
    .get(url)
    .then(response => {
      const data = response.data;
      const $ = cheerio.load(data);
      const result = $.html(querySelector);
      res.end(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).end();
    });
});

app.use(express.static('public'));

app.get('/favicon.ico', (req, res) => res.sendStatus(204));

app.listen(3000, () => console.log('Express Athena running on 3000...'));