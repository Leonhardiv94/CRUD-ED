const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://leonhardiv94:mhOmqed32GxT8qBc@leonhard.7sh5rq4.mongodb.net/?retryWrites=true&w=majority&appName=Leonhard')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('No se pudo conectar a MongoDB', err));

app.get('/', (req, res) => {
    res.send('¡Backend en funcionamiento!');
});

app.use('/api/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
