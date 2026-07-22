const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/security-systems', (req, res) => {
  res.render('security-systems');
});

app.get('/why-sutton', (req, res) => {
  res.render('why-sutton');
});

app.get('/crime-in-your-area', (req, res) => {
  res.render('crime');
});

app.get('/quote', (req, res) => {
  res.render('quote');
});

app.get('/existing-customers', (req, res) => {
  res.render('existing-customers');
});

app.get('/moving-home', (req, res) => {
  res.render('moving-home');
});

app.get('/help', (req, res) => {
  res.render('help');
});

app.get('/privacy', (req, res) => {
  res.render('privacy');
});

app.get('/terms', (req, res) => {
  res.render('terms');
});

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () =>
    console.log(`🟢  Server running on http://localhost:${PORT}`)
  );
}
