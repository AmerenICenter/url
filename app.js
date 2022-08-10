const express = require('express');
const mongoose = require('mongoose');
const URL = require('./models/URL');
const path = require('path');
const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
{
  /* <td><%= codes[i] %></td> */
}
mongoose.connect('mongodb://localhost:27017/qr-code-db');

app.get('/', (req, res) => {
  URL.find({}, function (err, data) {
    console.log(data);
  });

  res.render('index');
});

//view all your qr codes.
app.get('/admin', (req, res) => {
  URL.find({}, function (err, data) {
    res.render('admin', {
      data: data,
    });
  });
});

//function which generates QR codes.

//run app.
app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
