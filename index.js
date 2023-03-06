const express = require('express');
const obtenerZodiaco = require('./zodiaco');
const signoZodiacalChino = require('./zodiacoChino');

// const result = obtenerZodiaco('19811117');
// console.log(result);

const app = express();
const port = 3000;


const getZodiaco = (date) => {
  // Aquí el algoritmo para la selección del zodiaco
  return {
    name: 'Signo chino',
    description: 'lorem Ipsum del signo chino',
  };
}

const getChineseZodiaco = (date) => {
  // Aquí el algoritmo para la selección del zodiaco chino
  return {
    name: 'Signo chino',
    description: 'lorem Ipsum del signo chino',
  };
}

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/zodiaco/:date', (req, res) => {
  // console.log(req.params.date);
  // console.log(typeof req.params.date);
  const result = obtenerZodiaco(req.params.date);
  res.send(result);
})

app.get('/astrologia-china/:date', (req, res) => {
  const result = signoZodiacalChino(req.params.date);
  res.send(result);
})

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})