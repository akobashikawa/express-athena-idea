const express = require('express');
const app = express();
const path = require('path');
const athena = require('./lib/athena');

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');
app.engine("html", athena);

app.get('/', (req, res) => {
  res.render('index', {
    querySelector: req.query.querySelector
  });
});
app.get('/favicon.ico', (req, res) => res.sendStatus(204));
app.use(express.static('public'));

app.listen(3000, () => console.log('Express Athena running on 3000...'));