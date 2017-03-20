var express = require('express');

// Create our App
var app = express();

// app.use(express.static('public'));

// app.listen(3000, function () {
//   console.log('Server On');
// });

const PORT = process.env.PORT || 3000;

// app.use(function (req, res, next) {
//   if (req.header['x-forward-proto'] === 'http') {
//     next();
//   } else {
//     res.redirect('http://' + req.hostname + req.url)
//   }
// });

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('express server is up on port ' + PORT);
});
