const express = require('express');
const { create }  = require('express-handlebars');

const obtenerZodiaco = require('./zodiaco');
const signoZodiacalChino = require('./zodiacoChino');

const app = express();
const port = 3000;

const hbs = create({ /* config */ });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/zodiaco/:date', (req, res) => {
  // console.log(req.params.date);
  // console.log(typeof req.params.date);
  const result = obtenerZodiaco(req.params.date);
  res.render('zodiac', { nombre: result.nombre, descripcion: result.descripcion});
})

app.get('/astrologia-china/:date', (req, res) => {
  const result = signoZodiacalChino(req.params.date);
  res.render('zodiac', { nombre: result.nombre, descripcion: result.descripcion});
})

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.listen(port, () => {
  console.log(`Zodiac app listening on port ${port}`)
})