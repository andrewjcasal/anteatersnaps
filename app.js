const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home');
})

app.get('/about', function (req, res) {
  res.render('about');
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})